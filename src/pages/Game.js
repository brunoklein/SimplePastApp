import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { GameHeader, GameMain, GameReport } from '../components';
import { GameMain as style } from '../styles';
import { VerbsList, Constants } from '../utils';

const Game = () => {

    const [userInput, setUserInput] = useState(Constants.EMPTY_STRING);
    const [currentVerb, setCurrentVerb] = useState(Constants.EMPTY_STRING);
    const [coins, setCoins] = useState(Constants.DEFAULT_COINS);
    const [textReport, setTextReport] = useState(Constants.TEXT_PLAY);
    const [reportImage, setReportImage] = useState(Constants.ICON_PLAY_SRC);
    const [isPlaying, setIsPlaying] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(Constants.BASE_TIME_MS);
    const [rate, setRate] = useState(Constants.DEFAULT_RATE);

    useEffect(
        () => { verifyUserInput(userInput) }
        , [userInput]
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

    verifyUserInput = (input) => {
        if (isPlaying && input.toLowerCase() == currentVerb.pastTenseForm) {
            levelUp();
        }
    };

    restartGame = () => {
        setUserInput(Constants.EMPTY_STRING);
        setTimeRemaining(Constants.BASE_TIME_MS);
        setRate(Constants.DEFAULT_RATE);
        setCoins(Constants.DEFAULT_COINS);
        setCurrentVerb(getVerb());
        setIsPlaying(true);
    };

    levelUp = () => {
        setTimeRemaining(Constants.BASE_TIME_MS);
        setCoins(coins + 3);
        setRate(rate + 4);
        setUserInput(Constants.EMPTY_STRING);
    };

    gameOver = () => {
        setIsPlaying(false);
        setTextReport(`${currentVerb.baseForm} = ${currentVerb.pastTenseForm}`);
        setReportImage(Constants.ICON_RESTART_SRC);
    };

    getVerb = () => {
        let maxRandom = VerbsList.length - 1;
        let min = rate;
        let max = min + 3;
        let random = 0;

        if (min >= maxRandom) {
            setRate(Constants.DEFAULT_RATE);
            return VerbsList[maxRandom]
        }
        
        if (max >= maxRandom) {
            setRate(Constants.DEFAULT_RATE);
            max = maxRandom;
        }

        random = Math.floor(Math.random() * (max - min + 1)) + min;
        return VerbsList[random];
    };

    return (
        <View style={style.container}>
            <GameHeader
                coins={coins}
                fnRestart={restartGame}
                coinsText={Constants.TEXT_COINS}
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
                onChangeText={input => setUserInput(input) }
                timeRemaining={timeRemaining}
                totalTime={Constants.BASE_TIME_MS}
            />
        </View>
    );
}

export default Game;
