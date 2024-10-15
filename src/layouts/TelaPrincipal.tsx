import React from 'react';
import { PrincipalProps } from '../navigation/HomeNavigator';
import ExemploEvento from '../components/ExemploEvento';
import { Pressable, Text } from 'react-native';

const TelaPrincipal = (props: PrincipalProps) => {

    return (
        <>
            <ExemploEvento></ExemploEvento>
            <Text style={{ fontSize: 40, color: 'black' }}>
                {props.route.params.texto}
            </Text>
            
            <Pressable
                style={{ backgroundColor: 'green' }}
                onPress={() => { props.navigation.goBack() }}
            >
                <Text style={{ fontSize: 40 }}>Voltar</Text>
            </Pressable>


        </>
    );
}

export default TelaPrincipal;