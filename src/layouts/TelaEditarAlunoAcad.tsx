import React, { useEffect, useState } from 'react';
import { Alert, Pressable, Switch, Text, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { EditarAlunoAcadProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/login-styles';
import { Aluno } from '../types/Aluno';
import firestore from "@react-native-firebase/firestore";

const TelaEditarAlunoAcad = (props: EditarAlunoAcadProps) => {
	const [id, setId] = useState('');
	const [nome, setNome] = useState('');
	const [peso, setPeso] = useState('');
	const [altura, setAltura] = useState('');
	const [genero, setGenero] = useState('');
	const [ativo, setAtivo] = useState(false); // Switch usa boolean, então inicializamos como false

	async function carregar(id: string) {
		const resultado = await firestore()
			.collection('alunos')
			.doc(id)
			.get();

		const aluno = {
			id: resultado.id,
			...resultado.data()
		} as Aluno;

		setId(aluno.id);
		setNome(aluno.nome);
		setPeso(aluno.peso);
		setAltura(aluno.altura);
		setGenero(aluno.genero);
		setAtivo(aluno.ativo === 1); // Converte o valor de 0 ou 1 para booleano
	};

	useEffect(() => {
		carregar(props.route.params.id);
	}, []);

	function verificaCampos(): boolean {
		if (nome === '') {
			Alert.alert("Nome em branco", "Informe o nome do aluno para realizar o cadastro.");
			return false;
		}
		if (peso === '') {
			Alert.alert("Peso em branco", "Informe o peso do aluno para realizar o cadastro.");
			return false;
		}
		if (altura === '') {
			Alert.alert("Altura em branco", "Informe a altura do aluno para realizar o cadastro.");
			return false;
		}
		if (genero === '') {
			Alert.alert("Gênero em branco", "Informe o gênero do aluno para realizar o cadastro.");
			return false;
		}
		return true;
	}

	function editar() {
		if (verificaCampos()) {
			let aluno = {
				id: id,
				nome: nome,
				peso: peso,
				altura: altura,
				genero: genero,
				ativo: ativo ? 1 : 0 // Transforma o valor booleano em 0 ou 1
			} as Aluno;

			firestore()
				.collection('alunos')
				.doc(id)
				.update(aluno)
				.then(() => {
					Alert.alert("Aluno", "Cadastro editado com sucesso!");
					props.navigation.goBack();
				})
				.catch((error) => console.log(error));
		}
	}

	return (
		<View style={styles.tela}>
			<View style={styles.content}>
				<View style={styles.inputContent}>
					<Text style={[styles.texto_botao, { fontSize: 20, marginBottom: 10 }]}>EDITAR ALUNO</Text>

					<Text style={{ marginBottom: 2, marginLeft: 10, color: 'white' }}>Nome</Text>
					<TextInput
						onChangeText={(text) => setNome(text)}
						style={styles.caixa_texto}
						value={nome}
						placeholder="Nome"
					/>

					<Text style={{ marginBottom: 2, marginLeft: 10, color: 'white' }}>Peso</Text>
					<TextInput
						onChangeText={(text) => setPeso(text)}
						style={styles.caixa_texto}
						value={peso}
						keyboardType='numeric'
						placeholder="Peso"
					/>

					<Text style={{ marginBottom: 2, marginLeft: 10, color: 'white' }}>Altura</Text>
					<TextInput
						onChangeText={(text) => setAltura(text)}
						style={styles.caixa_texto}
						value={altura}
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

					<View style={{ flexDirection: 'row', gap: 30 }}>
						<Text style={{ marginBottom: 2, marginLeft: 10, color: 'white' }}>Ativo</Text>
						<Switch
							value={ativo}
							onValueChange={(value) => setAtivo(value)}
						/>
					</View>

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
							onPress={editar}>
							<Text style={styles.texto_botao}>EDITAR</Text>
						</Pressable>

					</View>

					<Text style={{ textAlign: 'center' }}>esses botoeszinhos tem que ficar la no final da tela kathleen</Text>

				</View>
			</View>
		</View>
	);
}

export default TelaEditarAlunoAcad;
