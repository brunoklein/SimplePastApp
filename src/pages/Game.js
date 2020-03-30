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
    const [playing, setPlaying] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(Constants.BASE_TIME_MS);
    const [rate, setRate] = useState(Constants.DEFAULT_RATE);
    const [restartTime, setRestartTime] = useState(null);
    // const [timer, setTimer] = useState(null);
    let timer = null;

    useEffect(
        () => { verifyInput(userInput) },
        [userInput]
    );

    useEffect(
        () => {
            console.log(`timeRemaining EFFECT ${timeRemaining}`);
            if (playing && timeRemaining <= 0) {
                gameOver();
            }
        }, [timeRemaining]
    );

    useEffect(
        () => { setCurrentVerb(getVerb()) },
        [rate]
    );

    useEffect(
        () => {
            console.log(`RESTART TIME EFFECT`);
            setUserInput('');
            setTimeRemaining(Constants.BASE_TIME_MS);
            setRate(Constants.DEFAULT_RATE);
            setCoins(Constants.DEFAULT_COINS);
            setCoinsText('coins');
            setCurrentVerb(getVerb())
        }, [restartTime]
    );

    startNewTimeout = () => {
        timer = setTimeout(() => {
            if (playing) {
                setTimeRemaining(timeRemaining - 1000);
            }
        }, 1000);
    }

    verifyInput = (userInput) => {
        if (playing && userInput.toLowerCase() == currentVerb.pastTenseForm) {
            levelUp();
        }
    };

    levelUp = () => {
        console.log('LEVEL UP');
        setTimeRemaining(Constants.BASE_TIME_MS);
        setUserInput('');
        setCoins(coins + 3);
        setRate(rate + 4);
    };

    restartGame = () => {
        console.log('RESTART');
        setRestartTime(new Date().getTime());
        setPlaying(true);
        clearTimeout(timer);
        startNewTimeout();
    };

    gameOver = () => {
        console.log('GAME OVER', timer);
        clearTimeout(timer);
        setPlaying(false);
        setTextReport(`${currentVerb.baseForm} = ${currentVerb.pastTenseForm}`);
        setReportImage(Constants.ICON_RESTART_SRC);
    };

    getVerb = () => {
        console.log('GET VERB');
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
                hideRestart={!playing}
            />

            <GameReport
                isVisible={!playing}
                textReport={textReport}
                onClick={restartGame}
                sourceImage={reportImage}
            />

            <GameMain
                isVisible={playing}
                userInput={userInput}
                verb={currentVerb.baseForm}
                onChangeText={userInput => setUserInput(userInput)}
                timeRemaining={timeRemaining}
                totalTime={Constants.BASE_TIME_MS}
            />
        </View>
    );
}

export default Game;