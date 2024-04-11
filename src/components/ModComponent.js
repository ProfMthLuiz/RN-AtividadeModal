import { View } from 'react-native';
import styles from '../styles/Style';

export default function ModComponent({ children }) {

  return (
      <View style={ styles.modStyles.mod }>
        { children }
      </View>
  );
}

