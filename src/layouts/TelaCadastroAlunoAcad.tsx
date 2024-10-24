import React, { useState } from 'react';
import { Alert, Image, Pressable, Text, TextInput, View } from 'react-native';
import { CadastroAlunoAcadProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/login-styles';
import { Aluno } from '../types/Aluno';

import firestore from "@react-native-firebase/firestore";

const TelaCadastroAlunoAcad = (props: CadastroAlunoAcadProps) => {
	const [nome, setNome] = useState('');
	const [peso, setPeso] = useState('');
	const [altura, setAltura] = useState('');
	const [genero, setGenero] = useState('');

	function cadastrar() {
		if (verificaCampos()) {
			let aluno = {
				nome: nome,
				peso: peso,
				altura: altura,
				genero: genero,
				ativo: 1
			} as Aluno;

			firestore()
				.collection('alunos')
				.add(aluno)
				.then(() => {
					Alert.alert(
						`Aluno ${aluno.nome}`,
						"Aluno cadastrado com sucesso!"
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
				"Informe o nome do aluno para realizar o cadastro."
			)
			return false;
		}
		if (peso == '') {
			Alert.alert(
				"Peso em branco",
				"Informe o peso do aluno para realizar o cadastro."
			)
			return false;
		}
		if (altura == '') {
			Alert.alert(
				"Altura em branco",
				"Informe a altura do aluno realizar o cadastro."
			)
			return false;
		}
		if (genero == '') {
			Alert.alert(
				"Gênero em branco",
				"Informe o gênero do aluno para realizar o cadastro."
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
				<View style={styles.inputContent}>
					<Text style={[styles.texto_botao, { fontSize: 20, marginBottom: 10 }]}>CADASTRO DE ALUNO</Text>
					<TextInput
						onChangeText={(text) => {
							setNome(text);
						}}
						style={styles.caixa_texto}
						placeholder="Nome"
					/>
					<TextInput
						onChangeText={(text) => {
							setPeso(text);
						}}
						style={styles.caixa_texto}
						placeholder="Peso"
					/>
					<TextInput
						onChangeText={(text) => {
							setAltura(text);
						}}
						style={styles.caixa_texto}
						placeholder="Altura"
					/>
					<TextInput
						onChangeText={(text) => {
							setGenero(text);
						}}
						style={styles.caixa_texto}
						placeholder="Gênero"
					/>
					<View
						style={{ flexDirection: 'row', justifyContent: 'center', gap: 30 }}>
						<Pressable style={(state) => [
							{ width: 100 },
							styles.botao,
							state.pressed ? { opacity: 0.5 } : null
						]}
							onPress={() => { props.navigation.goBack(); }}>
							<Text style={styles.texto_botao}>CANCELAR</Text>
						</Pressable>
						<Pressable style={(state) => [
							{ width: 100 },
							styles.botao,
							state.pressed ? { opacity: 0.5 } : null
						]}
							onPress={() => { cadastrar() }}>
							<Text style={styles.texto_botao}>SALVAR</Text>
						</Pressable>
					</View>
					<Text style={{ textAlign: 'center' }}>esses botoeszinhos tem que ficar la no final da tela kathleen</Text>
				</View>
			</View>
		</View >
	);
}

export default TelaCadastroAlunoAcad;
