import React from 'react';
import { Text, View, Image } from 'react-native';
import { Game as style } from '../styles';
import { Constants } from '../utils';

const GameHeader = ({ coins, coinsText, fnRestart }) => {
    return (

        <View style={style.header}>
            <View style={style.iconRestartView} onTouchEnd={fnRestart}>
                <Image source={Constants.ICON_RESTART_SRC} style={style.iconRestartImage}></Image>
            </View>
            <View style={style.coinsView}>
                <Text style={style.coins}>{coins}</Text>
                <Text style={style.coinsText}>{coinsText}</Text>
            </View>
            <View style={style.shareView}></View>
        </View>

    )
}

export default GameHeader;