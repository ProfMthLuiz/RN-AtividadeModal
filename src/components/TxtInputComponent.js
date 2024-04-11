import { TextInput } from 'react-native';

export default function TxtInputComponent({ txtPlace, styleTxtInp, funcValor }) {

  return (
      <TextInput placeholder={txtPlace} style={styleTxtInp} onChangeText={funcValor} />
  );
}

