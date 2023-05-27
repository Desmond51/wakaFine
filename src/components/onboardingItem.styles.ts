import {StyleSheet} from 'react-native';
import theme from '../utils/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 0.3,
  },
  title: {
    fontWeight: '800',
    color: theme.PRIMARY,
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 28,
  },
  description: {
    fontWeight: '500',
    color: theme.PRIMARY,
    textAlign: 'center',
    paddingHorizontal: 64,
  },
});

export default styles;
