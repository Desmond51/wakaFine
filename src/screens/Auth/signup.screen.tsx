import {View, Text} from 'react-native';
import React from 'react';
import {Button, ButtonType} from '../../components';

type Props = {
  navigation: any;
};

const SignUp: React.FC<Props> = ({navigation}) => {
  return (
    <View>
      <Text>SignUp</Text>
      <Button
        btnText={'Next'}
        btnType={ButtonType.PRIMARY}
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default SignUp;
