import {View, Text} from 'react-native';
import React from 'react';
import {Button, ButtonType} from '../../components';

type Props = {
  navigation: any;
};

const Notifications: React.FC<Props> = ({navigation}) => {
  return (
    <View>
      <Text>Notifications</Text>
      <Button
        btnText={'Next'}
        btnType={ButtonType.PRIMARY}
        onPress={() => navigation.navigate('Onboarding')}
      />
    </View>
  );
};

export default Notifications;
