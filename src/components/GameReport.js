import React from 'react';
import { View, Text, Image } from 'react-native';
import { GameReport as style } from '../styles';
import { Constants } from '../utils';

const GameReport = ({ isVisible, textReport, onClickImage, sourceImage, onClickTranslate }) => {
    if (!isVisible) return null;

    return (
        <View style={style.container}>

            <View style={style.reportView}>
                <View style={style.itensReportView}>

                    {onClickTranslate ?
                        <View style={style.imageView} onTouchEnd={onClickTranslate}>
                            <Text style={style.textTranslate}>Translate</Text>
                        </View>
                        : null
                    }

                    {textReport ?
                        <Text style={style.textReport}>{` ${textReport} `}</Text>
                        : null
                    }

                    <View style={style.imageView} onTouchEnd={onClickImage}>
                        <Image source={sourceImage || Constants.ICON_PLAY_SRC} style={style.image}></Image>
                    </View>
                </View>
            </View>
            <View style={style.bottomView}>
                <Text style={style.textBottom}>{` ${Constants.TEXT_APP_NAME} ${Constants.APP_VERSION} `}</Text>
            </View>

        </View >
    )
}

export default GameReport;