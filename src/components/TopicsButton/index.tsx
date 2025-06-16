import { Pressable, View } from 'react-native';
import { styles } from './styles';
import { ITopicsButtonProps } from './types';
import { UIText } from '../UIText';
import { AngularDownIcon } from '../../assets/icons';

export const TopicsButton = (props: ITopicsButtonProps) => {
  const { onPress, selectedTopic } = props;

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <UIText style={styles.text}>{selectedTopic}</UIText>
      <View style={styles.iconContainer}>
        <AngularDownIcon />
      </View>
    </Pressable>
  );
};
