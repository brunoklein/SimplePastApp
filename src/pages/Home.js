import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
  return <View>
    <Text>Home example</Text>
    <TouchableOpacity onPress={() => {
      navigation.navigate('Game');
    }}>
      <Text>Start game</Text>
    </TouchableOpacity>
  </View>;
}

export default Home;
