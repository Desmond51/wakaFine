import {StyleSheet} from 'react-native';
import theme from '../utils/theme';

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 60,
    // borderRadius: 15,
    // lineHeight: 38,
    fontSize: 40,
    // borderWidth: 2,
    borderBottomWidth: 2,
    borderColor: theme.PRIMARY,
    color: theme.PRIMARY,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});

export default styles;
