import {View, useWindowDimensions, Animated} from 'react-native';
import React from 'react';
import styles from './paginator.styles';
import theme from '../utils/theme';

type Props = {
  items: {image: any; title: string; description: string; id: string}[];
  scrollX: any;
  currentIndex: number;
};

const Paginator: React.FC<Props> = ({items, scrollX, currentIndex}) => {
  const {width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      {items?.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[
              styles.dot,
              {width: dotWidth},
              currentIndex === i && {backgroundColor: theme.PRIMARY},
            ]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

export default Paginator;
