import React from 'react';
import { ElementosProps } from '../navigation/HomeNavigator';
import ExemploEvento from '../components/ExemploEvento';
import { Pressable, Text, View } from 'react-native';

const TelaElementos = (props: ElementosProps) => {


    function constroiTela(elemento: number) {
        props.navigation.navigate(
            'TelaElemento',
            { elemento: elemento }
        )
    }

    return (
        <>
            <View style={{ padding: 10, gap: 20, marginTop: 230 }}>
                <Pressable
                    style={{ backgroundColor: 'green', padding: 5, borderRadius: 10 }}
                    onPress={() => { constroiTela(1) }}
                >
                    <Text style={{ fontSize: 30, textAlign: 'center' }}>exemplo cálculo</Text>
                </Pressable>

                <Pressable
                    style={{ backgroundColor: 'green', padding: 5, borderRadius: 10 }}
                    onPress={() => { constroiTela(2) }}
                >
                    <Text style={{ fontSize: 30, textAlign: 'center' }}>exemplo evento</Text>
                </Pressable>

                <Pressable
                    style={{ backgroundColor: 'green', padding: 5, borderRadius: 10 }}
                    onPress={() => { constroiTela(3) }}
                >
                    <Text style={{ fontSize: 30, textAlign: 'center' }}>exemplo state</Text>
                </Pressable>

                <Pressable
                    style={{ backgroundColor: 'green', padding: 5, borderRadius: 10 }}
                    onPress={() => { constroiTela(4) }}
                >
                    <Text style={{ fontSize: 30, textAlign: 'center' }}>exemplo style view</Text>
                </Pressable>

                <Pressable
                    style={{ backgroundColor: 'green', padding: 5, borderRadius: 10 }}
                    onPress={() => { constroiTela(5) }}
                >
                    <Text style={{ fontSize: 30, textAlign: 'center' }}>exemplo construção condicional</Text>
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

export default TelaElementos;