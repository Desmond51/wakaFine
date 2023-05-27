import {
  View,
  Text,
  Image,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Button, ButtonType, Icon, IconName, OTPInput} from '../../components';
import styles from './verification.styles';
import theme from '../../utils/theme';

type Props = {
  navigation: any;
};

const Verification: React.FC<Props> = ({navigation}) => {
  const [value, setValue] = useState('');
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            iconName={IconName.ARROW_LEFT}
            size={30}
            color={theme.PRIMARY}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Verification</Text>
      </View>
      <Image
        source={require('../../assets/otp.png')}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />
      <View style={styles.bottomContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.description}>
            Enter the verification code we just sent this Number *******22
          </Text>
          <OTPInput value={value} setValue={setValue} cellCount={6} />
          <View style={styles.flexView}>
            <Text style={styles.or}>Haven’t received a code yet!</Text>
            <Button
              btnText="Resend"
              btnType={ButtonType.TEXT}
              onPress={() => {}}
            />
          </View>
          <View style={styles.buttonContainer}>
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
