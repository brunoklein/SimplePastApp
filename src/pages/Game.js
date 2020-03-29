import React, { Component } from 'react';
import { View } from 'react-native';
import { GameHeader, GameMain, GameReport } from '../components';
import { GameStyle as style } from '../styles';
import { Verb, Constants } from '../utils';

export default class Game extends Component {

    state = {
        userInput: '',
        verb: '',
        coins: Constants.DEFAULT_COINS,
        coinsText: 'coins',
        rate: Constants.DEFAULT_RATE,
        playing: false,
        timeRemaining: Constants.BASE_TIME_MS,
        textReport: Constants.TEXT_PLAY,
        reportImage: Constants.ICON_PLAY_SRC,
        timer: null
    }

    constructor(props) {
        super(props);
    }

    getVerb = () => {
        let min = this.state.rate;
        let max = min + 3;
        if (max > Verb.length) {
            max = Verb.length;
            this.setState({
                coinsText: this.state.coinsText + '*',
                rate: Constants.DEFAULT_RATE
            });
        }
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        return Verb[random];
    }

    levelUp = () => {
        this.setState({
            userInput: '',
            coins: this.state.coins + 3,
            rate: this.state.rate + 4,
            timeRemaining: Constants.BASE_TIME_MS
        }, () => {
            this.setState({
                verb: this.getVerb(),
            });
        });
    }

    verifyInput = (userInput) => {
        if (this.state.playing && userInput.toLowerCase() == this.state.verb.pastTenseForm) {
            this.levelUp();
        } else {
            this.setState({
                userInput: userInput,
            });
        }
    };

    restartGame = () => {
        this.setState({
            rate: Constants.DEFAULT_RATE,
            timeRemaining: Constants.BASE_TIME_MS
        }, () => {
            clearTimeout(this.state.timer);
            this.setState({
                userInput: '',
                verb: this.getVerb(),
                coins: Constants.DEFAULT_COINS,
                coinsText: 'coins',
                playing: true,
            }, this.startTimer);
        });
    }

    startTimer = () => {
        this.setState({
            timer: setTimeout(() => {
                if (this.state.timeRemaining <= 0) {
                    this.gameOver();
                } else {
                    this.setState({
                        timeRemaining: this.state.timeRemaining - 300
                    }, this.startTimer);
                }
            }, 300)
        });
    }

    gameOver = () => {
        clearTimeout(this.state.timer);
        this.setState({
            playing: false,
            textReport: `${this.state.verb.baseForm} = ${this.state.verb.pastTenseForm}`,
            reportImage: Constants.ICON_RESTART_SRC,
        });
    }

    render() {
        return (
            <View style={style.container}>
                <GameHeader
                    coins={this.state.coins}
                    fnRestart={this.restartGame}
                    coinsText={this.state.coinsText}
                    hideRestart={!this.state.playing}
                />

                <GameReport
                    isVisible={!this.state.playing}
                    textReport={this.state.textReport}
                    onClick={this.restartGame}
                    sourceImage={this.state.reportImage}
                />

                <GameMain
                    isVisible={this.state.playing}
                    userInput={this.state.userInput}
                    verb={this.state.verb.baseForm}
                    onChangeText={userInput => { this.verifyInput(userInput) }}
                    timeRemaining={this.state.timeRemaining}
                    totalTime={Constants.BASE_TIME_MS}
                />
            </View>
        );
    }
}