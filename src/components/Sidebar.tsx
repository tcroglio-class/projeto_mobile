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
					<Text style={styles.textoSidebar}>Nome do Usuário</Text>
				</View>
			</View>

			<View style={[styles.sidebar, { backgroundColor: 'black', }]}>

				<Pressable onPress={() => props.navigation.navigate('TelaElementos')}>
					<Text style={styles.textoSidebar}>Início</Text>
				</Pressable>
				<Pressable onPress={() => props.navigation.navigate('TelaCadastroProduto')}>
					<Text style={styles.textoSidebar}>Treinos</Text>
				</Pressable>
				<Pressable onPress={() => props.navigation.navigate('TelaConsProduto')}>
					<Text style={styles.textoSidebar}>Alunos</Text>
				</Pressable>
				<Pressable onPress={() => props.navigation.navigate('TelaConsProduto')}>
					<Text style={styles.textoSidebar}>Notícias</Text>
				</Pressable>

			</View>

			<Pressable onPress={handleLogout}>
				<Text style={[styles.texto_sair, { color: 'red', marginBottom: 20 }]}>Deslogar </Text>
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
				style={{ position: 'absolute', top: 40, left: 10, zIndex: 1 }}
				onPress={() => drawer.current?.openDrawer()}
			>
				<Image
					source={require('../images/menu.png')}
					style={{ width: 30, height: 30 }}
				/>
			</Pressable>
			{props.children}
		</View>
	</DrawerLayoutAndroid>
);
};

export default Sidebar;
