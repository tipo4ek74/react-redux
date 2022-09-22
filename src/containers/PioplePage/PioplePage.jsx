import { useState, useEffect } from 'react';

import cn from 'classnames';
import styles from './PioplePage.module.css';
import { API_PIOPLE } from '../../constants/api';
import { getApiResourse } from '../../utils/network';


const PioplePage = () => {
    const [people, setPeople] = useState(null);

    const getResource = async (url) => {
        const res = await getApiResourse(url);
        const peopleList = res.results.map(({name, url}) => {
            return {
                name,
                url
            }
        })

        setPeople(peopleList)
    }

    useEffect(() => {
        getResource(API_PIOPLE);
    }, [])

  return (
    <>
        {people && (
            <ul>
                {people.map(({name, url}) => {
                    return(
                        <li key={name}>{name}</li>
                    )
                })}
            </ul>
        )}
        
    </>
  )
}

export default PioplePage;
