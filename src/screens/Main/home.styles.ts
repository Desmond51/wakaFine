import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';


const styles = StyleSheet.create({
  input: {
    color: theme.PRIMARY,
    borderBottomColor: theme.PRIMARY,
    fontSize: 24,
    borderBottomWidth: 2,
  },
  iconContainer: {
    position: 'absolute',
    marginVertical: 15,
    marginHorizontal: 5,
  },
  withIconLeft: {
    paddingLeft: 40,
  },
});

export default styles;