import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    // justifyContent: 'center',
  },
  logoContainer: {
    flex: 0.1,
    backgroundColor: theme.GRAY,
  },
  logo: {
    width: '50%',
    resizeMode: 'contain',
  },
  main: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  question: {
    color: 'white',
    fontSize: 36,
  },
  searchContainer: {
    flex: 0,
    width: '80%',
    alignContent: 'center',
    alignSelf: 'center',
    margin: 10,
    alignItems: 'center',
  },
  textInput: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default styles;
