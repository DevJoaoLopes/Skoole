import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    title: {
        alignSelf: 'center',
        fontSize: 20,
        color: '#FFFFFF',
        fontFamily: 'Roboto',
    },
    titleCard: {
        backgroundColor: '#4B0082',
    },
    questionTitle: {
        alignSelf: 'center',
        fontSize: 25,
        fontFamily: 'Roboto',
    },
    cardQuestionTitle: {
        alignItems: "center",
        marginLeft: 4,
        marginTop: 4,
        borderWidth: 2,
        borderColor: '#4B0082',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 5,
        overflow: 'hidden',
    },
    questionIcons: {
        width: '100%',
        height: 470,
    },
    answerCard: {
        flexDirection: 'row',
        alignContent: 'center',
        marginLeft: 4,
        marginTop: 4,
        backgroundColor: 'white',
        borderRadius: 5,
        height: 100,
    },
    answerButton: {
        marginLeft: 4,
        marginTop: 4,
        borderWidth: 2,
        borderColor: '#4B0082',
        backgroundColor: 'white',
        borderRadius: 5,
        height: 90,
        width: '18.7%'
    },
    answerText: {
        alignSelf: 'center',
        color: '#4B0082',
        fontSize: 50,
    },
    correctionCard: {

    },
});
