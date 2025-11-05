import { view, FlatList, ActivityIndicator, Text, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from '../Styles/Styles.js';
import CharacterList from '../Components/CharacterList.js';
import { fetchCharacters } from '../api/rickAndMorty';


const ListScreen = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        const LoadCharacters = async () => {
            try{ 
                const data = await fetchCharacters();
                setCharacters(data.results);
            } catch (err) {
                setError(err.message);
            } finally{
                setLoading(false);
            }
        };
        LoadCharacters();
    }, []);

    if (Loading){
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="Large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text>Error: {error}</Text>
            </View>
        );
    }

    return (
        <FlatList
        data={characters}
        renderItem={({item}) => <CharacterList character={item} />}
        keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default ListScreen;




