import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { ConsultarProdutosProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/styles';
import { Produto } from '../types/Produto';

import firestore from "@react-native-firebase/firestore";

const TelaConsProduto = (props: ConsultarProdutosProps) => {
	const [produtos, setProdutos] = useState([] as Produto[]);

	useEffect(() => {
		const subscribe = firestore()
			.collection('produtos')
			.onSnapshot(querySnapshot => {
				const data = querySnapshot.docs.map(doc => {
					return {
						id: doc.id,
						...doc.data()
					}
				}) as Produto[];
				setProdutos(data);
			});
		return () => subscribe();
	}, []);

	function deletarProduto(id: string) {
		firestore()
			.collection('produtos')
			.doc(id)
			.delete()
			.then(() => {
				Alert.alert(
					"Alerta",
					"Produto excluído com sucesso."
				)
			})
			.catch((error) => console.log(error));
	}

	function alterarProduto(id: string) {
		props.navigation.navigate(
			'TelaAlterarProduto',
			{ id: id }
		)
	}

	return (
		<View style={styles.tela}>
			<FlatList
				data={produtos}
				renderItem={(info) =>
					<ItemProduto
						onDeletar={deletarProduto}
						onAlterar={() => alterarProduto(info.item.id)}
						numeroOrdem={info.index + 1}
						prod={info.item} />} />
			<View
				style={styles.centralizar}>
				<Pressable
					style={[styles.botao, { width: '40%' }]}
					onPress={() => { props.navigation.goBack() }}>
					<Text style={styles.texto_botao}>Voltar</Text>
				</Pressable>
			</View>
		</View >
	);
}

type ItemProdutoProps = {
	numeroOrdem: number,
	prod: Produto,
	onDeletar: (id: string) => void;
	onAlterar: (id: string) => void;
}

const ItemProduto = (props: ItemProdutoProps) => {

	return (
		<View style={styles.card}>
			<View style={styles_local.dados_card}>
				<Text style={{ fontSize: 30, color: 'black' }}>
					{props.numeroOrdem + ' - ' + props.prod.nome}
				</Text>
				<Text style={{ color: 'black', fontSize: 20 }}>
					Id: {props.prod.id}
				</Text>
				<Text style={{ color: 'black', fontSize: 20 }}>
					Código de barras: {props.prod.codigoDeBarras}
				</Text>
				<Text style={{ color: 'black', fontSize: 20 }}>
					Preço: R${props.prod.preco.toFixed(2)}
				</Text>
			</View>
			<View
				style={{ display: 'flex', gap: 10 }}>
				<Pressable
					style={styles_local.botao_deletar}
					onPress={() => props.onDeletar(props.prod.id)}>
					<Text style={styles_local.texto_botao_card}>
						Excluir
					</Text>
				</Pressable>
				<Pressable
					style={styles_local.botao_alterar}
					onPress={() => props.onAlterar(props.prod.id)}>
					<Text
						style={{ paddingHorizontal: 10, color: 'white' }}>
						Alterar
					</Text>
				</Pressable>
			</View>
		</View>
	)
}

export default TelaConsProduto;

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
	botao_alterar: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'green',
		padding: 10,
		borderRadius: 5,
	},
	texto_botao_card: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
	},
})