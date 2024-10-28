import { StyleSheet } from "react-native";

const alunostyles = StyleSheet.create({

	containerConsultar: {
		marginTop: 90,
	},

	listContent: {
		paddingHorizontal: 20

	},

	titulo: {
		fontSize: 30,
		fontWeight: 'bold',
		color: '#d9b52b',
		textAlign: 'center',
		marginBottom: 10
	},

	card: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white',
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 10,
		marginVertical: 10,
	},

	dados_card: {
		flex: 1,
		marginBottom: 10,
	},

	textoNomeAluno: {
		fontWeight: 'bold',
		fontSize: 25,
		color: 'black'
	},

	botao: {
		color: 'white',
		justifyContent: 'center',
		backgroundColor: '#d9b52b',
		paddingVertical: 10,
		paddingHorizontal: 10,
		margin: 15,
		marginTop: 10,
		borderRadius: 6,
		width: 250
	},

	texto_botao: {
		fontSize: 13,
		color: 'black',
		textAlign: 'center'
	},

	botaoDeletar: {
		backgroundColor: 'red',
		padding: 10,
		borderRadius: 5,
		alignSelf: 'flex-end', // Alinha o botão à direita
	},
	textoBotaoDeletar: {
		color: 'white',
		fontWeight: 'bold',
	},

	


});

export { alunostyles };