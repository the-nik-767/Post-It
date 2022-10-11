import React from 'react';
import {View} from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';
import {color, responsiveWidth} from '../constant/theme';

const TriangleColorPickerpopover = props => {
  const {FooterColorhandle} = props;

  return (
    <View
      style={{
        backgroundColor: color.transparent,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        left: 10,
        marginTop: responsiveWidth('2%'),
      }}>
      <ColorPicker
        row={true}
        thumbSize={50}
        sliderHidden={true}
        sliderSize={20}
        onColorChange={color => {
          FooterColorhandle(color);
        }}
      />
    </View>
  );
};

export default TriangleColorPickerpopover;
