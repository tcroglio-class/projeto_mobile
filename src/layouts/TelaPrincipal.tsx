import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import HelloWorld from '../components/HelloWorld';
import { styles } from '../styles/styles';
import Exemplo1 from '../components/Exemplo1';

// componente chamado TelaPrincipal que recebe PrincipalProps como parametro e constroi uma view com o componente helloWorld e Exemplo1 dentro
const TelaPrincipal = (props: PrincipalProps) => {
    return (
        <View
            style={styles.tela}>
            <HelloWorld />
            <Exemplo1 />
        </View>
    );
}

// exportanto o componente TelaPrincipal para ficar visível 
export default TelaPrincipal;
