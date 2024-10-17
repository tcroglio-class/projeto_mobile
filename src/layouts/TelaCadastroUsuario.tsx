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
		auth()
			.createUserWithEmailAndPassword(email, senha)
			.then(() => {
				Alert.alert(
					"Conta",
					"Cadastrado com sucesso!"
				)
				props.navigation.goBack();
			})
	}

	return (
		<View style={styles.tela}>
			<View style={styles.content}>
				<Image
					source={require('../images/twitter.png')}
					style={styles.imagem_150}
				/>

				<View style={styles.inputContent}>
					<Text style={[styles.texto_botao, { fontSize: 20, marginBottom: 10 }]}>Criar novo usuário</Text>
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
						<Text style={styles.texto_botao}>Voltar</Text>
					</Pressable>
				</View>

			</View>
		</View>
	);
}

export default TelaCadastroUsuario;
