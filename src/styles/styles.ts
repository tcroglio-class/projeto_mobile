import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#2E2E2E'
    },

    titulo1: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black'
    },

    titulo2: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    },

    botao: {
        justifyContent: 'center',
        backgroundColor: '#d9b52b',
        paddingVertical: 20,
        paddingHorizontal: 5,
        marginTop: 320,
        borderRadius: 90
    },

    texto_botao: {
        fontSize: 20,
        color: 'blacK',
        textAlign: 'center',
    },

    caixa_texto: {
        color: 'black',
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 4,
        margin: 3
    },

    largura_70: {
        width: '70%'
    },

    imagem_200: {
        width: 200,
        height: 200
    },

    click: {
        opacity: 50
    },

    centralizar: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    container: {
        flex: 1,
    },

    noticias: {
        padding: 10,
        gap: 20,
        marginTop: 100,
    },

    telaPrincipal: {
        backgroundColor: 'black'

    },

    princi: {
        flex: 1,
        backgroundColor: 'black',
    },

    imagem: {
        position: 'absolute',
        top: 30,
        right: 30,
        width: 70,
        height: 70,
    },

    botao_flutuante: {
        position: 'absolute',
        bottom: 30,
        left: '50%',
        width: 200,
        marginLeft: -100,
        zIndex: 1000,
    },

    bold: {
        fontWeight: 'bold'
    }
});

export { styles };