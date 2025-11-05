import React, { useEffect, useState } from 'react ';
import { FlatList, Text, Image, ActivityIndicator, TouchableOpacity, view } from 'react-native';
import { styles } from '../Styles/Styles.js';
import { ActivityIndicator } from 'react-native-web';

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
            <View style={styles.characterItem}>
                <Text style={styles.characterName}>{item.name}</Text>
                <image source={{url: item.image}} style={styles.characterImage} />
            </View>
        )}
        />
    );
};

export default CharacterList;

