import React, {memo, useCallback, useState} from 'react';
import {TextInput, View} from 'react-native';
import {responsiveWidth} from '../constant/theme';
import {DragTextEditor} from './dregTxt';

const TextDraggable = props => {
  const {
    footerRemover,
    onChangeText22,
    FooterColorTxt,
    fontSizefooter,
    FooterFontfontFamily,
    FooterColor,
    fonttxt,
    setLines,
  } = props;

  const [height, setHeight] = useState(0);
  const [usedLines, setLine] = useState(0);
  const onTextLayout = e => {
    console.log('efjhhu', e.nativeEvent.layout.height);
    // if (numOfLines == 0) {
    //   console.log('e.nativeEvent.lines.length', e.nativeEvent.lines.length);
    //   // setNumOfLines(e.nativeEvent.lines.length);
    // }
  };

  const _onLayout = e => {
    console.log('e', e.nativeEvent.layout.height);

    // the height increased therefore we also increase the usedLine counter
    if (height < e.nativeEvent.layout.height) {
      setLines(usedLines + 1);
      setLine(usedLines + 1);
    }
    // the height decreased, we subtract a line from the line counter
    if (height > e.nativeEvent.layout.height) {
      setLines(usedLines - 1);
      setLine(usedLines + 1);
    }
    // update height if necessary
    if (height != e.nativeEvent.layout.height) {
      setHeight(e.nativeEvent.layout.height);
    }
  };

  return (
    <View
      style={{backgroundColor: FooterColor, height: footerRemover ? 0 : null}}>
      {/* <DragTextEditor minWidth={100} minHeight={100} /> */}
      <TextInput
        style={{
          color: FooterColorTxt,
          fontSize: fontSizefooter,
          fontFamily: FooterFontfontFamily,
          padding: 0,
          paddingLeft: responsiveWidth('5%'),
        }}
        multiline
        autoCorrect={false}
        onChangeText={onChangeText22}
        value={fonttxt}
        // onLayout={_onLayout}
        placeholder={'Enter Something'}
        placeholderTextColor={FooterColorTxt}
      />
    </View>
  );
};

export default memo(TextDraggable);
