import { PreventRemoveProvider } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { styles } from '../styles/styles';

type CalculoProps = {
	nome: string;
	valor1: number;
	valor2: number;
}


const Aprovado = (props: CalculoProps) => {

	function firstLetterUpperCase(teste: string): string {
		return teste.charAt(0).toUpperCase() + teste.slice(1);;
	}

	let media = (props.valor1 + props.valor2) / 2;
	let retorno = '';

	if (media >= 7) {
		retorno = `Parabéns ${firstLetterUpperCase(props.nome)}, você foi aprovado!`;
	} else {
		retorno = `${firstLetterUpperCase(props.nome)}... você deve estudar mais, você foi reprovado.`;
	}

	return (
		<Text style={styles.titulo2}>
			{retorno}
		</Text>
	);
};


export default Aprovado;