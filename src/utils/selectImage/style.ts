import {StyleSheet} from 'react-native';
import {colors} from '../../constants/theme/theme';

export const styles = StyleSheet.create({
  container: {
    // height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    height: '90%',
    width: '100%',
  },
  img: {
    height: 400,
    width: '100%',
  },
  btn: {
    bottom: 0,
    // borderWidth: 1,
    // borderColor: colors.text,
    backgroundColor: colors.primary,
    padding: 15,
    margin: 15,
    borderRadius: 15,
    width: 200,
    justifyContent: 'center',
    alignContent: 'center',
  },
  btntext: {
    justifyContent: 'center',
    alignContent: 'center',
    color: colors.text,
    textAlign: 'center',
  },
});
