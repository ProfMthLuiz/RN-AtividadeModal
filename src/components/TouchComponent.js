import React, { useState } from "react";
import { TouchableOpacity,Text } from 'react-native';

export default function TouchComponent({ styleTouch, styleTxt, text, visibleModal, boo }) {

  return (
      <TouchableOpacity style={styleTouch} onPress={() => visibleModal(boo)}>
        <Text style={styleTxt}>{ text }</Text>
      </TouchableOpacity>
  );
}

