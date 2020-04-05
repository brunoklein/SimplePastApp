import { StyleSheet } from 'react-native';
import * as Colors from './Colors';

const style = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },

    textReportView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    textReport: {
        color: Colors.MEDIUM_COLOR,
        fontWeight: 'bold',
        fontSize: 26,
        marginBottom: 20,
    },

    imageView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        height: 55,
        width: 55,
        tintColor: Colors.EASY_COLOR,
    },

    textBottomView: {
        flex: 1,
        justifyContent: 'flex-end',
    },

    textBottom: {
        color: Colors.EASY_COLOR,
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 15,
    },

});

export { style };