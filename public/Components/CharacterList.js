import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../Styles/Styles.js';

const CharacterList = ({ character, onPress }) => {
    if (!character) return null;

    return (
        <TouchableOpacity style={styles.characterCard} onPress={onPress}>
            <Image source={{ uri: character.image }} style={styles.characterThumb} />
            <View style={styles.characterInfo}>
                <Text style={styles.characterName}>{character.name}</Text>
                <Text style={styles.characterStatus}>{character.status} - {character.species}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default CharacterList;