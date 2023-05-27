import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '75%',
    paddingLeft: 32,
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
    textAlign: 'center',
    fontSize: 36,
    paddingTop: 20,
  },
  description: {
    fontWeight: '400',
    color: theme.PRIMARY,
    textAlign: 'left',
    fontSize: 20,
    paddingTop: 20,
  },
  buttonContainer: {
    width: '60%',
    alignSelf: 'center',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  or: {
    textAlign: 'center',
    color: theme.PRIMARY,
    fontSize: 18,
  },
  flexView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default styles;
