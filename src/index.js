import React, { Component } from 'react';
import { Home } from './components';
import { Verb } from './utils';

export default class SimplePastApp extends Component {

    state = {
        userInput: '',
        verb: '',
        coins: 0,
        coinsText: 'coins',
        rate: 0
    }

    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            verb: this.getVerb(),
            coins: 0,
            coinsText: 'coins',
            rate: 95
        }
    }

    getVerb = () => {
        let min = this.state.rate;
        let max = min + 3;

        if (max > Verb.length) {
            max = Verb.length;

            this.setState({
                rate: 4,
                coinsText: this.state.coinsText + '*'
            });
        }

        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        return Verb[random];
    }

    verifySimplePast = (userInput) => {
        this.getVerb();
        if (userInput == this.state.verb.pastTenseForm) {
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
            coins: 0,
            coins: 'coins',
            rate: 0
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
