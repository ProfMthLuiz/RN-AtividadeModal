import { Image } from 'react-native';

export default function ImgComponent({ img, styleImg}) {

  return (
      <Image source={img} style={styleImg} />
  );
}

