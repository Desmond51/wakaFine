import {View, Text, Image, ScrollView, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import {Button, ButtonType, OTPInput} from '../../components';
import styles from './verification.styles';

type Props = {
  navigation: any;
};

const Verification: React.FC<Props> = ({navigation}) => {
  const [value, setValue] = useState('');
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
      <Text style={styles.title}>Verification</Text>
      <Image
        source={require('../../assets/otp.png')}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />
      <View style={styles.bottomContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.description}>
            Enter the verification code we just sent this Number *******22
          </Text>
          <View style={styles.or}>
            <OTPInput value={value} setValue={setValue} cellCount={6} />
            <Text style={styles.flexView}>Haven’t received a code yet! Resend</Text>
          </View>
            <View style={styles.bottomContainer}>
              <Button
                btnText="Verify"
                btnType={ButtonType.PRIMARY}
                onPress={() => navigation.navigate('Main')}
              />
            </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Verification;
