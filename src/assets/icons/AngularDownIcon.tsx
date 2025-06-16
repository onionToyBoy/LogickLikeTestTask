import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { TIconProps } from './types';
import { View } from 'react-native';
import { COLORS } from '../colors';

export const AngularDownIcon = (props: TIconProps) => {
  const { color = COLORS.WHITE, style = {}, ...restProps } = props;

  return (
    <View style={style}>
      <Svg
        width="18"
        height="18"
        fill="none"
        viewBox="0 0 18 18"
        {...restProps}
      >
        <Circle cx="9" cy="9" r="9" fill="#000" fillOpacity="0.2" />
        <Path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5.539 7.615 9 11.077l3.462-3.462"
        />
      </Svg>
    </View>
  );
};
