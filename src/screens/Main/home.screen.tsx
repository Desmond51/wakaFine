import {View, Text} from 'react-native';
import React from 'react';
import {Button, ButtonType} from '../../components';
import config from '../../../config';

type Props = {
  navigation: any;
};

const Home: React.FC<Props> = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        btnText={'Next'}
        btnType={ButtonType.PRIMARY}
        onPress={() => navigation.navigate('Onboarding')}
      />
    </View>
  );
};

export default Home;
