import {StyleSheet} from 'react-native';
import {colors} from '../../constants/theme/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#071015',
    height: '100%',
  },
  text: {
    color: colors.text,
  },
  btn: {
    color: colors.text,
  },
  imgContainer: {},
  img: {
    height: 400,
    width: '100%',
    objectFit: 'contain',
  },
});
