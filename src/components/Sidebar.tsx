import React, { useRef } from 'react';
import { DrawerLayoutAndroid, View, Text, Pressable, Image } from 'react-native';
import { sidebar_styles } from '../styles/sidebar-styles';

const Sidebar = (props: any) => {
	const drawer = useRef<DrawerLayoutAndroid>(null);

	const handleLogout = () => {
		props.navigation.navigate('TelaLoginAcad');
	};

	const navigationView = () => (
		<View style={[sidebar_styles.sidebar]}>
			<View>

				<View
					style={sidebar_styles.profileContainer}>
					<Image
						source={{ uri: 'https://github.com/MacKathleen.png' }}
						style={sidebar_styles.profileImage}
					/>
					<View>
						<Text style={sidebar_styles.profileName}>Kathleen Machado</Text>
					</View>
				</View>

				<View
					style={sidebar_styles.sidebarButtonContainer}>
					<Pressable onPress={() => props.navigation.navigate('TelaPrincipalAcad')}>
						<Text style={sidebar_styles.textoSidebar}>Início</Text>
					</Pressable>
					<View style={sidebar_styles.divider}/>

					<Pressable onPress={() => props.navigation.navigate('TelaConsultarTreinoAcad')}>
						<Text style={sidebar_styles.textoSidebar}>Treinos</Text>
					</Pressable>
					<View style={sidebar_styles.divider}/>

					<Pressable onPress={() => props.navigation.navigate('TelaConsultarAlunoAcad')}>
						<Text style={sidebar_styles.textoSidebar}>Alunos</Text>
					</Pressable>
					<View style={sidebar_styles.divider}/>

					<Pressable onPress={() => props.navigation.navigate('TelaCadastroNoticiaAcad')}>
						<Text style={sidebar_styles.textoSidebar}>Notícias</Text>
					</Pressable>
					<View style={sidebar_styles.divider}/>

					<Pressable onPress={handleLogout}>
						<Text style={sidebar_styles.texto_sair}>Logout</Text>
					</Pressable>
				</View>
			</View>


		</View>
	);

	return (
		<DrawerLayoutAndroid
			ref={drawer}
			drawerWidth={250}
			drawerPosition="left"
			renderNavigationView={navigationView}
		>
			<View style={{ flex: 1 }}>
				<Pressable
					style={{ position: 'absolute', top: 40, left: 20, zIndex: 1 }}
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
