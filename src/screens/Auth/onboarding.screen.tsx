import {View, Text} from 'react-native';
import React from 'react';
import {Button, ButtonType} from '../../components';

type Props = {
  navigation: any;
};

const Onboarding: React.FC<Props> = ({navigation}) => {
  return (
    <View>
      <Text>Onboarding</Text>
      <Button
        btnText={'Next'}
        btnType={ButtonType.PRIMARY}
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
};

export default Onboarding;
