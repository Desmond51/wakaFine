import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  image: {
    flex: 0.4,
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 0.5,
    paddingHorizontal: 32,
    paddingVertical: 10,
  },
  title: {
    fontWeight: '800',
    color: theme.PRIMARY,
    marginBottom: 10,
    // textAlign: 'left',
    fontSize: 36,
    paddingLeft: 100,
    paddingTop: 20,
  },
  description: {
    fontWeight: '500',
    color: theme.PRIMARY,
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 20,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  or: {
    textAlign: 'center',
    color: theme.PRIMARY,
    paddingVertical: 20,
    fontSize: 24,
    fontWeight: '600',
  },
  flexView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
  },
});

export default styles;
