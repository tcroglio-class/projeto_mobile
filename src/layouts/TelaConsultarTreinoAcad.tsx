import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { ConsultarTreinoAcadProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/styles';
import { Aluno } from '../types/Aluno';
import firestore from "@react-native-firebase/firestore";
import { Treino } from '../types/Treino';

const TelaConsultarTreinoAcad = (props: ConsultarTreinoAcadProps) => {
	const [treinos, setTreinos] = useState([] as Treino[]);

	useEffect(() => {
		const subscribe = firestore()
			.collection('treinos')
			.onSnapshot(querySnapshot => {
				const data = querySnapshot.docs.map(doc => {
					const treinoData = doc.data();

					return {
						id: doc.id,
						idAluno: treinoData.idAluno,
						nomeAluno: treinoData.nomeAluno,
						tipoDeTreino: treinoData.tipoDeTreino,
						diaDaSemana: treinoData.diaDaSemana,
					} as Treino;
				}) as Treino[];

				setTreinos(data);
			});
		return () => subscribe();
	}, []);

	function deletarProduto(id: string) {
		firestore()
			.collection('alunos')
			.doc(id)
			.delete()
			.then(() => {
				Alert.alert("Alerta", "Aluno excluído com sucesso.");
			})
			.catch((error) => console.log(error));
	}

	function alterarProduto(id: string) {
		props.navigation.navigate('TelaEditarAlunoAcad', { id });
	}

	return (
		<View style={styles.tela}>
			<FlatList
				data={treinos}
				numColumns={2} 
				keyExtractor={(item) => item.id}
				renderItem={(info) => (
					<ItemTreino
						onDeletar={deletarProduto}
						onAlterar={() => alterarProduto(info.item.id)}
						numeroOrdem={info.index + 1}
						treino={info.item}
					/>
				)}
				contentContainerStyle={styles_local.gridContainer}
			/>
			<View style={styles.centralizar}>
				<Pressable
					style={[styles.botao, { width: '40%' }]}
					onPress={() => { props.navigation.goBack(); }}>
					<Text style={styles.texto_botao}>Voltar</Text>
				</Pressable>
			</View>
		</View>
	);
}

type ItemTreinoProps = {
	numeroOrdem: number,
	treino: Treino,
	onDeletar: (id: string) => void;
	onAlterar: (id: string) => void;
}

const ItemTreino = (props: ItemTreinoProps) => {
	return (
		<Pressable onPress={() => props.onAlterar(props.treino.id)} style={styles_local.gridItem}>
			<View style={styles_local.card}>
				<View style={styles_local.dados_card}>
					<Text style={styles_local.nomeAluno}>
						{props.treino.nomeAluno}
					</Text>
					<Text style={styles_local.textoTipo}>
						{props.treino.tipoDeTreino}
					</Text>
					<Text style={styles_local.textoDia}>
						{props.treino.diaDaSemana}
					</Text>
				</View>
			</View>
		</Pressable>
	);
}

export default TelaConsultarTreinoAcad;

const styles_local = StyleSheet.create({
	gridContainer: {
		justifyContent: 'space-between',
		paddingHorizontal: 10,
	},
	gridItem: {
		flex: 1,
		margin: 10,
		maxWidth: '48%', // Para ter dois itens na mesma linha
	},
	card: {
		backgroundColor: '#fff',
		borderRadius: 10,
		padding: 15,
		elevation: 3,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.3,
		shadowRadius: 1,
	},
	dados_card: {
		flex: 1,
		marginBottom: 10,
	},
	nomeAluno: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'black',
		marginBottom: 5,
	},
	textoTipo: {
		color: 'black',
		fontSize: 16,
		marginBottom: 5,
	},
	textoDia: {
		color: 'black',
		fontSize: 16,
	},
});
