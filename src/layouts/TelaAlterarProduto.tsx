import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { AlterarProdutoProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/login-styles';
import { Produto } from '../types/Produto';

import firestore from "@react-native-firebase/firestore";

const TelaAlterarProduto = (props: AlterarProdutoProps) => {
	const [id, setId] = useState('');
	const [nome, setNome] = useState('');
	const [codigoBarras, setCodigoBarras] = useState('');
	const [preco, setPreco] = useState('');

	async function carregar(id: string) {
		const resultado = await firestore()
			.collection('produtos')
			.doc(id)
			.get();

		const produto = {
			id: resultado.id,
			...resultado.data()
		} as Produto;

		setId(produto.id);
		setNome(produto.nome);
		setCodigoBarras(produto.codigoDeBarras);
		setPreco(produto.preco.toString());
	};

	useEffect(() => {
		carregar(props.route.params.id);
	}, []);

	function editar() {
		if (verificaCampos()) {
			let produto = {
				id: id,
				nome: nome,
				codigoDeBarras: codigoBarras,
				preco: Number(preco)
			} as Produto;

			firestore()
				.collection('produtos')
				.doc(id)
				.update(produto)
				.then(() => {
					Alert.alert("Produto", "Alterado com sucesso")
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
		if (codigoBarras == '') {
			Alert.alert(
				"Codigo de barras em branco",
				"Informe um código de barras para realizar o cadastro."
			)
			return false;
		}
		if (preco.toString() == '') {
			Alert.alert(
				"Preço em branco",
				"Informe um preço para realizar o cadastro."
			)
			return false;
		}
		return true;
	}


	return (
		<View style={styles.tela}>
			<View style={styles.content}>
				<Image
					source={require('../images/twitter.png')}
					style={styles.imagem_150}
				/>

				<View style={styles.inputContent}>
					<Text style={[styles.texto_botao, { fontSize: 20, marginBottom: 10 }]}>Editar Produto</Text>
					<TextInput
						onChangeText={(text) => {
							setNome(text);
						}}
						style={styles.caixa_texto}
						value={nome}
						placeholder="Nome"
					/>
					<TextInput
						onChangeText={(text) => {
							setCodigoBarras(text);
						}}
						style={styles.caixa_texto}
						value={codigoBarras}
						placeholder="Código de barras"
					/>
					<TextInput
						onChangeText={(text) => {
							setPreco(text);
						}}
						style={styles.caixa_texto}
						value={preco.toString()}
						placeholder="Preço"
					/>
					<Pressable style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
						onPress={() => { editar() }}>
						<Text style={styles.texto_botao}>EDITAR</Text>
					</Pressable>
				</View>

				<View style={[styles.buttonContent, { marginTop: 80 }]}>
					<Pressable style={styles.botao}
						onPress={() => { props.navigation.goBack(); }}>
						<Text style={styles.texto_botao}>Cancelar</Text>
					</Pressable>
				</View>

			</View>
		</View >
	);
}

export default TelaAlterarProduto;

const styles_local = StyleSheet.create({
	dados_card: {
		flex: 1,
		marginBottom: 10,
	},
	botao_deletar: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'red',
		padding: 10,
		borderRadius: 5,
	},
	texto_botao_card: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
	},
})