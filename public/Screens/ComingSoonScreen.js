import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ComingSoonScreen = () => (
    <View style={styles.container}>
        <Text style={styles.text}>Em breve</Text>
    </View>
);

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { fontSize: 24, fontWeight: '600' },
});

export default ComingSoonScreen;