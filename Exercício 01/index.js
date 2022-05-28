import fetch from 'node-fetch';

const baseURL = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

// Promise
function fetchWithPromise() {
    fetch(baseURL).then(response => {
        response.json().then(json => {
            console.log(json);
        });
    });
}

fetchWithPromise();

// Async/await

async function fetchAsync() {
    const response = await fetch(baseURL);
    const json = await response.json();
    console.log(json);
}

fetchAsync();