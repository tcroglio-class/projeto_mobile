import React from 'react';
import { PrincipalAcadProps } from '../navigation/HomeNavigator';
import { Pressable, Text, View } from 'react-native';
import { styles } from '../styles/styles';
import Sidebar from '../components/Sidebar';


const TelaPrincipalAcad = (props: PrincipalAcadProps) => {
	function constroiTela() {
		props.navigation.navigate(
			'TelaCadastroAlunoAcad',
		)
	}

	return (
		<Sidebar navigation={props.navigation}>
			<View style={{ padding: 10, gap: 20, marginTop: 230 }}>
				<Text style={[styles.texto_botao, { color: 'black' }]}>NOTICIAS</Text>
				<Pressable
					style={{ backgroundColor: 'green', padding: 5, borderRadius: 10 }}
					onPress={() => { constroiTela() }}
				>
					<Text style={{ fontSize: 30, textAlign: 'center' }}>Cadastrar aluno</Text>
				</Pressable>

			</View>
		</Sidebar>
	);
}

export default TelaPrincipalAcad;