import {View, Text, Image, useWindowDimensions, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Button, ButtonType, IconName, Input, InputType} from '../../components';
import styles from './login.styles';
import {
  SocialButton,
  SocialButtonType,
} from '../../components/button.component';

type Props = {
  navigation: any;
};

const Login: React.FC<Props> = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
      <Image
        source={require('../../assets/login.png')}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />

      <View style={styles.bottomContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Login</Text>
          <Input
            leftIcon={IconName.PHONE}
            placeholder="Phone Number"
            inputType={InputType.NUMERIC}
            onChange={setPhoneNumber}
          />
          <View style={styles.buttonContainer}>
            <Button
              btnText="Continue"
              onPress={() => navigation.navigate('Main')}
            />
            <Text style={styles.or}>OR</Text>
            <SocialButton
              type={SocialButtonType.GOOGLE}
              btnText={'Login with Google'}
              onPress={() => {}}
            />
          </View>
          <View style={styles.flexView}>
            <Text style={styles.description}>New to Waka Fine? </Text>
            <Button
              btnText="Register"
              btnType={ButtonType.TEXT}
              onPress={() => navigation.navigate('Signup')}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Login;
