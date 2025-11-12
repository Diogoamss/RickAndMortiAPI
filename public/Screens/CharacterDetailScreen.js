import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, ScrollView } from 'react-native';
import { styles } from '../Styles/Styles.js';
import { fetchCharacterById } from '../api/rickAndMorty';

const CharacterDetailScreen = ({ route }) => {
    const { id } = route.params || {};
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) {
            setError('No id provided');
            setLoading(false);
            return;
        }

        const load = async () => {
            try {
                const data = await fetchCharacterById(id);
                setCharacter(data);
            } catch (err) {
                setError(err.message || String(err));
            } finally {
                setLoading(false);
            }
        };

        load();
    }, [id]);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
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

    if (!character) {
        return (
            <View style={styles.errorContainer}>
                <Text>Personagem não encontrado</Text>
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={{ padding: 16 }}>
            <Image source={{ uri: character.image }} style={styles.detailImage} />
            <Text style={styles.detailName}>{character.name}</Text>

            <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Status:</Text>
                <Text style={styles.detailValue}>{character.status}</Text>
            </View>

            <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Espécie:</Text>
                <Text style={styles.detailValue}>{character.species}</Text>
            </View>

            <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Gênero:</Text>
                <Text style={styles.detailValue}>{character.gender}</Text>
            </View>

            <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Origem:</Text>
                <Text style={styles.detailValue}>{character.origin?.name}</Text>
            </View>

            <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Local atual:</Text>
                <Text style={styles.detailValue}>{character.location?.name}</Text>
            </View>
        </ScrollView>
    );
};

export default CharacterDetailScreen;
