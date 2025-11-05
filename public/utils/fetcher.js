import { API_URL } from '../api/rickAndMorty.js';

export const fetchCharacters = async () => {
    try {
        const response = await fetch(`${API_URL}/character`)
        if (!response.ok){
          throw new Error('Network response was not ok || A resposta da rede não foi adequada. ');
        }
        const data = await response.json();
        return data.results;
    } catch (error){
        console.error('Failed to fetch characters:', error);
        throw error;
    }
}
