import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#0f1720',
        padding:10
    },
    characterCard: {
        backgroundColor: '#101826ff',
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
        fontWeight: 'bold',
        color: '#ffffff'
    },
    characterStatus: {
        color: '#9aa4b2',
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
    searchInput: {
        backgroundColor: '#0b2230',
        color: '#e6f7ef',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        marginBottom: 10,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        padding: 10,
    },
    detailCard: {
        backgroundColor: 'rgba(16,24,38,0.95)',
        borderRadius: 12,
        padding: 16,
        marginTop: -60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 6,
    },
    detailImage: {
        width: '100%',
        height: 320,
        borderRadius: 12,
        marginBottom: -60,
        alignSelf: 'center',
        zIndex: 2,
    },
})