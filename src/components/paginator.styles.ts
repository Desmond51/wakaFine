import {StyleSheet} from 'react-native';
import theme from '../utils/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    borderColor: theme.PRIMARY,
    borderWidth: 2,
    marginHorizontal: 10,
  },
});

export default styles;
