import React, { useState } from 'react';
import { Alert, Image, Pressable, Text, TextInput, View } from 'react-native';
import { LoginProps } from '../navigation/HomeNavigator';
import Login from '../components/Login';
import { styles } from '../styles/login-styles';

const TelaCadastroUsuario = (props: LoginProps) => {
	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');
	const [confirmSenha, setConfirmSenha] = useState('');


	function fazerLogin() {
		Alert.alert(
			'Informações de login: ',
			'Email: ' + email +
			'\nSenha: ' + senha +
			'\nConfirmação de senha: ' + confirmSenha
		)
	}

	return (
		<View style={styles.tela}>
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
					<TextInput
						onChangeText={(text) => {
							setConfirmSenha(text);
						}}
						style={styles.caixa_texto}
						placeholder="Confirme sua senha"
					/>
					<Pressable style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
						onPress={() => { fazerLogin() }}>
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


		</View>
	);
}

export default TelaCadastroUsuario;
