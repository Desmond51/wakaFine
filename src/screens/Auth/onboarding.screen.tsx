import {View, FlatList, Animated} from 'react-native';
import React, {useRef, useState} from 'react';
import {onboardingData} from '../../utils/constants';
import OnboardingItem from '../../components/onboardingItem.component';
import styles from './onboarding.styles';
import Paginator from '../../components/paginator.component';

type Props = {
  navigation: any;
};

const Onboarding: React.FC<Props> = ({navigation}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  return (
    <View style={styles.container}>
      <View style={styles.flatListContainer}>
        <FlatList
          data={onboardingData}
          renderItem={({item}) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          ref={slidesRef}
        />
        {/* <Button
        btnText={'Next'}
        btnType={ButtonType.PRIMARY}
        onPress={() => navigation.navigate('Signup')}
      /> */}
      </View>
      <Paginator items={onboardingData} scrollX={scrollX} />
    </View>
  );
};

export default Onboarding;
