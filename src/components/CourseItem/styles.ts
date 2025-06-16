import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/colors';

const ITEM_SIZE = 210;

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: ITEM_SIZE,
  },
  imageContainer: {
    paddingVertical: 9,
    width: ITEM_SIZE,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  image: {
    width: 144,
    height: 144,
  },
  textContainer: {
    backgroundColor: COLORS.WHITE,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    width: ITEM_SIZE,
    paddingVertical: 12,
    zIndex: 2,
  },
  text: {
    fontSize: 14,
    color: COLORS.THE_FANG,
  },
  shadow: {
    width: ITEM_SIZE,
    height: 200,
    backgroundColor: COLORS.GLITTER,
    position: 'absolute',
    top: 12,
    borderRadius: 24,
    zIndex: 0,
  },
});
