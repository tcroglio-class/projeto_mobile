import React, { useEffect, useState } from 'react';
import { Alert, Image, Pressable, Text, TextInput, View } from 'react-native';
import { CadastroTreinoAcadProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/login-styles';
import { Picker } from '@react-native-picker/picker';
import { Aluno } from '../types/Aluno';
import { Treino } from '../types/Treino';

import firestore from "@react-native-firebase/firestore";

const TelaCadastroTreinoAcad = (props: CadastroTreinoAcadProps) => {
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

	function cadastrar() {
		if (verificaCampos()) {

			const treino = {
				idAluno: alunoID,
				nomeAluno: nomeAluno,
				tipoDeTreino: tipoDeTreino,
				diaDaSemana: diaDaSemana
			} as Treino;

			firestore()
				.collection('treinos')
				.add(treino)
				.then(() => {
					Alert.alert(
						"Treino",
						"Treino adicionado com sucesso!"
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

	return (
		<View style={styles.tela}>
			<View style={styles.content}>

			<Image
					source={require('../images/logoAcademia.png')}
					style={styles.imagem}
				/>

				<View style={styles.inputContent}>
					<Text style={styles.titulo1}>CADASTRO DE TREINO</Text>


					<Text style={styles.titulo2}>Selecione o aluno</Text>
					<View style={[{ borderColor: 'white', borderWidth: 1, borderRadius: 5 }, styles.caixa_texto]}>
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

					<Pressable style={(state) => [
						{ width: 10 },
						styles.botao2,
						state.pressed ? { opacity: 0.5 } : null
					]}
						onPress={() => { cadastrarAluno() }}>
						<Text style={styles.texto_botao}>CADASTRAR NOVO ALUNO</Text>
					</Pressable>


					<Text style={styles.titulo2}>Tipo do treino</Text>
					<TextInput
						onChangeText={(text) => {
							setTipoDeTreino(text);
						}}
						style={styles.caixa_texto}
						placeholder="Tipo de treino"
						
					/>


					<Text style={styles.titulo2}>Dia da semana</Text>
					<View style={[{ borderColor: 'white', borderWidth: 1, borderRadius: 5 }, styles.caixa_texto]}>
						<Picker
							onValueChange={(itemValue) => setDiaDaSemana(itemValue)}
							selectedValue={diaDaSemana}
						>
							<Picker.Item label="Selecione o dia da semana..." value="default" />
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
						styles.botaoFinal2,
						state.pressed ? { opacity: 0.5 } : null
					]}
						onPress={() => { props.navigation.goBack(); }}>
						<Text style={styles.texto_botao}>CANCELAR</Text>
					</Pressable>
					<Pressable style={(state) => [
						{ width: 100 },
						styles.botaoFinal2,
						state.pressed ? { opacity: 0.5 } : null
					]}
						onPress={() => { cadastrar() }}>
						<Text style={styles.texto_botao}>SALVAR</Text>
					</Pressable>
				</View>
			</View>
		</View >
	);
}

export default TelaCadastroTreinoAcad;
