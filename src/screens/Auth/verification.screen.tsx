import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Button, ButtonType, OTPInput} from '../../components';

type Props = {
  navigation: any;
};

const Verification: React.FC<Props> = ({navigation}) => {
  const [value, setValue] = useState('');
  return (
    <View>
      <Text>Verification</Text>
      <OTPInput value={value} setValue={setValue} />
      <Button
        btnText={'Next'}
        btnType={ButtonType.PRIMARY}
        onPress={() => navigation.navigate('Main')}
      />
    </View>
  );
};

export default Verification;
