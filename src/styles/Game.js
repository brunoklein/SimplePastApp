import { StyleSheet } from 'react-native';
import * as Colors from './Colors';

const style = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.BACKGROUND_COLOR,
    },

    main: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    header: {
        height: 100,
        alignItems: 'center',
        flexDirection: 'row',
    },

    restartView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    coinsView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    shareView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    restartImage: {
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

    textInputView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    verbView: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
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