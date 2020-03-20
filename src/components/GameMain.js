import React from 'react';
import { TextInput, Text, View } from 'react-native';
import { Game as style, Colors } from '../styles';
import { Constants } from '../utils';

const GameMain = ({ verb, userInput, onChangeText }) => {
    return (
        <View style={style.main}>
            <View style={style.verbView}>
                <Text style={style.verb}>
                    {verb}
                </Text>
            </View>

            <View style={style.textInputView}>
                <TextInput
                    style={style.textInput}
                    placeholderTextColor={Colors.EASY_COLOR}
                    maxLength={Constants.INPUT_MAX_LENGTH}
                    placeholder={'type the past simple here'}
                    onChangeText={onChangeText}
                    value={userInput}
                />
            </View>
        </View>

    )
}

export default GameMain;