import React, { useState } from 'react';
import { Alert, Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { LoginProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/login-styles';

const TelaLogin = (props: LoginProps) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function exibeLogin() {
        Alert.alert(
            'Informações de login: ',
            'Email: ' + email +
            '\nSenha: ' + senha
        )

        props.navigation.navigate(
            'TelaPrincipal',
            { texto: email }
        )
    }

    return (
        <View style={styles.tela}>
            <ScrollView>
                <View style={styles.content}>
                    <Image
                        source={require('../images/twitter.png')}
                        style={styles.imagem_250}
                    />

                    <View style={styles.inputContent}>
                        <TextInput
                            onChangeText={(text) => {
                                setEmail(text);
                            }}
                            style={styles.caixa_texto}
                            placeholder="Email"
                        />
                        <TextInput
                            onChangeText={(text) => {
                                setSenha(text);
                            }}
                            style={styles.caixa_texto}
                            placeholder="Senha"
                        />
                        <Pressable style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                            onPress={() => { exibeLogin() }}>
                            <Text style={styles.texto_botao}>Login</Text>
                        </Pressable>
                    </View>

                    <View style={styles.buttonContent}>
                        <Pressable style={styles.botao}>
                            <Text style={styles.texto_botao}>Esqueci minha senha</Text>
                        </Pressable>
                        <Pressable style={styles.botao}>
                            <Text style={styles.texto_botao}>Cadastre-se</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default TelaLogin;