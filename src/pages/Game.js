import React, { Component } from 'react';
import { View } from 'react-native';
import { GameHeader, GameMain } from '../components';
import { Game as style } from '../styles';
import { Verb, Constants } from '../utils';

export default class Game extends Component {

    state = {
        userInput: '',
        verb: '',
        coins: Constants.DEFAULT_COINS,
        coinsText: 'coins',
        rate: Constants.DEFAULT_RATE
    }

    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            verb: this.getVerb(),
            coins: Constants.DEFAULT_COINS,
            coinsText: 'coins',
            rate: 4
        }
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

    verifySimplePast = (userInput) => {
        if (userInput.toLowerCase() == this.state.verb.pastTenseForm) {
            this.levelUp();
        } else {
            this.setState({
                userInput: userInput,
            });
        }
    };

    levelUp = () => {
        this.setState({
            verb: this.getVerb(),
            userInput: '',
            coins: this.state.coins + 3,
            rate: this.state.rate + 4
        });
    }

    restart = () => {
        this.setState({ rate: Constants.DEFAULT_RATE }, () => {
            this.setState({
                userInput: '',
                verb: this.getVerb(),
                coins: Constants.DEFAULT_COINS,
                coinsText: 'coins'
            })
        });
    }

    render() {
        return (
            <View style={style.container}>
                <GameHeader
                    coins={this.state.coins}
                    fnRestart={this.restart}
                    coinsText={this.state.coinsText}
                />
                <GameMain
                    userInput={this.state.userInput}
                    verb={this.state.verb.baseForm}
                    onChangeText={userInput => { this.verifySimplePast(userInput) }}
                />
            </View>
        );
    }

}