import React from 'react';
import { PrincipalAcadProps } from '../navigation/HomeNavigator';
import { Image, Text, View } from 'react-native';
import { styles } from '../styles/styles';
import Sidebar from '../components/Sidebar';


const TelaPrincipalAcad = (props: PrincipalAcadProps) => {

	return (
		<Sidebar navigation={props.navigation} >
			<View style={styles.tela}>
				<Image
					source={require('../images/logoAcademia.png')}
					style={styles.imagem}
				/>

				<View style={styles.noticias}>
					<Text style={[styles.titulo1, { color: '#fbec5d', textAlign: 'center', }]}>INÍCIO</Text>
					<Text style={[styles.titulo2, { color: '#fbec5d', textAlign: 'center', }]}>Notícias</Text>
				</View>
			</View>
		</Sidebar>
	);
}

export default TelaPrincipalAcad;