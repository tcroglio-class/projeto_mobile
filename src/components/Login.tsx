import React from 'react';
import { View, Image, ScrollView, TextInput, Pressable, Text, Alert } from 'react-native';
import { styles } from '../styles/login-styles';
import { useState } from "react";


const Login = () => {
	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');


	function exibeLogin() {
		Alert.alert(
			'Informações de login: ',
			'Email: ' + email +
			'\nSenha: ' + senha
		)
	}

	return (
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
						placeholder="Usuário"
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
	);
};


export default Login;