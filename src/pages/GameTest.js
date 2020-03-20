import React, { Component } from 'react';
import { View, Text } from 'react-native';

let text = ' They will ignore you, until they CAN\'T ';
export default class GameTest extends Component {
    render() {
        return (
            <View>
                <Text style={{ color: 'black' }}>{text}</Text>
            </View>
        );
    }
}
