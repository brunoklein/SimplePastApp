import { StyleSheet } from 'react-native';
import * as Colors from './Colors';

const style = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    reportView: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',

    },

    itensReportView: { 
        alignItems: 'center',
    },

    textReport: {
        color: Colors.MEDIUM_COLOR,
        fontWeight: 'bold',
        fontSize: 26,
        marginTop: 15,
    },

    imageView: {
        marginTop: 50
    },

    image: {
        alignSelf: 'center',
        height: 46,
        width: 46,
        tintColor: Colors.EASY_COLOR,
    },

    bottomView: {
        flex: 1,
        justifyContent: 'flex-end',
    },

    textBottom: {
        color: Colors.EASY_COLOR,
        fontSize: 12,
        bottom: 15
    },

    textTranslate: {
        color: Colors.MEDIUM_COLOR,
        fontSize: 12,
        textAlign: 'center',     
    },

});

export { style };