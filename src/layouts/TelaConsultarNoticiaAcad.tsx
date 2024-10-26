import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { ConsultarAlunoAcadProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/styles';
import { Noticia } from '../types/Noticia';

import firestore from "@react-native-firebase/firestore";

const TelaConsultarNoticiaAcad = (props: ConsultarAlunoAcadProps) => {
	const [noticias, setNoticias] = useState([] as Noticia[]);

	useEffect(() => {
		const subscribe = firestore()
			.collection('noticias')
			.onSnapshot(querySnapshot => {
				const data = querySnapshot.docs.map(doc => {
					const noticiaData = doc.data() as Noticia;
					return {
						id: doc.id,
						titulo: noticiaData.titulo,
						mensagem: noticiaData.mensagem,
					};
				}) as Noticia[];
				setNoticias(data);
			});
		return () => subscribe();
	}, []);

	function deletarProduto(id: string) {
		firestore()
			.collection('alunos')
			.doc(id)
			.delete()
			.then(() => {
				Alert.alert(
					"Alerta",
					"Notícia excluída com sucesso."
				)
			})
			.catch((error) => console.log(error));
	}

	function alterarProduto(id: string) {
		props.navigation.navigate(
			'TelaEditarAlunoAcad',
			{ id: id }
		)
	}

	return (
		<View style={styles.tela}>
			<FlatList
				data={noticias}
				renderItem={(info) =>
					<ItemAluno
						onDeletar={deletarProduto}
						onAlterar={() => alterarProduto(info.item.id)}
						numeroOrdem={info.index + 1}
						noticia={info.item} />} />
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

type ItemAlunoProps = {
	numeroOrdem: number,
	noticia: Noticia,
	onDeletar: (id: string) => void;
	onAlterar: (id: string) => void;
}

const ItemAluno = (props: ItemAlunoProps) => {

	return (
		<Pressable>
			<View style={styles.card}>
				<View style={styles_local.dados_card}>
					<Text style={{ fontSize: 30, color: 'black' }}>
						NOTICIA
					</Text>
					<Text style={{ color: 'black', fontSize: 20 }}>
						{props.noticia.titulo}
					</Text>
					<Text style={{ color: 'black', fontSize: 20 }}>
						{props.noticia.mensagem}
					</Text>
				</View>
			</View>
		</Pressable>
	)
}

export default TelaConsultarNoticiaAcad;

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