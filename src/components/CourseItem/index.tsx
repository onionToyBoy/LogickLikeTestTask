import { StyleSheet, View } from 'react-native';
import { styles } from './styles';
import { ICourseItemProps } from './types';
import { UIText } from '../UIText';
import TurboImage from 'react-native-turbo-image';

export const CourseItem = (props: ICourseItemProps) => {
  const { name, image, bgColor } = props?.item;

  return (
    <View style={styles.container}>
      <View
        style={StyleSheet.flatten([
          styles.imageContainer,
          bgColor ? { backgroundColor: bgColor } : {},
        ])}
      >
        <TurboImage source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <UIText style={styles.text}>{name}</UIText>
      </View>
      <View style={styles.shadow} />
    </View>
  );
};
