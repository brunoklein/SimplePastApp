import React, { Component } from 'react';
import { Home } from './components';
import { Verb } from './utils';

const DEFAULT_RATE = 0;
const DEFAULT_COINS = 0;

export default class SimplePastApp extends Component {

    state = {
        userInput: '',
        verb: '',
        coins: DEFAULT_COINS,
        coinsText: 'coins',
        rate: DEFAULT_RATE
    }

    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            verb: this.getVerb(),
            coins: DEFAULT_COINS,
            coinsText: 'coins',
            rate: DEFAULT_RATE
        }
    }

    getVerb = () => {
        let min = this.state.rate;
        let max = min + 3;

        if (max > Verb.length) {
            max = Verb.length;
            this.setState({
                coinsText: this.state.coinsText + '*',
                rate: DEFAULT_RATE
            });
        }

        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        return Verb[random];
    }

    verifySimplePast = (userInput) => {
        this.getVerb();
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
        this.setState({
            userInput: '',
            verb: this.getVerb(),
            coins: DEFAULT_COINS,
            coinsText: 'coins',
            rate: DEFAULT_RATE
        });
    }

    render() {
        return (
            <Home
                userInput={this.state.userInput}
                coins={this.state.coins}
                verb={this.state.verb.baseForm}
                onChangeText={userInput => { this.verifySimplePast(userInput) }}
                fnRestart={this.restart}
                coinsText={this.state.coinsText}
            />
        );
    }
}
