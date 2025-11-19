import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, ScrollView, ImageBackground } from 'react-native';
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
        <ImageBackground source={require('../asset/Rick&Morty - background2.jpg')} style={styles.backgroundImage}>
            <ScrollView contentContainerStyle={{ padding: 16 }}>
                <Image source={{ uri: character.image }} style={styles.detailImage} />

                <View style={styles.detailCard}>
                    <Text style={[styles.detailName, { color: '#e6f7ef', marginTop: 56 }]}>{character.name}</Text>

                    <View style={styles.detailRow}>
                        <Text style={[styles.detailLabel, { color: '#9aa4b2' }]}>Status:</Text>
                        <Text style={[styles.detailValue, { color: '#e6f7ef' }]}>{character.status}</Text>
                    </View>

                    <View style={styles.detailRow}>
                        <Text style={[styles.detailLabel, { color: '#9aa4b2' }]}>Espécie:</Text>
                        <Text style={[styles.detailValue, { color: '#e6f7ef' }]}>{character.species}</Text>
                    </View>

                    <View style={styles.detailRow}>
                        <Text style={[styles.detailLabel, { color: '#9aa4b2' }]}>Gênero:</Text>
                        <Text style={[styles.detailValue, { color: '#e6f7ef' }]}>{character.gender}</Text>
                    </View>

                    <View style={styles.detailRow}>
                        <Text style={[styles.detailLabel, { color: '#9aa4b2' }]}>Origem:</Text>
                        <Text style={[styles.detailValue, { color: '#e6f7ef' }]}>{character.origin?.name}</Text>
                    </View>

                    <View style={styles.detailRow}>
                        <Text style={[styles.detailLabel, { color: '#9aa4b2' }]}>Local atual:</Text>
                        <Text style={[styles.detailValue, { color: '#e6f7ef' }]}>{character.location?.name}</Text>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

export default CharacterDetailScreen;
