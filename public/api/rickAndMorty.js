const BASE_URL = 'https://rickandmortyapi.com/api';

export async function fetchCharacters() {
    try {
        const res = await fetch(`${BASE_URL}/character`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.error('Error fetching characters:', err);
        throw err;
    }
}