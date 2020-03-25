import React from 'react';
import { View } from 'react-native';
import { TimeLineStyle as style } from '../styles';

const TimeLine = ({ totalTime, timeRemaining }) => {
    let width = (timeRemaining * 100) / totalTime;
    return (

        <View style={style.container}>
            <View style={ [style.body, { width: `${width}%` }] }></View>
        </View>

    )
}

export default TimeLine;