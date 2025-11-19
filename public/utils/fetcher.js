import { fetchCharacters as apiFetchCharacters } from '../api/rickAndMorty.js';

// Thin wrapper kept for compatibility with existing imports.
export const fetchCharacters = async (page = 1, name = '') => {
    const data = await apiFetchCharacters(page, name);
    // return both info and results so callers can access pagination info
    return data;
};
