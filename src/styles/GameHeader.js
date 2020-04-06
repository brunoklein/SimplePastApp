import { StyleSheet } from 'react-native';
import * as Colors from './Colors';

const style = StyleSheet.create({
    
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

});

export { style };