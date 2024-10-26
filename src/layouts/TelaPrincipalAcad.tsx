import React from 'react';
import { PrincipalAcadProps } from '../navigation/HomeNavigator';
import { Image, Pressable, Text, View } from 'react-native';
import { styles } from '../styles/styles';
import Sidebar from '../components/Sidebar';


const TelaPrincipalAcad = (props: PrincipalAcadProps) => {
	function constroiTela() {
		props.navigation.navigate(
			'TelaCadastroAlunoAcad',
		)
	}

	return (
		<View style={styles.princi}>

			{/* <Pressable onPress={() => props.navigation.openDrawer()}>
				<Image
					source={require('../images/menu2.png')} // Ajuste o caminho conforme necessário
					style={styles.imagemMenu}
				/>
			</Pressable> */}
			<Image
				source={require('../images/logoAcademia.png')} // Ajuste o caminho conforme necessário
				style={styles.imagem}
			/>

			<Sidebar navigation={props.navigation} >
				<View style={styles.noticias}>
					<Text style={[styles.titulo1, { color: '#fbec5d', textAlign: 'center', }]}>NOTÍCIAS</Text>
				</View>

				< View>
					<Pressable
						style={styles.botao}
						onPress={() => { constroiTela() }}
					>
						<Text style={styles.texto_botao}>CADASTRAR ALUNO</Text>
					</Pressable>
				</View>
			</Sidebar>
		</View>

	);
}

export default TelaPrincipalAcad;