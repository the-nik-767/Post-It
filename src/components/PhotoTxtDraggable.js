import React from 'react'
import { DragTextEditor } from './dregTxt';

const PhotoTxtDraggable = (props) => {
    const { PhotoFontfontFamily, PhotoColorTxt, fontSizephoto, setphototxtshow } = props
    return (
        <DragTextEditor
            minWidth={100}
            minHeight={100}
            w={100}
            h={100}
            FontFamily={PhotoFontfontFamily}
            FontColor={PhotoColorTxt}
            LineHeight={25}
            TextAlign={"left"}
            LetterSpacing={0}
            FontSize={fontSizephoto}
            isDraggable={true}
            isResizable={true}
            TopRightAction={() => setphototxtshow(false)}
        />
    )
}

export default PhotoTxtDraggable