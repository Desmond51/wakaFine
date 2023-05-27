import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Button, ButtonType, IconName, Input} from '../../components';

type Props = {
  navigation: any;
};

const Login: React.FC<Props> = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <View>
      <Text>Login</Text>
      <Text>{phoneNumber}</Text>
      <Input
        placeholder="Phone number"
        rightIcon={IconName.PHONE}
        onChange={setPhoneNumber}
      />
      <Button
        btnText={'Next'}
        btnType={ButtonType.PRIMARY}
        onPress={() => navigation.navigate('Verification')}
      />
    </View>
  );
};

export default Login;
