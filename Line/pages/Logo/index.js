import React from 'react';
import { Text, Image } from 'react-native';

const uriLogo = require('../../assets/images/1.png');

const Logo = () => (
  <Image
    source={uriLogo}
  />
);

// setTimeout(uriLogo, 3000);

export default Logo;
