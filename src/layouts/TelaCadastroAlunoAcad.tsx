import React, { useState } from 'react';
import { Alert, Pressable, Text, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { CadastroAlunoAcadProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/login-styles';
import { Aluno } from '../types/Aluno';
import firestore from "@react-native-firebase/firestore";

const TelaCadastroAlunoAcad = (props: CadastroAlunoAcadProps) => {
	const [nome, setNome] = useState('');
	const [peso, setPeso] = useState('');
	const [altura, setAltura] = useState('');
	const [genero, setGenero] = useState('Gênero');

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
				"Informe a altura do aluno para realizar o cadastro."
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

	return (
		<View style={styles.tela}>
			<View style={styles.content}>
				<View style={styles.inputContent}>
					<Text style={[styles.texto_botao, { fontSize: 20, marginBottom: 10 }]}>CADASTRO DE ALUNO</Text>
					<Text style={{ marginBottom: 2, marginLeft: 10, color: 'white' }}>Nome</Text>
					<TextInput
						onChangeText={(text) => {
							setNome(text);
						}}
						style={styles.caixa_texto}
						placeholder="Nome"
					/>
					<Text style={{ marginBottom: 2, marginLeft: 10, color: 'white' }}>Peso</Text>
					<TextInput
						onChangeText={(text) => {
							setPeso(text);
						}}
						style={styles.caixa_texto}
						keyboardType='numeric'
						placeholder="Peso"
					/>
					<Text style={{ marginBottom: 2, marginLeft: 10, color: 'white' }}>Altura</Text>
					<TextInput
						onChangeText={(text) => {
							setAltura(text);
						}}
						style={styles.caixa_texto}
						keyboardType='numeric'
						placeholder="Altura"
					/>
					<Text style={{ marginBottom: 2, marginLeft: 10, color: 'white' }}>Gênero</Text>
					<Picker
						selectedValue={genero}
						style={styles.caixa_texto}
						onValueChange={(itemValue) => setGenero(itemValue)}
					>
						<Picker.Item label="Masculino" value="masculino" />
						<Picker.Item label="Feminino" value="feminino" />
					</Picker>
					<View style={{ flexDirection: 'row', justifyContent: 'center', gap: 30 }}>
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
		</View>
	);
}

export default TelaCadastroAlunoAcad;
