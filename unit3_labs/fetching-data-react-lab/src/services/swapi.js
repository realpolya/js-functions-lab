const BASE_URL = `https://swapi.dev/api/starships/?search=`;

const show = async (starship) => {
    try {
        const res = await fetch(BASE_URL + starship);
        const data = await res.json();
        // console.log(data);
        return data;
    } catch (err) {
        console.error(err);
    }
}

// show('CR90');

export { show };