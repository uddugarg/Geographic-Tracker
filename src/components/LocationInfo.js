import React from 'react';
import { Icon } from '@iconify/react';
import bxLinkExternal from '@iconify-icons/bx/bx-link-external';
import { Link } from 'react-router-dom';


function LocationInfo({ info }) {

    const name = info.name;

    return (
        <div className='info'>
            <h2>
                {info.name + ' '}
                <Link to={`/country/${name}`}>
                    <Icon icon={bxLinkExternal} className='info__link' />
                </Link>
            </h2>
            <ul>
                <li>Capital: <strong>{info.capital}</strong></li>
                <li>Dialing Code: <strong>{info.dialingCode}</strong></li>
                <li>Currency: <strong>{info.currencySymbol + ' - ' + info.currencyName}</strong></li>
                <li>Population: <strong>{info.population}</strong></li>
                <li>Land Area: <strong>{info.landArea} km<sup>2</sup></strong></li>
            </ul>
        </div>
    )
}

export default LocationInfo
