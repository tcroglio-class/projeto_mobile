import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { ConsultarTreinoAcadProps } from '../navigation/HomeNavigator';
import firestore from "@react-native-firebase/firestore";
import { Treino } from '../types/Treino';
import Sidebar from '../components/Sidebar';
import { treinostyles } from '../styles/treino-styles';
import { styles } from '../styles/styles';

const formatarDias = (diaSelecionado: string) => {
	const dias = [
		{ nome: 'domingo', abreviacao: 'D' },
		{ nome: 'segunda', abreviacao: 'S' },
		{ nome: 'terca', abreviacao: 'T' },
		{ nome: 'quarta', abreviacao: 'Q' },
		{ nome: 'quinta', abreviacao: 'Q' },
		{ nome: 'sexta', abreviacao: 'S' },
		{ nome: 'sabado', abreviacao: 'S' }
	];

	return dias.map((dia, index) => (
		<Text
			key={index}
			style={[
				treinostyles.textoDia,
				dia.nome === diaSelecionado ? { fontWeight: 'bold' } : { fontWeight: '300' }
			]}
		>
			{dia.abreviacao}
		</Text>
	));
};


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

	function deletarTreino(id: string) {
		firestore()
			.collection('treinos')
			.doc(id)
			.delete()
			.then(() => {
				Alert.alert("Alerta", "Treino excluído com sucesso.");
			})
			.catch((error) => console.log(error));
	}

	function alterarTreino(id: string) {
		props.navigation.navigate(
			'TelaEditarTreinoAcad',
			{ id: id });
	}

	function cadastrarTreino() {
		props.navigation.navigate(
			'TelaCadastroTreinoAcad'
		)
	}


	return (
		<Sidebar navigation={props.navigation} >
			<View style={styles.tela}>
				<Image
					source={require('../images/logoAcademia.png')}
					style={styles.imagem}
				/>

				<View
					style={treinostyles.containerConsultar}>
					<Text style={treinostyles.titulo}> Treinos </Text>
					<FlatList
						data={treinos}
						numColumns={2}
						keyExtractor={(item) => item.id}
						renderItem={(info) => (
							<ItemTreino
								onDeletar={deletarTreino}
								onAlterar={() => alterarTreino(info.item.id)}
								numeroOrdem={info.index + 1}
								treino={info.item}
							/>
						)}
						contentContainerStyle={treinostyles.gridContainer}
					/>
				</View>
				<View
					style={[styles.centralizar, styles.botao_flutuante]}>
					<Pressable
						style={treinostyles.botao}
						onPress={() => { cadastrarTreino() }}>
						<Text style={[treinostyles.texto_botao, { fontSize: 15 }]}>CRIAR TREINO</Text>
					</Pressable>
				</View>

			</View>
		</Sidebar>
	);
}

type ItemTreinoProps = {
	numeroOrdem: number;
	treino: Treino;
	onDeletar: (id: string) => void;
	onAlterar: (id: string) => void;
}

const ItemTreino = (props: ItemTreinoProps) => {
	return (
		<Pressable onPress={() => props.onAlterar(props.treino.id)} style={treinostyles.gridItem}>
			<View style={treinostyles.card}>
				<View style={treinostyles.dados_card}>
					<Text style={treinostyles.nomeAluno}>
						{props.treino.nomeAluno}
					</Text>
					<Text style={treinostyles.textoTipo}>
						Treino: {props.treino.tipoDeTreino}
					</Text>
					<Text style={treinostyles.textoDia}>
						{formatarDias(props.treino.diaDaSemana)}
					</Text>
				</View>
			</View>
		</Pressable>
	);
}

export default TelaConsultarTreinoAcad;