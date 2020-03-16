import React from 'react';
import { TextInput, Text, View, Image } from 'react-native';
import { HomeStyle as style, Colors } from '../styles';

const ICON_RESTART_SRC = require('../assets/images/restart.png');
const INPUT_MAX_LENGTH = 26;

const Home = ({ userInput, coins, verb, onChangeText }) => {
    return (
        <View style={style.container}>

            <View style={style.header}>
                <View style={style.iconRestartView}>
                    <Image source={ICON_RESTART_SRC} style={style.iconRestartImage}></Image>
                </View>
                <View style={style.coinsView}>
                    <Text style={style.coins}>{coins}</Text>
                    <Text style={style.coinsText}>coins</Text>
                </View>
                <View style={style.shareView}></View>
            </View>

            <View style={style.verbView}>
                <Text style={style.verb}>
                    {verb}
                </Text>
            </View>

            <View style={style.textInputView}>
                <TextInput
                    style={style.textInput}
                    placeholderTextColor={Colors.EASY_COLOR}
                    maxLength={INPUT_MAX_LENGTH}
                    placeholder="Type here!"
                    onChangeText={onChangeText}
                    value={userInput}
                />
            </View>
        </View>

    )
}

export default Home;
