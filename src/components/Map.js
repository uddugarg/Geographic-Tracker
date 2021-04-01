import React, { useEffect, useState } from 'react';
import GoogleMapReact from "google-map-react";
import LocationMarker from './LocationMarker';
import LocationInfo from './LocationInfo';
import axios from 'axios';
import Loader from './Loader';
import Header from './Header';
import { Link } from 'react-router-dom';

function Map({ center, zoom }) {

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [locationInfo, setLocationInfo] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true);
            const result = await axios('https://restcountries.eu/rest/v2/all')

            setCountries(result.data);
            setLoading(false);
        }

        fetchEvents();
    }, [])


    const markers = countries.map((c, i) => (
        <LocationMarker lat={c.latlng[0]} lng={c.latlng[1]}
            onMouseEnter={() => setLocationInfo({
                name: c.name,
                capital: c.capital,
                dialingCode: c.callingCodes[0],
                currencySymbol: c.currencies[0].symbol,
                currencyName: c.currencies[0].name,
                population: c.population,
                landArea: c.area
            })
            } name={c.name} />
    ))

    return (
        <>
            <Header />
            {!loading ? (
                <div className='map'>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyCfOhhDFZh-OUCdzEvPG9gSnOq2Bi_Cz_g" }}
                        defaultCenter={center}
                        defaultZoom={zoom}
                    >
                        {markers}
                    </GoogleMapReact>
                    {locationInfo && <LocationInfo info={locationInfo} />}
                </div>
            ) : (
                <Loader />
            )}
        </>
    );
};

Map.defaultProps = {
    center: {
        lat: 20,
        lng: 77,
    },
    zoom: 5,
};

export default Map
