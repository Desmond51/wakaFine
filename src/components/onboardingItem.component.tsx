import {View, Text, Image, useWindowDimensions} from 'react-native';
import React from 'react';
import styles from './onboardingItem.styles';

type Props = {
  item: {
    image: any;
    title: string;
    description: string;
    id: string;
  };
};

const OnboardingItem: React.FC<Props> = ({item}) => {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
      <Image
        source={item.image}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />

      <View style={styles.bottomContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnboardingItem;
