import { View, Modal } from 'react-native';
import styles from '../styles/Style'

// Components
import TxtComponent from '../components/TxtComponent';
import ImgComponent from '../components/ImgComponent';
import TouchComponent from '../components/TouchComponent';
import ModComponent from '../components/ModComponent';
import CardModComponent from '../components/CardModComponent';

export default function MdPage({ visible, result, valAlcool, valGasolina }) {

  return (
    <Modal transparent={true} animationType="fade" visible={visible}>
      <ModComponent>
        <CardModComponent>
        <ImgComponent img={require('../assets/images/gas.png')} styleImg={styles.imgStyles.img} />
            <TxtComponent styleTxt={styles.modStyles.txtTitleModal} text="Com os preços:" />
            { result < 0.7 ? <TxtComponent styleTxt={styles.modStyles.txtPrincipalModal} text="Compensa usar Alcool" /> : <TxtComponent styleTxt={styles.modStyles.txtPrincipalModal} text="Compensa usar Gasolina" />}
            <TxtComponent styleTxt={styles.modStyles.txtModal} text={`Álcool: R$ ${valAlcool}`} />
            <TxtComponent styleTxt={styles.modStyles.txtModal} text={`Gasolina: R$ ${valGasolina}`} />
            <TouchComponent styleTouch={styles.btnStyles.touchCalc} styleTxt={styles.textStyles.txtTouch} text="Calcular novamente" visibleModal={visibleModal} boo={false} />
        </CardModComponent>
      </ModComponent>
    </Modal>
      
  );
}

