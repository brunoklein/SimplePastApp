import React from 'react';
import { TextInput, Text, View } from 'react-native';
import { HomeStyle as style} from '../styles';

const Home = ({userInput, coins, verb, onChangeText}) => {
    return (
        <View style={style.container}>
            <Text style={style.coins}>
                    {coins}
            </Text>
            <Text style={style.coinsText}>coins</Text>
            <View style={style.viewText}>
                <Text style={style.verb}>
                    {verb}
                </Text>
            </View>
            <TextInput
                style={style.textInput}
                placeholder="Type here!"
                onChangeText={onChangeText}
                value={userInput}
            />
        </View>
    )
}

export default Home;
