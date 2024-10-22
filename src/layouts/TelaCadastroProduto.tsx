import React, { useState } from 'react';
import { Alert, Image, Pressable, Text, TextInput, View } from 'react-native';
import { CadastrarProdutoProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/login-styles';
import { Produto } from '../types/Produto';

import firestore from "@react-native-firebase/firestore";

const TelaCadastroProduto = (props: CadastrarProdutoProps) => {
	const [nome, setNome] = useState('');
	const [codigoDeBarras, setCodigoDeBarras] = useState('');
	const [preco, setPreco] = useState('');


	function cadastrar() {
		if (verificaCampos()) {

			let produto = {
				nome: nome,
				codigoDeBarras: codigoDeBarras,
				preco: Number.parseFloat(preco)
			} as Produto;

			firestore()
				.collection('produtos')
				.add(produto)
				.then(() => {
					Alert.alert(
						"Produto",
						"Cadastrado com sucesso!"
					)
					props.navigation.goBack();
				})
				.catch((error) => console.log(error));
		}
	}

	function verificaCampos(): boolean {
		if (nome == '') {
			Alert.alert(
				"Nome em branco",
				"Informe um nome para realizar o cadastro."
			)
			return false;
		}
		if (codigoDeBarras == '') {
			Alert.alert(
				"Codigo de barras em branco",
				"Informe um código de barras para realizar o cadastro."
			)
			return false;
		}
		if (preco == '') {
			Alert.alert(
				"Preço em branco",
				"Informe um preço para realizar o cadastro."
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
					<Text style={[styles.texto_botao, { fontSize: 20, marginBottom: 10 }]}>Cadastrar produto</Text>
					<TextInput
						onChangeText={(text) => {
							setNome(text);
						}}
						style={styles.caixa_texto}
						placeholder="Nome"
					/>
					<TextInput
						onChangeText={(text) => {
							setCodigoDeBarras(text);
						}}
						style={styles.caixa_texto}
						placeholder="Código de barras"
					/>
					<TextInput
						onChangeText={(text) => {
							setPreco(text);
						}}
						style={styles.caixa_texto}
						placeholder="Preço"
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

export default TelaCadastroProduto;
