import { StyleProp, ViewStyle } from 'react-native';
import { type SvgProps } from 'react-native-svg';

export type TIconProps = {
  style?: StyleProp<ViewStyle>;
  color?: string;
  size?: number;
} & SvgProps;
