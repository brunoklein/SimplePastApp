import React, { Component } from 'react';
import { Home } from './components';
import { Verb } from './utils';

export default class SimplePastApp extends Component {

    state = {
        userInput: '',
        verb: '',
        coins: 0,
        rate: 0
    }

    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            verb: this.getVerb(),
            coins: 0,
            rate: 4
        }
    }

    getVerb = () => {
        let min = this.state.rate;
        let max = min + 3;
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        return Verb[random];
    }

    verifySimplePast = (userInput) => {
        this.getVerb();
        if (userInput == this.state.verb.pastTenseForm) {
            this.setState({
                verb: this.getVerb(),
                userInput: '',
                coins: this.state.coins + 3,
                rate: this.state.rate + 4
            });
        } else {
            this.setState({
                userInput: userInput,
            });
        }
    };

    nextVerb = () => {

    }

    restart = () => {
        this.setState({
            userInput: '',
            verb: this.getVerb(),
            coins: 0,
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
            />
        );
    }
}
