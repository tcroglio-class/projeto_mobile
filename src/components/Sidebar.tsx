import React, { useRef } from 'react';
import { DrawerLayoutAndroid, View, Text, Pressable, Image } from 'react-native';
import { styles } from '../styles/styles';

const Sidebar = (props: any) => {
	const drawer = useRef<DrawerLayoutAndroid>(null);

	const handleLogout = () => {
		props.navigation.navigate('Login');
	};

	const navigationView = () => (
		<View style={[styles.container, { backgroundColor: 'black', padding: 20 }]}>
			<View
				style={styles.profileContainer}>
				<Image
					source={{ uri: 'https://github.com/tcroglio.png' }} // Altere para a URL da imagem do usuário
					style={styles.profileImage}
				/>
				<View>
					<Text style={[styles.texto_botao, { color: '#FFFFFF', marginTop: 30 }]}>Nome do Usuário</Text>
				</View>
			</View>

			<View style={[styles.sidebar, { backgroundColor: 'black', }]}>

			<Pressable onPress={() => props.navigation.navigate('TelaElementos')}>
				<Text style={[styles.texto_botao, { color: '#FFFFFF', marginBottom:20  }]}>Início</Text>
			</Pressable>
			<Pressable onPress={() => props.navigation.navigate('TelaCadastroProduto')}>
				<Text style={[styles.texto_botao, { color: '#FFFFFF', marginBottom:20  }]}>Treinos</Text>
			</Pressable>
			<Pressable onPress={() => props.navigation.navigate('TelaConsProduto')}>
				<Text style={[styles.texto_botao, { color: '#FFFFFF', marginBottom:20 }]}>Alunos</Text>
			</Pressable>
			<Pressable onPress={() => props.navigation.navigate('TelaConsProduto')}>
				<Text style={[styles.texto_botao, { color: '#FFFFFF', marginBottom:20 }]}>Notícias</Text>
			</Pressable>
			
			</View>

			<Pressable onPress={handleLogout}>
				<Text style={[styles.texto_sair, { color: 'red', marginBottom:20 }]}>Deslogar </Text>
			</Pressable>
		</View >
	);

	return (
		<DrawerLayoutAndroid
			ref={drawer}
			drawerWidth={300}
			drawerPosition="left"
			renderNavigationView={navigationView}
		>
			<View style={{ flex: 1 }}>
				<Pressable
					style={{ position: 'absolute', top: 40, left: 10 }}
					onPress={() => drawer.current?.openDrawer()}
				>
					<Text style={{ fontSize: 30 }}>☰</Text>
				</Pressable>
				{props.children}
			</View>
		</DrawerLayoutAndroid>
	);
};

export default Sidebar;
