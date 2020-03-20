import { StyleSheet } from 'react-native';
import * as Colors from './Colors';

const style = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.BACKGROUND_COLOR,
    },

    header: {
        height: 90,
        justifyContent: 'center',
        flexDirection: 'row',
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

    main: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textInputView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    verbView: {
        flex: 4,
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