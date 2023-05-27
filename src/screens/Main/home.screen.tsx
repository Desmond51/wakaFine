import {View, Text, Image, useWindowDimensions, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './home.styles';


type Props = {
  navigation: any;
};

const Home: React.FC<Props> = ({navigation}) => {

  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
      <Text> REact</Text>
      <Image
        source={require('../../assets/home.png')}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />
    </View>
  );
};

export default Home;
