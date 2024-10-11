import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";
import { useState } from "react";
import { Produto } from "../types/Produto";

const ExemploState = () => {
	const [frase, setFrase] = useState('bom dia');
	const [nome, setNome] = useState('');

	let fraseVariavel = '' as string;

	function exibirMensagem() {

		Alert.alert(
			'Valores',
			'Frase: ' + frase +
			'\nFrase Variável: ' + fraseVariavel
		)
	}

	return (
		<View style={{ flex: 1, alignItems: 'center' }}>
			<Text style={{ fontSize: 40 }}>
				Frase
			</Text>

			<TextInput
				style={[styles.caixa_texto, { width: 150 }]}
				onChangeText={(text) => {
					console.log(text);
					setFrase(text);
					fraseVariavel = text;
				}}>
			</TextInput>

			<Pressable
				style={(state) => [styles.botao, state.pressed && styles.click]}
				onPress={() => { exibirMensagem() }}
			>
				<Text style={styles.texto_botao}>
					Entrar
				</Text>
			</Pressable>
		</View>

	)
}

export default ExemploState;