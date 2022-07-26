import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {COLORS} from '../constants';

function CustomButton({
  onPress,
  label,
  containerStyle,
  labelStyle,
  isPrimaryButton,
  isSecondaryButton,
}) {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: isPrimaryButton ? COLORS.primary : COLORS.transparent,
        borderColor: isSecondaryButton ? COLORS.primary : COLORS.transparent,
        borderWidth: isSecondaryButton ? 1 : 0,
        ...containerStyle,
      }}
      onPress={onPress}>
      <Text
        style={{
          color: isPrimaryButton ? COLORS.white : COLORS.primary,
          ...labelStyle,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
