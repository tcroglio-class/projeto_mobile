import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	tela: {
		flex: 1,
		backgroundColor: '#011f37',
	},
	texto_titulo: {
		fontSize: 40,
		color: '#00a1f6'
	},
	content: {
		marginTop: 40,
		flex: 1,
		alignItems: 'center',
	},
	inputContent: {
		width: '80%',
		gap: 5
	},
	buttonContent: {
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
	},
	imagem_150: {
		width: 150,
		height: 150
	},
	texto_label: {
		color: 'white',
		marginLeft: 8,
		fontSize: 15
	},
	input_flex: {
		display: 'flex',
		flexDirection: 'row',
		width: 100,
		alignItems: 'center',
		gap: 10
	}, 
	pacienteContainer: {
		borderColor: '#00a1f6',
		borderWidth: 1, 
		borderRadius: 10,
		padding: 10
	},
	texto_fila: {
		color: 'white'
	},
	fila_content: {
		marginTop: 10,
		marginBottom: 10,
		display: 'flex',
		gap: 9
	}, 
	texto_risco: {
		fontSize: 20,
		textAlign: 'center'
	}
});

export { styles };