import {View, Text} from 'react-native';
import React from 'react';
import {Button, ButtonType} from '../../components';

type Props = {
  navigation: any;
};

const Bookings: React.FC<Props> = ({navigation}) => {
  return (
    <View>
      <Text>Bookings</Text>
      <Button
        btnText={'Next'}
        btnType={ButtonType.PRIMARY}
        onPress={() => navigation.navigate('Onboarding')}
      />
    </View>
  );
};

export default Bookings;
