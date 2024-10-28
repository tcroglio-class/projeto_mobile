import React, { useEffect, useState } from 'react';
import { PrincipalAcadProps } from '../navigation/HomeNavigator';
import { Image, Text, View } from 'react-native';
import { styles } from '../styles/styles';
import Sidebar from '../components/Sidebar';

import firestore from "@react-native-firebase/firestore";
import { Noticia } from '../types/Noticia';


const TelaPrincipalAcad = (props: PrincipalAcadProps) => {
	const [titulo, setTitulo] = useState('');
	const [corpo, setCorpo] = useState('');
	const [noticias, setNoticias] = useState([] as Noticia[]);

	useEffect(() => {
		const subscribe = firestore()
			.collection('noticias')
			.onSnapshot(querySnapshot => {
				const data = querySnapshot.docs.map(doc => {
					const noticiaData = doc.data() as Noticia;
					return {
						...noticiaData,
					}
				}) as Noticia[];
				setTitulo(data[0].titulo);
				setCorpo(data[0].mensagem);
			});
		return () => subscribe();
	}, []);


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

				<View style={styles.noticias}>
					<Text style={[styles.titulo1, { color: '#fbec5d', textAlign: 'center', }]}>{titulo}</Text>
					<Text style={[styles.titulo2, { color: '#fbec5d', textAlign: 'center', }]}>{corpo}</Text>
				</View>
			</View>
		</Sidebar>
	);
}

export default TelaPrincipalAcad;