import { Text } from 'react-native';

export default function TxtComponent({ text, styleTxt }) {

  return (
      <Text style={styleTxt}>
        {text}
      </Text>
  );
}

