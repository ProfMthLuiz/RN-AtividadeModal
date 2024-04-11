//Components React&ReactNative
import React, { useState } from "react";
import { View } from 'react-native';

// Pages
import MdPage from "./MdPage";

// Components
import ImgComponent from "../components/ImgComponent";
import TxtComponent from "../components/TxtComponent";
import TxtInputComponent from "../components/TxtInputComponent";
import TouchComponent from "../components/TouchComponent";

// Styles
import styles from '../styles/Style'

export default function Home() {

    const [visible, setVisible] = useState(false);
    const [valueAlcool, setValueAlcool] = useState('');
    const [valueGasolina, setValueGasolina] = useState('');
    let calcOption = valueAlcool / valueGasolina;

  visibleModal = ( vis ) => {
    if(!visible){
      setVisible(vis);
    }else{
      setVisible(vis);
    }
  }

  valorAlcool = (txtAlcool) => {
    setValueAlcool(parseFloat(txtAlcool));
  }

  valorGasolina = (txtGasolina) => {
    setValueGasolina(parseFloat(txtGasolina));
  }

  return (
      <View style={ styles.containerStyles.container}>
        <ImgComponent img={require('../assets/images/logo.png')} styleImg={styles.imgStyles.img} />
        <TxtComponent text="Qual a melhor opção?" styleTxt={styles.textStyles.txtTitle} />
        <TxtComponent text="Álcool (preço por litro):" styleTxt={styles.textStyles.txt} />
        <TxtInputComponent txtPlace="Digite o preço do álcool" styleTxtInp={styles.txtInputStyles.txtInput} funcValor={valorAlcool}/> 
        <TxtComponent text="Gasolina (preço por litro):" styleTxt={styles.textStyles.txt} />
        <TxtInputComponent txtPlace="Digite o preço da gasolina" styleTxtInp={styles.txtInputStyles.txtInput} funcValor={valorGasolina} /> 
        <TouchComponent styleTouch={styles.btnStyles.touchCalc} styleTxt={styles.textStyles.txtTouch} text="Calcular" visibleModal={visibleModal} boo={true} />
        <MdPage visibleModal={visibleModal} visible={visible} result={calcOption} valAlcool={valueAlcool} valGasolina={valueGasolina}  />
      </View>
  );
}

