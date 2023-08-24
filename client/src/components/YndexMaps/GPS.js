import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
// import { YMaps, Map, Placemark, SearchControl, GeolocationControl,} from '@pbe/react-yandex-maps';
import { YMaps, Map, Placemark, SearchControl, GeolocationControl, withYMaps, ZoomControl} from '@pbe/react-yandex-maps';
import './gpsStyle.css'
import { Context } from '../..';
const GPS = ({findAdress, ...props}) => {
  const {user} = useContext(Context)
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
    const [state, setState] = useState({
    title: '',
    center: [56.800084, 59.908718],
    zoom: 13, });

    const [mapConstructor, setMapConstructor] = useState(null);
    
    const placemarkRef = useRef(null)
    const mapRef = useRef(null);
    const searchRef = useRef(null);
    const locationRef = useRef(null)
    const handleReset = () => {
        searchRef.current.value = "";
        setDefaultAdress()
        props.onClick()
      };
    const [adress, setAdress] = useState('')
    const setDefaultAdress = async () => {
      await user.changeDefaultAddressByNumber(state.title, user._user.number)
    }
    const defaultAddress = useMemo(() => {
      setAdress(user._user.defaultAddress)
      return adress
    }, [user._user.defaultAddress, adress])
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
        findAdress(defaultAddress)
      }, [mapConstructor]);

    const geometryChange = (e) => {
      const newCoords = placemarkRef.current.geometry.getCoordinates();
      mapConstructor.geocode(newCoords).then((res) => {
        const nearest = res.geoObjects.get(0);
        const foundAddress = nearest.properties.get("text");
        const [centerX, centerY] = nearest.geometry.getCoordinates();
        const [initialCenterX, initialCenterY] = initialState.center;
        if (centerX !== initialCenterX && centerY !== initialCenterY) {
          setState((prevState) => ({ ...prevState, title: foundAddress }));
          searchRef.current.value = foundAddress
        }
      });
    }

    return (
        <div className=''>
            <YMaps query={{ lang: 'ru_RU', 
            apikey: '8e2c6a37-a238-4ab8-80f7-eccef9472ef9',
            load: "Map,Placemark,control.GeolocationControl,control.FullscreenControl,control.SearchControl,geoObject.addon.balloon"}}>
                <div className='search_map_box'>
                    <div className='search_map_content'>
                        <input className='search_content_input' ref={searchRef} placeholder='Поиск...' disabled={!mapConstructor}/>
                        {/* <div>
                          {state.title}
                        </div> */}
                    </div>
                    <button onClick={handleReset} className='search_submit_btn' disabled={!state.title.length}>
                        Ok
                    </button>
                </div>
                <Map
                {...mapOptions}
                state={state}
                onLoad={setMapConstructor}
                instanceRef={mapRef}>
                    {/* <GeolocationControl 
                    instanceRef={locationRef}
                    {...geolocationOptions} /> */}
                    <ZoomControl/>
                    <Placemark
                    instanceRef={placemarkRef}
                    geometry={state.center}
                    onDragEnd={geometryChange}
                    options={{
                      useMapMarginInDragging: true,
                      visible: true,
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