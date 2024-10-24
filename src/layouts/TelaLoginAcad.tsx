import React, { useState } from 'react';
import { Alert, Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { LoginAcadProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/login-styles';

import auth from "@react-native-firebase/auth";

const TelaLoginAcad = (props: LoginAcadProps) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function logar() {
        if (verificaCampos()) {
            auth().signInWithEmailAndPassword(email, senha)
                .then(() => {
                    props.navigation.navigate('TelaPrincipalAcad');
                })
                .catch((error) => tratarErros(String(error)));
        }
    }

    function tratarErros(erro: string) {
        console.log(erro);
        if (erro.includes("[auth/invalid-email]")) {
            Alert.alert(
                "Email inválido",
                "Digite um email válido."
            )
        } else if (erro.includes("[INVALID_LOGIN_CREDENTIALS]")) {
            Alert.alert(
                "Ops!",
                "Login ou senha incorretos."
            )
        } else if (erro.includes("[auth/invalid-credential]")) {
            Alert.alert(
                "Ops!",
                "Login ou senha incorretos."
            )
        } else {
            Alert.alert(
                "Erro",
                erro
            )
        }


    }

    function verificaCampos(): boolean {
        if (email == '') {
            Alert.alert(
                "Email em branco",
                "Informe um email para realizar o login."
            )
            return false;
        }
        if (senha == '') {
            Alert.alert(
                "Senha em branco",
                "Informe uma senha para realizar o cadastro."
            )
            return false;
        }
        return true;
    }

    function redefinirSenha() {
        if (email == '') {
            Alert.alert(
                "Email em branco",
                "Preencha o email para redefinir sua senha."
            )
            return;
        }
        auth()
            .sendPasswordResetEmail(email)
            .then(() => Alert.alert(
                "Redefinir senha",
                "Enviamos um email para você redefinir sua senha"
            ))
            .catch((error) => console.log(error));
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
                        <Text style={styles.texto_botao}>LOGIN DA ACADEMIA (MUDAR DEPOIS)</Text>
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
                            onPress={() => { logar() }}>
                            <Text style={styles.texto_botao}>Login</Text>
                        </Pressable>
                    </View>

                    <View style={styles.buttonContent}>
                        <Pressable style={styles.botao}
                            onPress={() => { redefinirSenha() }}>
                            <Text style={styles.texto_botao}>Esqueci minha senha</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default TelaLoginAcad;