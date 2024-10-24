import React from 'react';
import { PrincipalAcadProps } from '../navigation/HomeNavigator';
import { Pressable, Text, View } from 'react-native';
import { styles } from '../styles/styles';
import Sidebar from '../components/Sidebar';


const TelaPrincipalAcad = (props: PrincipalAcadProps) => {


	function constroiTela(elemento: number) {
		if (elemento == 1) {
			props.navigation.navigate(
				'TelaElementos'
			)
		} else if (elemento == 2) {
			props.navigation.navigate(
				'TelaCadastroProduto',
			)
		} else if (elemento == 3) {
			props.navigation.navigate(
				'TelaConsProduto',
			)
		}
	}

	return (
		<Sidebar navigation={props.navigation}>
			<View style={{ padding: 10, gap: 20, marginTop: 230 }}>
				<Text style={[styles.texto_botao, { color: 'black' }]}>NOTICIAS</Text>
			</View>
		</Sidebar>
	);
}

export default TelaPrincipalAcad;