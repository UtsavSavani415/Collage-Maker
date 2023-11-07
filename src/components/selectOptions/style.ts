import {StyleSheet} from 'react-native';
import {colors} from '../../constants/theme/theme';

export const styles = StyleSheet.create({
  container: {},
  box: {
    backgroundColor: colors.black,
    height: '65%',
    borderRadius: 16,
    justifyContent: 'space-around',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionBox: {
    // justifyContent: 'center',
  },
  optionIcon: {
    height: 70,
    width: 70,
    backgroundColor: colors.white,
    borderRadius: 50,
  },
  text: {
    paddingTop: 10,
    color: colors.text,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 15,
  },
  modal: {
    backgroundColor: 'rgba(20,30,50,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
    margin: 50,
    marginTop: 200,
    borderRadius: 30,
  },
  modalContainer: {},
  btnBox: {
    // borderWidth: 1,
    // borderColor: colors.text,
    borderRadius: 15,
    padding: 10,
    width: 100,
    justifyContent: 'center',
    margin: 10,
    bottom: 0,
    textAlign: 'center',
    backgroundColor: colors.black,
  },
});
