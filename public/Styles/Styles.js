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
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.60,
        elevation: 4,
    },
    characterThumb: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 12,
    },
    characterInfo: {
        flex: 1,
    },
    characterName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    characterStatus: {
        color: '#666',
        marginTop: 4,
    },
    characterImage: {
        width: '100%',
        height: 300,
        borderRadius: 10,    
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    detailImage: {
        width: '100%',
        height: 350,
        borderRadius: 12,
        marginBottom: 16,
    },
    detailName: {
        fontSize: 26,
        fontWeight: '700',
        marginBottom: 12,
    },
    detailRow: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    detailLabel: {
        fontWeight: '600',
        width: 110,
    },
    detailValue: {
        flex: 1,
    },
})