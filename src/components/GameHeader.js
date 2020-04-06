import React from 'react';
import { Text, View, Image } from 'react-native';
import { GameHeader as style } from '../styles';
import { Constants } from '../utils';

const GameHeader = ({ coins, coinsText, fnRestart, fnShare, hideRestart, hideShare }) => {
    return (

        <View style={style.header}>

            <View style={style.restartView} onTouchEnd={fnRestart}>
                {!hideRestart ?
                    <Image source={Constants.ICON_RESTART_SRC} style={style.restartImage}></Image>
                    : null
                }
            </View>
            <View style={style.coinsView}>
                <Text style={style.coins}>{coins}</Text>
                <Text style={style.coinsText}>{coinsText}</Text>
            </View>
            {!hideShare ?
                <View style={style.shareView} onTouchEnd={fnShare}></View>
                : null
            }
        </View>

    )
}

export default GameHeader;