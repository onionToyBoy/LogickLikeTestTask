import { Text, StyleSheet, TextProps } from 'react-native';
import { styles } from './styles';

export const UIText = (props: TextProps) => {
  const { style, children, ...restProps } = props;

  return (
    <Text style={StyleSheet.flatten([styles.text, style ?? {}])} {...restProps}>
      {children}
    </Text>
  );
};
