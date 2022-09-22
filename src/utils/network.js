const SWAPI_ROOT = 'https://swapi.dev/api/';
const SWAPI_PEOPLE = 'people'

export const getApiResourse = async (url) => {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            console.error('Could not fetch.', res.status);
            return false;
        }

        return await res.json();
    } catch (error) {
        console.error('Could not fetch.', error.message)
        return false;
    }
}

/* getApiResourse(SWAPI_ROOT+SWAPI_PEOPLE)
    .then(body => console.log(body)) */

(async () => {
    const body = await getApiResourse(SWAPI_ROOT+SWAPI_PEOPLE);
    console.log(body)
})()

// getApiResourse(SWAPI_ROOT+SWAPI_PEOPLE);
 