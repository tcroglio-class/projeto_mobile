import { PreventRemoveProvider } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { styles } from '../styles/styles';

type CalculoProps = {
	valor1: number;
	valor2: number;
}


const ExemploCalculo = (props: CalculoProps) => {

	function somar() {
		return props.valor1 + props.valor2;
	}

	function subtrair() {
		return props.valor1 - props.valor2;
	}

	function dividir() {
		if (props.valor1 != 0) {
			return props.valor1 / props.valor2;

		} else {
			return 0;

		}
	}

	function multiplicar() {
		return props.valor1 * props.valor2;
	}

	return (

		<>
			<Text style={styles.titulo2}>
				Somar: {somar()}
			</Text>
			<Text style={styles.titulo2}>
				Subtrair: {subtrair()}
			</Text>
			<Text style={styles.titulo2}>
				Dividir: {dividir()}
			</Text>
			<Text style={styles.titulo2}>
				Multiplicar: {multiplicar()}
			</Text>
		</>

	);
};


export default ExemploCalculo;