import { useState, useEffect } from 'react';
import { withErrorApi } from '@hoc-helpers/withErrorApi';

import { API_PEOPLE } from '@constants/api';
import { getApiResourse } from '@utils/network';
import { getPeopleId, getPeopleImg } from '@services/getPeopleData';
import PeopleList from '@components/PeoplePage/PeopleList';



const PeoplePage = ({ setErrorApi }) => {
    const [people, setPeople] = useState(null);
    

    const getResource = async (url) => {
        const res = await getApiResourse(url);

        if (res) {
            const peopleList = res.results.map(({name, url}) => {
                const id = getPeopleId(url);
                const img = getPeopleImg(id);
    
                return {
                    id,
                    name,
                    url,
                    img
                } 
            })

            setPeople(peopleList)
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }
    }

    useEffect(() => {
        getResource(API_PEOPLE);
    }, [])

  return (
        <>
            <h1>Navigation</h1>
            {people && (
                <PeopleList people={people} />
            )}
        </>
  )
}

export default withErrorApi(PeoplePage);