import React, { useEffect, useMemo, useRef, useState } from 'react';
// import { YMaps, Map, Placemark, SearchControl, GeolocationControl,} from '@pbe/react-yandex-maps';
import { YMaps, Map, Placemark, SearchControl, GeolocationControl, withYMaps} from '@pbe/react-yandex-maps';
import './gpsStyle.css'
const GPS = ({findAdress, ...props}) => {
    const getGeoLocation = ymaps => {
        return ymaps.geolocation
          .get({ provider: "yandex", autoReverseGeocode: true, mapStateAutoApply: true })
          .then(function (result) {
            console.log(result.geoObjects.get(0).properties.get('metaDataProperty'));
        })
      };
      
    const posMap = React.memo(({ymaps, geocode}) => {
        const [loadedCoords, setLoading] = React.useState(false);
        const [coords, setCoords] = React.useState([56.800084, 59.908718])

        const onLoad = () => {
            ymaps.geocode()
              .then(res => {
                setLoading(true)
                console.log(res.geoObjects.get(0).properties.get('metaDataProperty').getAll());
              });
        }

        React.useEffect(() => {
            onLoad()
        }, [])

        return (
            loadedCoords && (
              <Map
                width={'100%'}
                height={'100vh'}
                options={{
                    restrictMapArea: [[56.830569, 59.852335], [56.755036, 59.999630]],
                    suppressMapOpenBlock: true}}
                modules={["geolocation", "geocode"]}
                defaultState={{center: [56.800084, 59.908718], zoom: 13}}
              />
            )
          );
    })

    const ConnectedMap = React.useMemo(() => {
        return withYMaps(posMap, true, [["geolocation", "geocode"]]);
      }, [posMap]);
    

    const handleApiAvaliable = ymaps => {
        const geolocation = getGeoLocation(ymaps);
    };
    const [location, setLocation] = useState(null)
    const [adress, setAdress] = useState(null)
    const mapRef = useRef(null)
    const onResultShow = () => {
        if (mapRef.current) {
             
            setAdress(mapRef.current.getRequestString())
            
            setLocation(mapRef.current.getResultsArray())
            console.log(location[0].geometry._coordinates)
            
        }
        findAdress(adress)
    }

    

    // const geoLocation = useMemo(() => setLocation())
    // const geo = useYMaps('geocode')
    return (
        <div className=''>
            <YMaps query={{ lang: 'ru_RU', 
            apikey: '8e2c6a37-a238-4ab8-80f7-eccef9472ef9',
            load: "Map,Placemark,control.GeolocationControl,control.FullscreenControl,control.SearchControl,geoObject.addon.balloon"}}>
                <Map
                width={'100%'}
                height={'100vh'}
                options={{
                    restrictMapArea: [[56.830569, 59.852335], [56.755036, 59.999630]],
                    suppressMapOpenBlock: true}}
                modules={["geolocation", "geocode"]}
                defaultState={{center: [56.800084, 59.908718], zoom: 13}}
                onLoad={ymaps => handleApiAvaliable(ymaps)}>
                    <SearchControl instanceRef={mapRef} onResultShow={onResultShow} 
                    options={{
                        float: 'right',
                        kind: 'street',
                        provider: 'yandex#map',
                        size: 'small',
                        strictBounds: true,
                        noSelect: true,
                        boundedBy: [[56.830569, 59.852335], [56.755036, 59.999630]]}}/>
                    {/* <GeolocationControl instanceRef={location} options={{}}/> */}
                    {/* <Placemark geometry={[56.800086, 59.908717]} options={{
                        preset: 'islands#redCircleDotIcon',
                        draggable: true
                    }}/> */}
                </Map>
            </YMaps>
        </div>
    );
};

export default GPS;