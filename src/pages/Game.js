import React, { useState } from 'react';
import { View } from 'react-native';
import { GameHeader, GameMain, GameReport } from '../components';
import { GameStyle as style } from '../styles';
import { Verb, Constants } from '../utils';

const Game = (props) => {

    const [userInput, setUserInput] = useState('');
    const [currentVerb, setCurrentVerb] = useState('');
    const [coins, setCoins] = useState(Constants.DEFAULT_COINS);
    const [coinsText, setCoinsText] = useState('coins');
    const [rate, setRate] = useState(Constants.DEFAULT_RATE);
    const [playing, setPlaying] = useState(false);
    const [textReport, setTextReport] = useState(Constants.TEXT_PLAY);
    const [reportImage, setReportImage] = useState(Constants.ICON_PLAY_SRC);
    const [timeRemaining, setTimeRemaining] = useState(Constants.BASE_TIME_MS);
    const [timer, setTimer] = useState(null);

    getVerb = () => {
        let min = rate;
        let max = min + 3;
        if (max > Verb.length) {
            max = Verb.length;
            setCoinsText(coinsText + '*');
            setRate(Constants.DEFAULT_RATE);
        }
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        return Verb[random];
    }

    levelUp = () => {
        setTimeRemaining(Constants.BASE_TIME_MS);
        setUserInput('');
        setCoins(coins + 3);
        setRate(rate + 4);
        setCurrentVerb(getVerb());
        console.warn(timeRemaining);
    }

    verifyInput = (userInput) => {
        if (playing && userInput.toLowerCase() == currentVerb.pastTenseForm) {
            levelUp();
        }
    };

    restartGame = () => {
        setTimeRemaining(Constants.BASE_TIME_MS)
            // nao aceita .then :(
            .then(
                () => setRate(Constants.DEFAULT_RATE)
            ).then(
                () => {
                    clearTimeout(timer);
                    setUserInput('');
                    setCoins(Constants.DEFAULT_COINS);
                    setCoinsText('coins');
                    setCurrentVerb(getVerb());
                    setPlaying(true);
                }
            ).then(startTimer);
    }

    startTimer = () => {
        setTimeout(() => {
            if (timeRemaining <= 0) {
                gameOver();
            } else {
                setTimeRemaining(timeRemaining - 1000);
                startTimer();
            }
        }, 1000);
    }

    gameOver = () => {
        setPlaying(false);
        clearTimeout(timer);
        setTextReport(`${currentVerb.baseForm} = ${currentVerb.pastTenseForm}`);
        setReportImage(Constants.ICON_RESTART_SRC);
    }

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
                onChangeText={userInput => {
                    setUserInput(userInput)
                    verifyInput(userInput)
                }}
                timeRemaining={timeRemaining}
                totalTime={Constants.BASE_TIME_MS}
            />
        </View>
    );
}

export default Game;