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
        left: responsiveWidth('7%'),
      }}>
      <ColorPicker
        // discrete
        // row={true}
        swatches={{paddingTop: 0}}
        swatchesOnly={false}
        thumbSize={50}
        sliderHidden={true}
        gapSize={20}
        onColorChange={color => {
          FooterColorhandle(color);
        }}
      />
    </View>
  );
};

export default TriangleColorPickerpopover;
