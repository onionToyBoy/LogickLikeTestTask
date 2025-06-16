import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/colors';

export const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 22,
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  closeBtn: {
    position: 'absolute',
    right: 22,
  },
  text: {
    color: COLORS.INCBLOT,
    fontSize: 18,
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  topicItemContainer: {
    width: 336,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: COLORS.PAPER_ELEPHANT,
    paddingVertical: 9,
    paddingHorizontal: 20,
    marginBottom: 6,
    justifyContent: 'center',
  },
  selectedItemContainer: {
    borderColor: COLORS.VERDIGRIS_COLOURED,
    backgroundColor: COLORS.VERDIGRIS_COLOURED,
  },
  selectedItemText: {
    color: COLORS.WHITE,
  },
});
