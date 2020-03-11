import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';

export default class SimplePastApp extends Component {

    constructor(props) {
        super(props);
        this.state = { text: props.text };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewText}>
                    <Text style={styles.blueText}>
                        {this.state.text}
                    </Text>
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder="Type here!"
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />
            </View>
        );
    }
}

// styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    viewText: {
        flex: 3,
        justifyContent: 'center',
    },
    blueText: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 38,
    },
    textInput: {
        flex: 1,
        textAlign: 'center',
    }
});