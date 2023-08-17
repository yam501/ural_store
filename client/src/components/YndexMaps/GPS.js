import React, { useMemo, useState } from 'react';
import { YMaps, Map, Placemark, SearchControl, GeolocationControl, useYMaps,  } from '@pbe/react-yandex-maps';

const GPS = () => {
    const [location, setLocation] = useState([56.800281, 59.906966])
    // const geoLocation = useMemo(() => setLocation())
    return (
        <div>
            <YMaps  onLoad='"https://api-maps.yandex.ru/2.1/?apikey=8e2c6a37-a238-4ab8-80f7-eccef9472ef9&lang=ru_RU"' query={{ lang: 'ru_RU', 
            load: "Map,Placemark,control.GeolocationControl,control.FullscreenControl,control.SearchControl,geoObject.addon.balloon"}}>
                <Map defaultState={{center: [56.800083, 59.908720], zoom: 12.5}}>
                    <Placemark options={{preset: 'islands#redDotIcon', draggable: true}} geometry={location}/>
                    <SearchControl options={{float: 'right', provider: 'yandex#search'}}/>
                    <GeolocationControl options={{}}/>
                </Map>
            </YMaps>
        </div>
    );
};

export default GPS;