import { StyleSheet } from "react-native";
import Sidebar from "../components/Sidebar";
import TelaPrincipal from "../layouts/TelaPrincipal";

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#FFFACD'
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
        backgroundColor: '#fbec5d',
        paddingVertical: 20,
        paddingHorizontal:5,
        marginTop: 350,
        borderRadius: 100
    },

    texto_botao: {
        fontSize: 20,
        color: 'blacK',
        textAlign:'center',

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
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    centralizar: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
  
    container: {
        flex: 1,
    },

    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },

    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
    },


    sidebar: {
        marginBottom: 370,
    },

    texto_sair: {
        fontSize: 20,

    },

    noticias: {
 
        padding: 10,
        gap: 20,
        marginTop: 100,
        backgroundColor: "black"

    },

    telaPrincipal:{
        backgroundColor: 'black'

    },

    princi:{
        flex: 1,
        backgroundColor:'black',
    },

    imagem:{
        position: 'absolute', // Posiciona a imagem em relação à View pai
        top: 30, // Distância do topo
        right: 30, // Distância da direita
        width: 70, // Largura da imagem
        height: 70, // Altura da imagem
    }


});

export { styles };