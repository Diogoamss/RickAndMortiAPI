import React, { useEffect, useState } from 'react';
import { FlatList, Text, Image, ActivityIndicator, TouchableOpacity, View } from 'react-native';
import { styles } from '../Styles/Styles.js';
import { fetchCharacters } from '../api/rickAndMorty.js';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadCharacters = async () => {
            try { 
                const data = await fetchCharacters();
                setCharacters(data.results);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadCharacters();
    }, []);

    if(loading) {
         return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if(error) {
        return <Text>Error: {error}</Text>;
    }

    return (
        <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
            <TouchableOpacity style={styles.characterItem}>
                <Image source={{ uri: item.image }} style={styles.characterImage} />
                <View style={styles.characterInfo}>
                    <Text style={styles.characterName}>{item.name}</Text>
                    <Text style={styles.characterStatus}>
                        {item.status} - {item.species}
                    </Text>
                </View>
            </TouchableOpacity>
        )}
        />
    );
};

export default CharacterList;

