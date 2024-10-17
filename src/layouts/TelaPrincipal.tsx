import React from 'react';
import { PrincipalProps } from '../navigation/HomeNavigator';
import ExemploEvento from '../components/ExemploEvento';
import { Pressable, Text, View } from 'react-native';

const TelaPrincipal = (props: PrincipalProps) => {


    function constroiTela(elemento: number) {
        props.navigation.navigate(
            'TelaElementos'
        )
    }

    return (
        <>
            <View style={{ padding: 10, gap: 20, marginTop: 230 }}>
                <Pressable
                    style={{ backgroundColor: 'green', padding: 5, borderRadius: 10 }}
                    onPress={() => { constroiTela(1) }}
                >
                    <Text style={{ fontSize: 30, textAlign: 'center' }}>tela de elementos</Text>
                </Pressable>
                <Pressable
                    style={{ backgroundColor: 'green', padding: 5, borderRadius: 10 }}
                    onPress={() => { props.navigation.goBack() }}
                >
                    <Text style={{ fontSize: 30, textAlign: 'center' }}>Voltar</Text>
                </Pressable>
            </View>
        </>
    );
}

export default TelaPrincipal;