import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 30,
        alignContent: 'flex-start',
        marginLeft: 10,
        color: '#4B0082',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
    },
    cards: {
        flexDirection: 'row', 
        alignContent: "center",
        marginTop: 10,
        borderWidth: 2,
        borderColor: '#4B0082',
        width: '98%',
        height: 120,
        backgroundColor: 'white',
        borderRadius: 5,
        alignSelf: 'center',
        overflow: 'hidden',
    },
    cardIcons: {
        height: 120,
        width: 100,
    },
});
