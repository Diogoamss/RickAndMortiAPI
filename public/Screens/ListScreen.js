import React, { useEffect, useRef, useState } from 'react';
import { View, FlatList, ActivityIndicator, Text, TextInput, ImageBackground } from 'react-native';
import { styles } from '../Styles/Styles.js';
import CharacterList from '../Components/CharacterList.js';
import { fetchCharacters } from '../api/rickAndMorty';

const ListScreen = ({ navigation }) => {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [nextPage, setNextPage] = useState(true);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState('');
    const debounceRef = useRef(null);

    const load = async (p = 1, q = '', append = false) => {
        try {
            if (p === 1 && !append) {
                setLoading(true);
            }
            if (append) setLoadingMore(true);

            const data = await fetchCharacters(p, q);

            const results = data.results || [];
            if (append) {
                setCharacters((cur) => [...cur, ...results]);
            } else {
                setCharacters(results);
            }

            // info.next indicates if there is a next page
            setNextPage(Boolean(data.info && data.info.next));
            setPage(p);
            setError(null);
        } catch (err) {
            // API returns 404 when search yields no results
            const msg = err.message || String(err);
            if (msg.includes('404')) {
                if (append) {
                    // nothing to append
                    setNextPage(false);
                } else {
                    setCharacters([]);
                    setNextPage(false);
                }
                setError(null);
            } else {
                setError(msg);
            }
        } finally {
            setLoading(false);
            setLoadingMore(false);
            setRefreshing(false);
        }
    };

    useEffect(() => {
        load(1, query, false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // handle search with debounce
    useEffect(() => {
        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => {
            load(1, query, false);
        }, 450);
        return () => clearTimeout(debounceRef.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    const handleEndReached = () => {
        if (!nextPage || loadingMore || loading) return;
        const next = page + 1;
        load(next, query, true);
    };

    const handleRefresh = () => {
        setRefreshing(true);
        load(1, query, false);
    };

    if (loading && !refreshing) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#00b894" />
            </View>
        );
    }

    return (
        <ImageBackground source={require('../asset/Rick&Morty-backgorund.jpg')} style={styles.backgroundImage}>
            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.35)', padding: 8 }}>
                <TextInput
                    placeholder="Buscar personagem..."
                    value={query}
                    onChangeText={setQuery}
                    style={styles.searchInput}
                    autoCapitalize="none"
                    clearButtonMode="while-editing"
                    placeholderTextColor="#bcd7cd"
                />

                {error ? (
                    <View style={styles.errorContainer}>
                        <Text style={{ color: '#fff' }}>Error: {error}</Text>
                    </View>
                ) : (
                    <FlatList
                        data={characters}
                        renderItem={({ item }) => (
                            <CharacterList
                                character={item}
                                onPress={() => navigation.navigate('CharacterDetail', { id: item.id })}
                            />
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        onEndReached={handleEndReached}
                        onEndReachedThreshold={0.5}
                        ListFooterComponent={loadingMore ? <ActivityIndicator size="small" color="#00b894" /> : null}
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                    />
                )}
            </View>
        </ImageBackground>
    );
};

export default ListScreen;




