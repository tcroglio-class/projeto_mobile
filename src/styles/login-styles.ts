import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	tela: {
		flex: 1,
		backgroundColor: '#2E2E2E'
		
	},
	titulo1: {
		fontSize: 27,
		fontWeight: 'bold',
		color: '#d9b52b',
		textAlign:'center',
		marginBottom: 20,

	},

	titulo2:{
		fontSize: 20,
		color: '#d9b52b',
		fontWeight: 'bold',


	},
	content: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 100,
	
	},
	inputContent: {
		width: '80%',
		gap: 5
	},
	buttonContent: {
		marginTop: 220,
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 25,
		width: '100%',
		paddingHorizontal: 20,
		marginVertical: 10
	},
	botao: {
		justifyContent: 'center',
		backgroundColor: '#d9b52b',
		paddingVertical: 10,
		paddingHorizontal: 10,
		marginTop: 90,
		borderRadius: 6,
		width: 150
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

	botao2: {
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
		fontSize: 15,
		color: 'black',
		textAlign: 'center'
	},
	caixa_texto: {
		color: '#fbec5d',
		paddingLeft: 10,
		fontSize: 16,
		borderWidth: 1,
		borderRadius: 4,
		borderColor: '#fbec5d',
		margin: 15,
		
		
	},
	imagem_250: {
		width: 250,
		height: 250
	},
	imagem_150: {
		width: 150,
		height: 150
	},

	imagem: {
		position: 'absolute',
		top: -80,
		right: 30,
		width: 70, // ajuste conforme necessário
		height: 70, // ajuste conforme necessário
		resizeMode: 'contain', // mantém a proporção
	},

});

export { styles };