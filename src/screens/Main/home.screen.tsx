import {View, Text} from 'react-native';
import React from 'react';
import {Button, ButtonType} from '../../components';

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
