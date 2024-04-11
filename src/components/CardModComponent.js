import { View } from 'react-native';
import styles from '../styles/Style';

export default function CardModComponent({ children }) {

  return (
      <View style={ styles.modStyles.modalStyle }>
        { children }
      </View>
  );
}

