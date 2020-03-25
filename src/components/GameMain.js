import React from 'react';
import { TextInput, Text, View } from 'react-native';
import { GameStyle as style, Colors } from '../styles';
import { Constants } from '../utils';
import TimeLine from './TimeLine';

const GameMain = ({ isVisible, verb, userInput, onChangeText, totalTime, timeRemaining }) => {
    if (!isVisible) return null;
    
    return (
        <View style={style.main}>

            <View style={style.verbView}>
                <Text style={style.verb}>
                    {verb}
                </Text>
                <TimeLine totalTime={totalTime} timeRemaining={timeRemaining}></TimeLine>
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