import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import HelloWorld from '../components/HelloWorld';
import { styles } from '../styles/styles';
import Exemplo1 from '../components/Exemplo1';
import ExemploCalculo from '../components/ExemploCalculo';
import Aprovado from '../components/Aprovado';

const TelaPrincipal = (props: PrincipalProps) => {
    return (
        <View
            style={styles.tela}>
            <ExemploCalculo valor1={1} valor2={2}></ExemploCalculo>
            <Aprovado nome={'tiago'} valor1={10} valor2={6}></Aprovado>

        </View>
    );
}

export default TelaPrincipal;