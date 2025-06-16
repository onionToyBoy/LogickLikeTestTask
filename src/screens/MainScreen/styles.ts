import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BLUISH_PURPLE,
  },
  listContainer: {
    height: 212,
  },
  allTopicsBtn: {
    position: 'absolute',
    top: 12,
  },
  contentContainerStyle: {
    paddingHorizontal: 100,
  },
});
