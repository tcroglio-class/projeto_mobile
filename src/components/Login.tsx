import React from 'react';
import { View, Image, ScrollView, TextInput, Pressable, Text } from 'react-native';
import { styles } from '../styles/login-styles';

const Login = () => {

	return (
		<ScrollView>


			<View style={styles.content}>
				<Image
					source={require('../images/twitter.png')}
					style={styles.imagem_250}
				/>

				<View style={styles.inputContent}>
					<TextInput
						style={styles.caixa_texto}
						placeholder="Usuário"
					/>
					<TextInput
						style={styles.caixa_texto}
						placeholder="Senha"
					/>
					<Pressable style={(state) => [styles.botao, state.pressed ? {opacity: 0.5} : null]}>
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