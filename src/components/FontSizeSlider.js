import React from 'react';
import { View} from 'react-native';
import Slider from '@react-native-community/slider';
import {color, responsiveWidth} from '../constant/theme';

const FontSizeSlider = props => {
  const {minValue, maximumValue, fontSizefooterHandler} =  props;

  return (
    <View
      style={{
        backgroundColor: color.transparent,
        borderRadius: 10,
        justifyContent: 'center',
        flex: 1,
      }}>
      <Slider
        minimumValue={minValue}
        style={{
          marginTop: responsiveWidth('1%'),
          height: responsiveWidth('10%'),
          left: 15,
        }}
        maximumValue={maximumValue}
        onValueChange={value => {
          fontSizefooterHandler(parseInt(value));
        }}
      />
    </View>
  );
};

export default FontSizeSlider;
