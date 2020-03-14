import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        paddingTop: '5%'
    },
    viewText: {
        flex: 3,
        justifyContent: 'center',
    },
    verb: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 38,
    },
    textInput: {
        flex: 1,
        textAlign: 'center',
    },
    coins: {
        color: 'gold',
        fontWeight: 'bold',
        fontSize: 24,
    },
    coinsText: {
        color: 'gold',
        fontSize: 18,
    }
});

export { style }