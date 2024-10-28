import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;


const sidebar_styles = StyleSheet.create({
	sidebar: {
		backgroundColor: 'white',
		width: 250,
		height: screenHeight
	},

	profileContainer: {
		paddingHorizontal: 20,
		paddingTop: 40,
		flexDirection: 'row',
		alignItems: 'center',
	},

	profileImage: {
		width: 50,
		height: 50,
		borderRadius: 25,
		marginRight: 10,
	},

	profileName: {
		fontSize: 18,
		color: '#d9b52b',
		fontWeight: 'bold',
	},

	sidebarButtonContainer: {
		marginTop: 30
	},

	textoSidebar: {
		marginLeft: 20,
		fontSize: 25,
		color: '#d9b52b',
		fontWeight: 'bold',
	},

	divider: {
		height: 1,
		backgroundColor: 'grey',
		marginVertical: 10,
	},

	texto_sair: {
		marginLeft: 20,
		marginTop: 350,
		fontSize: 20,
		fontWeight: 'bold',
		color: 'red'
	},
});

export { sidebar_styles };