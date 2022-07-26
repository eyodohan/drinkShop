import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {FONTS, COLORS, SIZES} from '../constants';

function VerticalTextButton({containerStyle, label, selected, onPress}) {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        transform: [{rotate: '-90deg'}],
        ...containerStyle,
      }}
      onPress={onPress}>
      <Text
        style={{
          color: selected ? COLORS.white : COLORS.lightGreen,
          ...FONTS.body2,
          fontSize: 20,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export default VerticalTextButton;
