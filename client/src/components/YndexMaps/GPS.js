import React, { useEffect, useMemo, useRef, useState } from 'react';
// import { YMaps, Map, Placemark, SearchControl, GeolocationControl,} from '@pbe/react-yandex-maps';
import { YMaps, Map, Placemark, SearchControl, GeolocationControl,} from '@pbe/react-yandex-maps';
import './gpsStyle.css'
const GPS = ({findAdress, show, ...props}) => {
    const [location, setLocation] = useState([56.800281, 59.906966])
    const [adress, setAdress] = useState(null)
    const mapRef = useRef(null)
    const onResultShow = () => {
        if (mapRef.current) {
             
            setAdress(mapRef.current.getRequestString())
            
            console.log(adress)
            
        }
        findAdress(adress)
    }
    

    // const geoLocation = useMemo(() => setLocation())
    // const geo = useYMaps('geocode')
    return (
        <div className={`map ${show ? 'active' : ''}`}>
            <YMaps query={{ lang: 'ru_RU', 
            apikey: '8e2c6a37-a238-4ab8-80f7-eccef9472ef9',
            load: "Map,Placemark,control.GeolocationControl,control.FullscreenControl,control.SearchControl,geoObject.addon.balloon"}}>
                <Map modules={["geolocation", "geocode"]} defaultState={{center: [56.800083, 59.908720], zoom: 12.5}}>
                    <SearchControl instanceRef={mapRef} onResultShow={onResultShow} options={{float: 'right', kind: 'street', provider: 'yandex#map'}}/>
                    <GeolocationControl options={{}}/>
                </Map>
            </YMaps>
        </div>
    );
};

export default GPS;