import React from 'react';
import { StyleSheet } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import HelloWorld from '../components/HelloWorld';



const TelaPrincipal = ({ navigation, route }: PrincipalProps) => {
    return (
        <HelloWorld />
    );
}

export default TelaPrincipal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFACD'
    },
    titulo: {
        fontSize: 40
    },
    botao: {
        justifyContent: 'center',
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 20,
        borderRadius: 10
    },
    desc_botao: {
        fontSize: 20,
        color: 'white'
    },
});
