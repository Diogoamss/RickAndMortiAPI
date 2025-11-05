import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding:10
    },
    characterCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.60,
        elevation: 4,
    },
    characterName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    characterImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,    
    },
})