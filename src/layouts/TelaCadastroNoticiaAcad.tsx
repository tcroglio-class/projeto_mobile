import React, { useState } from 'react';
import { Alert, Image, Pressable, Text, TextInput, View } from 'react-native';
import { CadastroNoticiaAcadProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/login-styles';
import { Noticia } from '../types/Noticia';
import firestore from "@react-native-firebase/firestore";
import Sidebar from '../components/Sidebar';

const TelaCadastroNoticiaAcad = (props: CadastroNoticiaAcadProps) => {
	const [titulo, setTitulo] = useState('');
	const [mensagem, setMensagem] = useState('');

	function cadastrar() {
		if (verificaCampos()) {
			let noticia = {
				titulo: titulo,
				mensagem: mensagem
			} as Noticia;

			firestore()
				.collection('noticias')
				.add(noticia)
				.then(() => {
					Alert.alert(
						`Notícia`,
						"Notícia adicionada com sucesso!"
					)
					props.navigation.goBack();
				})
				.catch((error) => console.log(error));
		}
	}

	function verificaCampos(): boolean {
		if (titulo == '') {
			Alert.alert(
				"Título em branco",
				"Informe título da notícia para adicioná-la."
			)
			return false;
		}
		if (mensagem == '') {
			Alert.alert(
				"Mensagem em branco",
				"Informe o corpo da mensagem para adicioná-la."
			)
			return false;
		}
		return true;
	}

	return (
		<Sidebar navigation={props.navigation} >
			<View style={styles.tela}>
				<Image
					source={require('../images/logoAcademia.png')}
					style={styles.imagem}
				/>

				<View style={styles.content}>
					<View style={styles.inputContent}>
						<Text style={[styles.texto_botao, { color: 'white', fontSize: 20, marginBottom: 10 }]}>CADASTRO DE NOTÍCIA</Text>
						<Text style={{ marginBottom: 2, marginLeft: 10, color: 'white' }}>TÍTULO</Text>
						<TextInput
							onChangeText={(text) => {
								setTitulo(text);
							}}
							style={styles.caixa_texto}
							placeholder="TÍTULO"
							placeholderTextColor='#fef7b1'

						/>
						<Text style={{ marginBottom: 2, marginLeft: 10, color: 'white' }}>MENSAGEM</Text>
						<TextInput
							onChangeText={(text) => {
								setMensagem(text);
							}}
							style={styles.caixa_texto}
							placeholder="MENSAGEM"
							placeholderTextColor='#fef7b1'

						/>
						<View style={{ flexDirection: 'row', justifyContent: 'center', gap: 30 }}>
							<Pressable style={(state) => [
								{ width: 100 },
								styles.botao,
								state.pressed ? { opacity: 0.5 } : null
							]}
								onPress={() => { props.navigation.goBack(); }}>
								<Text style={styles.texto_botao}>CANCELAR</Text>
							</Pressable>

							<Pressable style={(state) => [
								{ width: 100 },
								styles.botao,
								state.pressed ? { opacity: 0.5 } : null
							]}
								onPress={() => { cadastrar() }}>
								<Text style={styles.texto_botao}>SALVAR</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</View>
		</Sidebar>

	);
}

export default TelaCadastroNoticiaAcad;
