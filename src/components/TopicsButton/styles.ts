import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLACK_20,
    flexDirection: 'row',
    borderRadius: 40,
    paddingVertical: 5,
    paddingRight: 5,
    paddingLeft: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: COLORS.WHITE,
    fontSize: 12,
    marginRight: 5,
  },
  iconContainer: {
    backgroundColor: COLORS.BLACK_20,
    borderRadius: 50,
    height: 18,
    width: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
