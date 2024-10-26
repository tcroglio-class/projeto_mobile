import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	tela: {
		flex: 1,
		backgroundColor: 'black'
		
	},
	titulo1: {
		fontSize: 30,
		fontWeight: 'bold',
		color: '#fbec5d',
		textAlign:'center'

	},
	content: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 100
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
		backgroundColor: '#fbec5d',
		paddingVertical: 10,
		paddingHorizontal: 10,
		marginTop: 90,
		borderRadius: 6,
		width: 150
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
		top: 20,
		right: 20,
		width: 70, // ajuste conforme necessário
		height: 70, // ajuste conforme necessário
		resizeMode: 'contain', // mantém a proporção
	},

});

export { styles };