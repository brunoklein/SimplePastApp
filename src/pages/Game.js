import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { GameHeader, GameMain, GameReport } from '../components';
import { GameStyle as style } from '../styles';
import { VerbsList, Constants } from '../utils';

const Game = () => {

    const [userInput, setUserInput] = useState('');
    const [currentVerb, setCurrentVerb] = useState('');
    const [coins, setCoins] = useState(Constants.DEFAULT_COINS);
    const [coinsText, setCoinsText] = useState('coins');
    const [textReport, setTextReport] = useState(Constants.TEXT_PLAY);
    const [reportImage, setReportImage] = useState(Constants.ICON_PLAY_SRC);
    const [isPlaying, setIsPlaying] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(Constants.BASE_TIME_MS);
    const [rate, setRate] = useState(Constants.DEFAULT_RATE);

    const startWithSpace = /^\s*/;

    useEffect(
        () => { verifyInput(userInput) },
        [userInput]
    );

    useEffect(
        () => {
            if (isPlaying && timeRemaining <= 0) {
                gameOver();
            }
        }, [timeRemaining]
    );

    useEffect(
        () => { setCurrentVerb(getVerb()) },
        [rate]
    );

    useEffect(() => {
        let interval = null;
        if (isPlaying && timeRemaining > 0) {
            interval = setInterval(() => {
                setTimeRemaining(timeRemaining => timeRemaining - 500);
            }, 500);
        } else if (!isPlaying) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isPlaying, timeRemaining]);

    verifyInput = (userInput) => {
        if (isPlaying && userInput.toLowerCase() == currentVerb.pastTenseForm) {
            levelUp();
        }
    };

    restartGame = () => {
        setUserInput(' ');
        setTimeRemaining(Constants.BASE_TIME_MS);
        setRate(Constants.DEFAULT_RATE);
        setCoins(Constants.DEFAULT_COINS);
        setCoinsText('coins');
        setCurrentVerb(getVerb());
        setIsPlaying(true);
    };

    levelUp = () => {
        setTimeRemaining(Constants.BASE_TIME_MS);
        setUserInput(' ');
        setCoins(coins + 3);
        setRate(rate + 4);
    };

    gameOver = () => {
        setIsPlaying(false);
        setTextReport(`${currentVerb.baseForm} = ${currentVerb.pastTenseForm}`);
        setReportImage(Constants.ICON_RESTART_SRC);
    };

    getVerb = () => {
        let min = rate;
        let max = min + 3;
        if (max > VerbsList.length) {
            max = VerbsList.length;
            setCoinsText(coinsText + '*');
            setRate(Constants.DEFAULT_RATE);
        }
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        return VerbsList[random];
    };

    return (
        <View style={style.container}>
            <GameHeader
                coins={coins}
                fnRestart={restartGame}
                coinsText={coinsText}
                hideRestart={!isPlaying}
            />

            <GameReport
                isVisible={!isPlaying}
                textReport={textReport}
                onClick={restartGame}
                sourceImage={reportImage}
            />

            <GameMain
                isVisible={isPlaying}
                userInput={userInput}
                verb={currentVerb.baseForm}
                onChangeText={userInput => setUserInput(userInput.replace(startWithSpace, ''))}
                timeRemaining={timeRemaining}
                totalTime={Constants.BASE_TIME_MS}
            />
        </View>
    );
}

export default Game;