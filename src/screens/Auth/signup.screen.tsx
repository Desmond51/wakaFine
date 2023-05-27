import {View, Text, Image, useWindowDimensions, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Button, ButtonType, IconName, Input, InputType} from '../../components';
import styles from './signup.styles';
import {
  SocialButton,
  SocialButtonType,
} from '../../components/button.component';

type Props = {
  navigation: any;
};

const Login: React.FC<Props> = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
      <Image
        source={require('../../assets/signup.png')}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />

      <View style={styles.bottomContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Sign Up</Text>
          <Input
            leftIcon={IconName.USER}
            placeholder="Full name"
            inputType={InputType.TEXT}
            onChange={setFullName}
          />
          <View style={styles.spaceBottom} />
          <Input
            leftIcon={IconName.PHONE}
            placeholder="Phone number"
            inputType={InputType.NUMERIC}
            onChange={setPhoneNumber}
          />
          <Text style={styles.smallText}>
            By signing up, you agree to our Terms & Conditions and Privacy
            Policy
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              btnText="Continue"
              onPress={() => navigation.navigate('Login')}
            />
          </View>
          <View style={styles.flexView}>
            <Text style={styles.description}>Joined us before? </Text>
            <Button
              btnText="Login"
              btnType={ButtonType.TEXT}
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Login;
