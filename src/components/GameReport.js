import React from 'react';
import { View, Text, Image } from 'react-native';
import { GameReport as style } from '../styles';
import { Constants } from '../utils';

const GameReport = ({ isVisible, textReport, onClick, sourceImage }) => {
    if (!isVisible) return null;

    sourceImage = sourceImage || Constants.ICON_PLAY_SRC;

    return (
        <View style={style.container}>
            {textReport ?
                <View style={style.textReportView}>
                    <Text style={style.textReport}>{` ${textReport} `}</Text>
                </View >
                : null
            }
            <View style={style.imageView} onTouchEnd={onClick}>
                <Image source={sourceImage} style={style.image}></Image>
            </View>
            <View style={style.textBottomView}>
                <Text style={style.textBottom}>{` ${Constants.TEXT_APP_NAME} ${Constants.APP_VERSION} `}</Text>
            </View >
        </View >
    )
}

export default GameReport;