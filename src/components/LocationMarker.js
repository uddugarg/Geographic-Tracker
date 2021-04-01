import React from 'react'
import { Icon } from '@iconify/react';
import locationIcon from '@iconify-icons/akar-icons/location';
import { Link } from 'react-router-dom';


function LocationMarker({ lat, lng, onMouseEnter, name }) {
    return (
        <Link to={`/country/${name}`}>
            <Icon icon={locationIcon} className='location__icon' onMouseEnter={onMouseEnter} />
        </Link>
    )
}

export default LocationMarker
