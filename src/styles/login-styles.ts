import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	tela: {
		flex: 1,
		backgroundColor: '#011f37'
	},
	titulo1: {
		fontSize: 40,
		fontWeight: 'bold',
		color: 'white'
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
		backgroundColor: '#00a1f6',
		paddingVertical: 10,
		paddingHorizontal: 10,
		marginTop: 20,
		borderRadius: 6
	},
	texto_botao: {
		fontSize: 15,
		color: 'white',
		textAlign: 'center'
	},
	caixa_texto: {
		color: 'white',
		paddingLeft: 10,
		fontSize: 16,
		borderWidth: 1,
		borderRadius: 4,
		borderColor: '#00a1f6',
		margin: 3,
	},
	imagem_250: {
		width: 250,
		height: 250
	}
});

export { styles };