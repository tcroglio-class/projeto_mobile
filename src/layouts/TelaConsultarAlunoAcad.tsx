import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ConsultarAlunoAcadProps } from '../navigation/HomeNavigator';
import { Aluno } from '../types/Aluno';
import firestore from "@react-native-firebase/firestore";
import Sidebar from '../components/Sidebar';

import { styles } from '../styles/styles';
import { alunostyles } from '../styles/aluno-styles';

const TelaConsultarAlunoAcad = (props: ConsultarAlunoAcadProps) => {
	const [alunos, setAlunos] = useState([] as Aluno[]);

	useEffect(() => {
		const subscribe = firestore()
			.collection('alunos')
			.onSnapshot(querySnapshot => {
				const data = querySnapshot.docs.map(doc => {
					const alunoData = doc.data() as Aluno;
					return {
						alunoId: doc.id,
						...alunoData,
						ativo: alunoData.ativo == '1' ? 'Ativo' : 'Inativo'
					}
				}) as Aluno[];
				setAlunos(data);
			});
		return () => subscribe();
	}, []);

	function apagaAlunoNoBanco(id: string) {
		console.log(`Tentando excluir o aluno com ID: ${id}`);
		firestore()
			.collection('alunos')
			.doc(id)
			.delete()
			.then(() => {
				console.log("Aluno excluído com sucesso.");
				Alert.alert("Alerta", "Aluno excluído com sucesso.");
			})
			.catch((error) => {
				console.error("Erro ao excluir o aluno: ", error);
			});
	}

	function deletarAluno(id: string) {
		Alert.alert(
			"Confirmar Exclusão",
			"Você tem certeza que deseja excluir este aluno?",
			[
				{ text: "Cancelar", style: "cancel" },
				{ text: "OK", onPress: () => apagaAlunoNoBanco(id) }
			]
		);
	}

	function alterarAluno(id: string) {
		props.navigation.navigate('TelaEditarAlunoAcad', { id: id });
	}

	function cadastrarAluno() {
		props.navigation.navigate(
			'TelaCadastroAlunoAcad'
		);
	}

	return (
		<Sidebar navigation={props.navigation}>
			<ScrollView style={styles.tela}>
				<Image
					source={require('../images/logoAcademia.png')}
					style={styles.imagem}
				/>
				<View style={[alunostyles.containerConsultar, { paddingBottom: 100 }]}>
					<Text style={alunostyles.titulo}> ALUNOS </Text>

					<View style={alunostyles.listContent}>
						<FlatList
							data={alunos}
							renderItem={(info) => {
								console.log("Info do item: ", info.item);
								return (
									<ItemAluno
										onDeletar={() => deletarAluno(info.item.alunoId)}
										onAlterar={() => alterarAluno(info.item.alunoId)}
										numeroOrdem={info.index + 1}
										aluno={info.item}
									/>
								);
							}}
							scrollEnabled={false}
						/>
					</View>

				</View>
			</ScrollView>
			<View style={[styles.centralizar, styles.botao_flutuante]}>
				<Pressable
					style={alunostyles.botao}
					onPress={() => { cadastrarAluno() }}>
					<Text style={alunostyles.texto_botao}>CADASTRAR ALUNO</Text>
				</Pressable>
			</View>
		</Sidebar >
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
		<Pressable onPress={() => props.onAlterar(props.aluno.id)}>
			<View style={alunostyles.card}>
				<View style={[alunostyles.dados_card, { flex: 1 }]}>
					<Text style={alunostyles.textoNomeAluno}>
						{props.numeroOrdem + ' - ' + props.aluno.nome}
					</Text>
					<Text style={{ color: 'black', fontSize: 20 }}>
						<Text style={styles.bold}>Peso:</Text> {props.aluno.peso}kg
					</Text>
					<Text style={{ color: 'black', fontSize: 20 }}>
						<Text style={styles.bold}>Altura:</Text> {props.aluno.altura}m
					</Text>
					<Text style={{ color: 'black', fontSize: 20 }}>
						<Text style={styles.bold}>Gênero:</Text> {props.aluno.genero}
					</Text>
					<Text style={{ color: 'black', fontSize: 20 }}>
						<Text style={styles.bold}>Ativo:</Text> {props.aluno.ativo}
					</Text>
				</View>
				<View>
					<Pressable onPress={() => props.onDeletar(props.aluno.id)}
						style={alunostyles.botaoDeletar}>
						<Text style={alunostyles.textoBotaoDeletar}>Deletar</Text>
					</Pressable>
				</View>
			</View>
		</Pressable>
	);
}

export default TelaConsultarAlunoAcad;