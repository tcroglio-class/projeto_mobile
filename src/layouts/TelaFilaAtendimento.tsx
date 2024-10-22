import React, { useState } from 'react';
import { Alert, Text, TextInput, View, Pressable, ScrollView } from 'react-native';
import { FilaAtendimentoProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/fila-atendimento-styles';
import { Paciente } from '../types/Paciente';

const TelaFilaAtendimento = (props: FilaAtendimentoProps) => {
	const [nome, setNome] = useState('');
	const [enfermidade, setEnfermidade] = useState('');
	const [idade, setIdade] = useState('');
	const [risco, setRisco] = useState('');
	const [fila, setFila] = useState<Paciente[]>([]);

	function adicionar() {
		let paciente = {
			nome: nome,
			enfermidade: enfermidade,
			idade: idade,
			risco: risco
		} as Paciente;

		if (verificaCampos()) {
			adicionarCasoNaFila(paciente);
			// limparCampos();
		}
	}

	function verificaCampos(): boolean {
		if (nome === '') {
			Alert.alert("Nome em branco", "Informe um nome para adicionar um atendimento na fila.");
			return false;
		}
		if (enfermidade === '') {
			Alert.alert("Enfermidade em branco", "Informe uma enfermidade para adicionar um atendimento na fila.");
			return false;
		}
		if (idade === '') {
			Alert.alert("Idade em branco", "Informe a idade do paciente para adicionar um atendimento na fila.");
			return false;
		}
		if (!Number(idade)) {
			Alert.alert("Idade inválida", "Por favor, informe apenas números para a idade.");
			return false;
		}
		if (risco === '') {
			Alert.alert("Risco em branco", "Informe o risco para adicionar um atendimento na fila.");
			return false;
		}
		if (Number(risco) > 5 || Number(risco) < 1 || !Number(risco)) {
			Alert.alert("Risco inválido", "Por favor, informe o risco em apenas números de 1 a 5.");
			return false;
		}
		return true;
	}

	function adicionarCasoNaFila(paciente: Paciente) {
		setFila([...fila, { ...paciente }]);
	}

	function limparCampos() {
		setNome('');
		setEnfermidade('');
		setIdade('');
		setRisco('');
	}

	function getRisco(risco: string) {
		let mensagem = '';
		let cor = '';

		switch (risco) {
			case '1':
				mensagem = 'LEVE';
				cor = 'blue';
				break;
			case '2':
				mensagem = 'MENOS GRAVE';
				cor = 'green';
				break;
			case '3':
				mensagem = 'URGÊNCIA';
				cor = 'yellow';
				break;
			case '4':
				mensagem = 'MUITA URGÊNCIA';
				cor = 'orange';
				break;
			case '5':
				mensagem = 'EMERGÊNCIA';
				cor = 'red';
				break;
		}

		return <Text style={[styles.texto_risco, { color: cor }]}>{mensagem}</Text>;
	}

	return (
		<ScrollView style={styles.tela}>
			<View style={styles.content}>
				<Text style={[styles.texto_botao, { fontSize: 25, marginBottom: 10 }]}>FILA DE ATENDIMENTO</Text>
				<View style={styles.inputContent}>
					<Text style={styles.texto_label}>Nome</Text>
					<TextInput
						value={nome}
						onChangeText={(text) => setNome(text)}
						style={styles.caixa_texto}
						placeholder="Nome"
					/>
					<Text style={styles.texto_label}>Enfermidade</Text>
					<TextInput
						value={enfermidade}
						onChangeText={(text) => setEnfermidade(text)}
						style={styles.caixa_texto}
						placeholder="Enfermidade"
					/>
					<View style={styles.input_flex}>
						<Text style={styles.texto_label}>Idade</Text>
						<TextInput
							value={idade}
							onChangeText={(text) => setIdade(text)}
							style={[styles.caixa_texto, { width: 100 }]}
							placeholder="Idade"
							keyboardType='numeric'
						/>
						<Text style={styles.texto_label}>Risco</Text>
						<TextInput
							value={risco}
							onChangeText={(text) => setRisco(text)}
							style={[styles.caixa_texto, { width: 100 }]}
							placeholder="1-5"
							keyboardType='numeric'
						/>
					</View>
					<Pressable style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]} onPress={adicionar}>
						<Text style={styles.texto_botao}>Adicionar</Text>
					</Pressable>

					<View id="fila-content" style={styles.fila_content}>
						{fila.map((paciente, index) => (
							<View key={index} style={styles.pacienteContainer}>
								{getRisco(paciente.risco)}
								<Text style={styles.texto_fila}>Nome: {paciente.nome}</Text>
								<Text style={styles.texto_fila}>Enfermidade: {paciente.enfermidade}</Text>
								<Text style={styles.texto_fila}>Idade: {paciente.idade}</Text>
							</View>
						))}
					</View>
				</View>
			</View>
		</ScrollView>
	);
}

export default TelaFilaAtendimento;
