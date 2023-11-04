import {StyleSheet} from 'react-native';
import {colors} from '../../constants/theme/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#071015',
    height: '100%',
  },
  optionContainer: {
    paddingTop: '50%',
    padding: 25,
  },
  containerTitle: {
    color: colors.text,
    paddingVertical: 20,
    fontSize: 16,
  },
  box: {
    backgroundColor: colors.black,
    height: '50%',
    borderRadius: 16,
    justifyContent: 'space-around',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionBox: {
    justifyContent: 'center',
  },
  optionIcon: {
    height: 70,
    width: 70,
    backgroundColor: colors.white,
    borderRadius: 50,
  },
  optionTitle: {
    paddingTop: 10,
    color: colors.textSecondory,
    justifyContent: 'center',
  },
});
