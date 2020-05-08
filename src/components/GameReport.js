import React, { useState } from 'react';
import { View, TouchableOpacity, ActivityIndicator, Text, Image } from 'react-native';
import { GameReport as style } from '../styles';
import { Constants, Api, UserLocale } from '../utils';

function getTranslation(word) {
  const locale = UserLocale();
  return Api.post('/v1/translate', {
    term: `to ${word}`,
    target: locale,
  })
    .then(res => {
      console.info('userlocale', word, locale, res.data);
      return res.data;
    })
    .catch(() => { });
}

const GameReport = ({
  isVisible,
  verb,
  showTranslate,
  textReport,
  onClickImage,
  sourceImage,
  onClickTranslate,
}) => {
  const [translating, setTranslating] = useState(false);
  const [translation, setTranslation] = useState(null);

  if (!isVisible) return null;

  return (
    <View style={style.container}>

      <View style={style.reportView}>
        <View style={style.itensReportView}>

          {textReport ?
            <Text style={style.textReport}>{` ${textReport} `}</Text>
            : null
          }

          {translation && <View style={style.translationResultView}>
            {/* <Text style={style.translationResultTitle}>Tradução</Text> */}
            <Text style={style.translationResultText}>{translation.translation.translation}</Text>
          </View>}

          {showTranslate && !translation && <View style={style.imageView}>
            <TouchableOpacity
              onPress={() => {
                setTranslating(true);
                getTranslation(verb.baseForm)
                  .then((tr) => {
                    setTranslation(tr);
                    setTranslating(false);
                    onClickTranslate();
                  }).catch(() => {
                    setTranslating(false);
                  });
              }}
              style={style.translateButtonWrapper}>
              <Text style={style.textTranslate}>Translate</Text>
              {translating && <ActivityIndicator size='small' color='#ffffff' />}
            </TouchableOpacity>
          </View>}


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
