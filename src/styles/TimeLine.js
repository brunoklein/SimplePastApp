import { StyleSheet } from 'react-native';
import * as Colors from './Colors';

const style = StyleSheet.create({

    container: {
        height: 5,
        width: 200,
        marginTop: 15,
        marginBottom: 15,
        borderRadius: 50,
        backgroundColor: Colors.BACKGROUND_COLOR,
    },

    body: {
        alignSelf: 'center',
        height: '100%',
        backgroundColor: Colors.EASY_COLOR,
        borderRadius: 50,
    },

});

export { style };