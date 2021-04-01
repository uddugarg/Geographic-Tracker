import React from 'react';
import { Icon } from '@iconify/react';
import earthOutline from '@iconify-icons/ion/earth-outline';

function Header({ name }) {

    return (
        <div className='header'>
            {name ? (
                <h1>
                    <Icon icon={earthOutline} className='header__icon' />
                    {name}
                </h1>
            ) : (
                <h1>
                    <Icon icon={earthOutline} className='header__icon' />
                    Geographic Tracker
                </h1>
            )}
        </div>
    )
}

export default Header
