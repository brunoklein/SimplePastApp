import { StyleSheet } from 'react-native';
import * as Colors from './colors';

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: Colors.BACKGROUND_COLOR,

    },

    header: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 26,

    },

    iconRestartView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    coinsView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textInputView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    shareView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },

    iconRestartImage: {
        height: 32,
        width: 32,
        tintColor: Colors.EASY_COLOR,

    },

    coins: {
        color: 'gold',
        fontWeight: 'bold',
        fontSize: 24,
        color: Colors.EASY_COLOR,
    },

    coinsText: {
        color: 'gold',
        fontSize: 18,
        color: Colors.EASY_COLOR,

    },

    verbView: {
        flex: 3,
        justifyContent: 'center',
    },

    verb: {
        color: Colors.MEDIUM_COLOR,
        fontWeight: 'bold',
        fontSize: 38,
    },

    textInput: {
        flex: 1,
        textAlign: 'center',
        color: Colors.EASY_COLOR,
    },

});

export { style };