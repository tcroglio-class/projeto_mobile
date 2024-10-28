import React, { useEffect, useState } from 'react';
import { Alert, Image, Pressable, Text, TextInput, View } from 'react-native';
import { EditarTreinoAcadProps } from '../navigation/HomeNavigator';
import { Picker } from '@react-native-picker/picker';
import { Aluno } from '../types/Aluno';
import { Treino } from '../types/Treino';
import Sidebar from '../components/Sidebar';

import { styles } from '../styles/styles';
import { treinostyles } from '../styles/treino-styles';

import firestore from "@react-native-firebase/firestore";

const TelaEditarTreinoAcad = (props: EditarTreinoAcadProps) => {
	const [idTreino, setIdTreino] = useState('');
	const [alunoID, setAlunoID] = useState('');
	const [nomeAluno, setNomeAluno] = useState('');
	const [tipoDeTreino, setTipoDeTreino] = useState('');
	const [alunos, setAlunos] = useState<Aluno[]>([]);
	const [diaDaSemana, setDiaDaSemana] = useState('');

	useEffect(() => {
		const fetchAlunos = async () => {
			try {
				const snapshot = await firestore().collection('alunos').get();
				const alunosData = snapshot.docs.map(doc => ({
					id: doc.id,
					...doc.data()
				})) as Aluno[];
				setAlunos(alunosData);
			} catch (error) {
				console.error("Erro ao buscar alunos:", error);
			}
		};
		fetchAlunos();
	}, []);

	useEffect(() => {
		carregar(props.route.params.id);
	}, []);

	function editar() {
		if (verificaCampos()) {
			const treino = {
				idAluno: alunoID,
				nomeAluno: nomeAluno,
				tipoDeTreino: tipoDeTreino,
				diaDaSemana: diaDaSemana
			} as Treino;

			firestore()
				.collection('treinos')
				.doc(idTreino)
				.update(treino)
				.then(() => {
					Alert.alert(
						"Treino",
						"Treino editado com sucesso!"
					)
					props.navigation.goBack();
				})
				.catch((error) => console.log(error));
		}
	}

	function cadastrarAluno() {
		props.navigation.navigate(
			'TelaCadastroAlunoAcad',
		)
	}

	function verificaCampos(): boolean {
		if (alunoID == 'default') {
			Alert.alert(
				"Aluno em branco",
				"Informe um aluno para realizar o cadastro de um treino."
			)
			return false;
		}
		if (tipoDeTreino == 'default') {
			Alert.alert(
				"Tipo de treino em branco",
				"Informe qual o tipo de treino para realizar o cadastro de um treino."
			)
			return false;
		}
		if (diaDaSemana == 'default') {
			Alert.alert(
				"Dia da semana em branco",
				"Informe o dia da semana deste treino para realizar o cadastro."
			)
			return false;
		}
		return true;
	}

	async function carregar(id: string) {
		const resultado = await firestore()
			.collection('treinos')
			.doc(id)
			.get();

		const treino = {
			...resultado.data()
		} as Treino;

		setIdTreino(props.route.params.id);
		setAlunoID(treino.idAluno);
		setNomeAluno(treino.nomeAluno);
		setTipoDeTreino(treino.tipoDeTreino);
		setDiaDaSemana(treino.diaDaSemana);
	};

	return (
		<Sidebar navigation={props.navigation} >
			<View style={styles.tela}>
				<View style={treinostyles.containerEditarCadastrar}>

					<Image
						source={require('../images/logoAcademia.png')}
						style={styles.imagem}
					/>

					<View style={treinostyles.inputContent}>
						<Text style={treinostyles.titulo}>EDITAR TREINO</Text>

						<Text style={treinostyles.titulo2}>Aluno</Text>
						<View style={treinostyles.caixa_texto}>
							<Picker
								onValueChange={(itemValue) => {
									setAlunoID(itemValue);
									const alunoSelecionado = alunos.find((aluno) => aluno.id === itemValue);
									if (alunoSelecionado) {
										setNomeAluno(alunoSelecionado.nome);
									}
								}}
								selectedValue={alunoID}
							>
								<Picker.Item label="Selecionar aluno..." value="default" />
								{alunos.map((aluno) => (
									<Picker.Item key={aluno.id} label={aluno.nome} value={aluno.id} />
								))}

							</Picker>
						</View>

						<View
							style={styles.centralizar}>
							<Pressable style={(state) => [
								{ width: 10 },
								treinostyles.botao,
								state.pressed ? { opacity: 0.5 } : null
							]}
								onPress={() => { cadastrarAluno() }}>
								<Text style={treinostyles.texto_botao}>CADASTRAR NOVO ALUNO</Text>
							</Pressable>
						</View>


						<Text style={treinostyles.titulo2}>Tipo do treino</Text>
						<TextInput
							onChangeText={(text) => {
								setTipoDeTreino(text);
							}}
							value={tipoDeTreino}
							style={[treinostyles.caixa_texto, { paddingLeft: 20 }]}
							placeholder="Tipo de treino"
						/>


						<Text style={treinostyles.titulo2}>Dia da semana</Text>
						<View style={treinostyles.caixa_texto}>
							<Picker
								onValueChange={(itemValue) => setDiaDaSemana(itemValue)}
								selectedValue={diaDaSemana}
							>
								<Picker.Item label="Selecionar dia da semana..." value="default" />
								<Picker.Item label="Segunda-feira" value="segunda" />
								<Picker.Item label="Terça-feira" value="terca" />
								<Picker.Item label="Quarta-feira" value="quarta" />
								<Picker.Item label="Quinta-feira" value="quinta" />
								<Picker.Item label="Sexta-feira" value="sexta" />
								<Picker.Item label="Sábado" value="sabado" />
								<Picker.Item label="Domingo" value="domingo" />
							</Picker>
						</View>
					</View>

					<View style={{ flexDirection: 'row', justifyContent: 'center', gap: 30 }}>
						<Pressable style={(state) => [
							{ width: 100 },
							treinostyles.botaoFinal2,
							state.pressed ? { opacity: 0.5 } : null
						]}
							onPress={() => { props.navigation.goBack(); }}>
							<Text style={treinostyles.texto_botao}>CANCELAR</Text>
						</Pressable>
						<Pressable style={(state) => [
							{ width: 100 },
							treinostyles.botaoFinal2,
							state.pressed ? { opacity: 0.5 } : null
						]}
							onPress={() => { editar() }}>
							<Text style={treinostyles.texto_botao}>EDITAR</Text>
						</Pressable>
					</View>
				</View>
			</View >
		</Sidebar>

	);
}

export default TelaEditarTreinoAcad;
