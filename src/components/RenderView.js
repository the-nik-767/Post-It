import React from 'react';
import {View} from 'react-native';
import ViewShot from 'react-native-view-shot';

const RenderView = ({children, ...props}) => {
  if (props.isShow) {
    return (<ViewShot style={props.style} ref={props.refc}>{children}</ViewShot>);
  }else{
    return (<View style={props.style} >{children}</View>);
  }
 
};

export default RenderView;
