import React, { useState } from 'react';
import { Alert, Image, Pressable, Text, TextInput, View } from 'react-native';
import { CadastroUsuarioProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/login-styles';

import auth from "@react-native-firebase/auth";

const TelaCadastroUsuario = (props: CadastroUsuarioProps) => {
	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');
	const [confirmSenha, setConfirmSenha] = useState('');


	function cadastrar() {
		if (verificaCampos()) {
			auth()
				.createUserWithEmailAndPassword(email, senha)
				.then(() => {
					Alert.alert(
						"Conta",
						"Cadastrado com sucesso!"
					)
					props.navigation.goBack();
				})
				.catch((error) => { tratarErros(String(error)) });
		}
	}

	function verificaCampos(): boolean {
		if (email == '') {
			Alert.alert(
				"Email em branco",
				"Informe um email para realizar o cadastro."
			)
			return false;
		}
		if (senha.length < 6) {
			Alert.alert(
				"Senha inválida",
				"A senha deve ter mais do que 6 dígitos."
			)
		}
		if (senha == '') {
			Alert.alert(
				"Senha em branco",
				"Informe uma senha para realizar o cadastro."
			)
			return false;
		}
		if (senha != confirmSenha) {
			Alert.alert(
				"As senhas não coincidem",
				"Digite a confirmação de senha corretamente."
			)
			return false;
		}
		return true;
	}

	function tratarErros(erro: string) {
		console.log(erro);
		if (erro.includes("[auth/invalid-email]")) {
			Alert.alert(
				"Email inválido",
				"Digite um email válido."
			)
		} else if (erro.includes("[auth/weak-passwoard]")) {
			Alert.alert(
				"Senha fraca",
				"A senha digitada é fraca. A senha deve conter pelo menos 6 dígitos."
			)
		} else if (erro.includes("[auth/email-already-in-use]")) {
			Alert.alert(
				"Email em uso",
				"O email inserido já foi cadastrado em outra conta."
			)
		} else {
			Alert.alert(
				"Erro",
				erro
			)
		}
	}

	return (
		<View style={styles.tela}>
			<View style={styles.content}>
				<Image
					source={require('../images/twitter.png')}
					style={styles.imagem_150}
				/>

				<View style={styles.inputContent}>
					<Text style={[styles.texto_botao, { fontSize: 20, marginBottom: 10 }]}>Cadastre-se</Text>
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
					<TextInput
						onChangeText={(text) => {
							setConfirmSenha(text);
						}}
						style={styles.caixa_texto}
						placeholder="Confirme sua senha"
					/>
					<Pressable style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
						onPress={() => { cadastrar() }}>
						<Text style={styles.texto_botao}>Cadastrar</Text>
					</Pressable>
				</View>

				<View style={[styles.buttonContent, { marginTop: 80 }]}>
					<Pressable style={styles.botao}
						onPress={() => { props.navigation.goBack(); }}>
						<Text style={styles.texto_botao}>Cancelar</Text>
					</Pressable>
				</View>

			</View>
		</View>
	);
}

export default TelaCadastroUsuario;
