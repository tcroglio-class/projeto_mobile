import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { ConsultarAlunoAcadProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/styles';
import { Aluno } from '../types/Aluno';

import firestore from "@react-native-firebase/firestore";

const TelaConsultarAlunoAcad = (props: ConsultarAlunoAcadProps) => {
	const [produtos, setAlunos] = useState([] as Aluno[]);

	useEffect(() => {
		const subscribe = firestore()
			.collection('alunos')
			.onSnapshot(querySnapshot => {
				const data = querySnapshot.docs.map(doc => {
					const alunoData = doc.data() as Aluno;

					return {
						id: doc.id,
						...alunoData,
						ativo: alunoData.ativo === 1 ? 'ativo' : 'inativo' // Conversão de 1 ou 0 para string	
					}
				}) as Aluno[];
				setAlunos(data);
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
					"Aluno excluído com sucesso."
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
				data={produtos}
				renderItem={(info) =>
					<ItemAluno
						onDeletar={deletarProduto}
						onAlterar={() => alterarProduto(info.item.id)}
						numeroOrdem={info.index + 1}
						aluno={info.item} />} />
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
	aluno: Aluno,
	onDeletar: (id: string) => void;
	onAlterar: (id: string) => void;
}

const ItemAluno = (props: ItemAlunoProps) => {

	return (
		<Pressable
			onPress={() => props.onAlterar(props.aluno.id)}>
			<View style={styles.card}>
				<View style={styles_local.dados_card}>
					<Text style={{ fontSize: 30, color: 'black' }}>
						{props.numeroOrdem + ' - ' + props.aluno.nome}
					</Text>
					<Text style={{ color: 'black', fontSize: 20 }}>
						Peso: {props.aluno.peso}kg
					</Text>
					<Text style={{ color: 'black', fontSize: 20 }}>
						Altura: {props.aluno.altura}m
					</Text>
					<Text style={{ color: 'black', fontSize: 20 }}>
						Gênero: {props.aluno.genero}
					</Text>
					<Text style={{ color: 'black', fontSize: 20 }}>
						Ativo: {props.aluno.ativo}
					</Text>
				</View>
			</View>
		</Pressable>
	)
}

export default TelaConsultarAlunoAcad;

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