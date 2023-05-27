import {StyleSheet} from 'react-native';
import theme from '../utils/theme';

const styles = StyleSheet.create({
  focusedTab: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 18,
  },
  tab: {
    backgroundColor: theme.GRAY,
    padding: 15,
    borderRadius: 18,
  },
});

export default styles;
