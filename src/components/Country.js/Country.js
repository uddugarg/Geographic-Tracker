import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import bxLinkExternal from '@iconify-icons/bx/bx-link-external';
import Header from '../Header';
import './Country.css';

function Country(props) {

    const name = props.match.params.name;

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const result = await axios('https://restcountries.eu/rest/v2/all')
            setCountries(result.data);
        }
        fetchEvents();
    }, [])

    const details = countries.filter(c => c.name === name);

    console.log(details);

    return (
        <div className='country'>
            <Header name={name} />
            {details.map((country, i) => (
                <div className='country__section' key={i}>
                    <section className="left">
                        <img src={country.flag} alt="" />
                        <div className='country__abbr'>
                            <h2>
                                {country.nativeName}  ({country.subregion})
                                <span>
                                    <a href={`https://en.wikipedia.org/wiki/${name}`}>
                                        <Icon icon={bxLinkExternal} className='info__link' />
                                    (for more information)
                                </a>
                                </span>
                            </h2>
                            <span>{country.altSpellings[0] + ' | ' + country.altSpellings[1] + ' | ' + country.altSpellings[2] + ' | ' + country.altSpellings[3]}</span>
                        </div>
                    </section>
                    <section className="right">
                        <p>{country.name} - Officially the {country.altSpellings[2]} is a country in {country.subregion}. It has a population of {country.population} people and has an area of {country.area}km<sup>2</sup>.
                         Bounded or share its Borders by {country.borders[0] + ', ' + country.borders[1] + ', ' + country.borders[2]} etc. Language spoken here is {country.languages[0].name}.
                         Capital of {country.name} is {country.capital}.</p>
                    </section>
                </div>
            ))}
        </div>
    )
}

export default Country
