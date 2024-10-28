import { StyleSheet } from "react-native";

const treinostyles = StyleSheet.create({

	containerConsultar: {
		marginTop: 90,
	},

	containerEditarCadastrar: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	titulo: {
		fontSize: 30,
		fontWeight: 'bold',
		color: '#d9b52b',
		textAlign: 'center',
		marginBottom: 10
	},

	gridContainer: {
		justifyContent: 'space-between',
		paddingHorizontal: 10,
	},

	gridItem: {
		flex: 1,
		margin: 10,
		maxWidth: '48%',
	},

	card: {
		backgroundColor: '#fff',
		borderRadius: 10,
		padding: 15,
		elevation: 3,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.3,
		shadowRadius: 1,
	},

	dados_card: {
		flex: 1,
		marginBottom: 10,
	},

	nomeAluno: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'black',
		marginBottom: 5,
	},

	textoTipo: {
		color: 'black',
		fontSize: 16,
		marginBottom: 5,
	},

	textoDia: {
		textAlign: 'center',
		letterSpacing: 10,
		color: 'black',
		marginVertical: 5,
		fontSize: 16,
	},

	inputContent: {
		width: '80%',
		gap: 5
	},

	caixa_texto: {
		color: 'white',
		fontSize: 16,
		borderWidth: 1,
		borderRadius: 4,
		borderColor: '#fbec5d',
		marginHorizontal: 15,
		marginVertical: 10,
	},

	titulo2: {
		fontSize: 20,
		color: '#d9b52b',
		fontWeight: 'bold',
		marginLeft: 15,
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
	
	botaoFinal2: {
		justifyContent: 'center',
		backgroundColor: '#d9b52b',
		paddingVertical: 10,
		paddingHorizontal: 10,
		marginTop: 30,
		borderRadius: 6,
		width: 150
	},



});

export { treinostyles };