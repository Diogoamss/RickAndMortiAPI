export const API_URL = 'https://rickandmortyapi.com/api';

export async function fetchCharacters(page = 1, name = '') {
    try {
        const params = new URLSearchParams();
        if (page) params.append('page', String(page));
        if (name) params.append('name', name);
        const url = `${API_URL}/character?${params.toString()}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        // returns { info, results }
        return data;
    } catch (err) {
        console.error('Error fetching characters:', err);
        throw err;
    }
}

export async function fetchCharacterById(id) {
    try {
        const res = await fetch(`${API_URL}/character/${id}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.error('Error fetching character by id:', err);
        throw err;
    }
}