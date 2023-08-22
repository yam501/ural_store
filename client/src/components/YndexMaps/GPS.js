import React, { useEffect, useMemo, useRef, useState } from 'react';
// import { YMaps, Map, Placemark, SearchControl, GeolocationControl,} from '@pbe/react-yandex-maps';
import { YMaps, Map, Placemark, SearchControl, GeolocationControl, withYMaps, ZoomControl} from '@pbe/react-yandex-maps';
import './gpsStyle.css'
const GPS = ({findAdress, ...props}) => {
    const mapOptions = {
        modules: ["geocode", "SuggestView"],
        defaultOptions: { suppressMapOpenBlock: true, restrictMapArea: [[56.830569, 59.852335], [56.755036, 59.999630]]},
        width: '100%',
        height: '100vh',
      };
      
      const geolocationOptions = {
        defaultOptions: { maxWidth: 128 },
        defaultData: { content: "Где я?" },
      };
      
      const initialState = {
        title: "",
        center: [56.800084, 59.908718],
        zoom: 13,
      };
    const [state, setState] = useState({ ...initialState });
    const [mapConstructor, setMapConstructor] = useState(null);
    const mapRef = useRef(null);
    const searchRef = useRef(null);
    const handleReset = () => {
        setState({ ...initialState });
        searchRef.current.value = "";
        mapRef.current.setCenter(initialState.center);
        mapRef.current.setZoom(initialState.zoom);
      };
    useEffect(() => {
        if (mapConstructor) {
          new mapConstructor.SuggestView(searchRef.current, { 
            boundedBy: [[56.830569, 59.852335], [56.755036, 59.999630]], 
            offset: [0, 2],
            strictBounds: true,
            provider: 'yandex#map'}).events.add("select", function (e) {
            const selectedName = e.get("item").value;
            mapConstructor.geocode(selectedName).then((result) => {
              const newCoords = result.geoObjects.get(0).geometry.getCoordinates();
              setState((prevState) => ({ ...prevState, center: newCoords }));
            });
          });
        }
      }, [mapConstructor]);
    const handleBoundsChange = (e) => {
        const newCoords = mapRef.current.getCenter();
        mapConstructor.geocode(newCoords).then((res) => {
          const nearest = res.geoObjects.get(0);
          const foundAddress = nearest.properties.get("text");
          const [centerX, centerY] = nearest.geometry.getCoordinates();
          const [initialCenterX, initialCenterY] = initialState.center;
          if (centerX !== initialCenterX && centerY !== initialCenterY) {
            setState((prevState) => ({ ...prevState, title: foundAddress }));
          }
        });
      };
      
    return (
        <div className=''>
            <YMaps query={{ lang: 'ru_RU', 
            apikey: '8e2c6a37-a238-4ab8-80f7-eccef9472ef9',
            load: "Map,Placemark,control.GeolocationControl,control.FullscreenControl,control.SearchControl,geoObject.addon.balloon"}}>
                <div className='search_map_box'>
                    <div className='search_map_content'>
                        <input className='search_content_input' ref={searchRef} placeholder='Поиск...' disabled={!mapConstructor}/>
                    </div>
                    <button onClick={() => findAdress(state.title)} className='search_submit_btn' disabled={Boolean(!state.title.length)}>
                        Ok
                    </button>
                </div>
                <Map
                {...mapOptions}
                state={state}
                onLoad={setMapConstructor}
                onBoundsChange={handleBoundsChange}
                instanceRef={mapRef}>
                    <GeolocationControl {...geolocationOptions} />
                    <ZoomControl/>
                    <Placemark 
                    geometry={[56.800084, 59.908718]} 
                    options={{
                        preset: 'islands#redCircleDotIcon',
                        draggable: true
                    }}
                    />
                </Map>
            </YMaps>
        </div>
    );
};

export default GPS;