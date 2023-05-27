import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Button, ButtonType} from '../../components';
import styles from './splash.styles';

type Props = {
  navigation: any;
};

const Splash: React.FC<Props> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Auth');
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo-white.png')} alt="logo" />
    </View>
  );
};

export default Splash;
