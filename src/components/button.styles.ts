import {StyleSheet} from 'react-native';
import theme from '../utils/theme';

const styles = StyleSheet.create({
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: theme.PRIMARY,
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 25,
    borderRadius: 200,
  },
  disabled: {
    opacity: 0.5,
  },
  btnText: {
    color: 'white',
    // marginRight: 10,
    fontSize: 20,
    fontWeight: '500',
  },
  secondaryWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 25,
    borderRadius: 14,
  },
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 25,
  },
  spaceRight: {
    marginRight: 10,
  },
  secondaryText: {
    color: 'black',
    marginRight: 10,
    fontSize: 24,
    fontWeight: '500',
  },
  text: {
    color: theme.PRIMARY,
    marginRight: 10,
    fontSize: 20,
    fontWeight: '800',
  },
  facebookWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: theme.FACEBOOK + '30',
    paddingVertical: 5,
    paddingHorizontal: 25,
    borderRadius: 200,
  },
  facebookText: {
    color: theme.FACEBOOK,
    marginRight: 10,
    fontSize: 20,
    fontWeight: '500',
  },
  googleText: {
    color: theme.GOOGLE,
    marginRight: 10,
    fontSize: 20,
    fontWeight: '500',
  },
  googleWrapper: {
    backgroundColor: theme.GOOGLE + '30',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 5,
    paddingHorizontal: 25,
    borderRadius: 200,
  },
});

export default styles;
