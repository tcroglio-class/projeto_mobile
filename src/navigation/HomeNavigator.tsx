import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaPrincipal from "../layouts/TelaPrincipal";
import TelaLogin from "../layouts/TelaLogin";
import TelaElemento from "../layouts/TelaElemento";
import TelaElementos from "../layouts/TelaElementos";
import TelaCadastroUsuario from "../layouts/TelaCadastroUsuario";
import TelaCadastroProduto from "../layouts/TelaCadastroProduto";
import TelaConsProduto from "../layouts/TelaConsProduto";
import TelaAlterarProduto from "../layouts/TelaAlterarProduto";
import TelaLoginAcad from "../layouts/TelaLoginAcad";
import TelaPrincipalAcad from "../layouts/TelaPrincipalAcad";

type RootStackParamList = {
    TelaPrincipal: { texto: string };
    TelaLogin: undefined;
    TelaElemento: { elemento: number };
    TelaElementos: undefined;
    TelaCadastroUsuario: undefined;
    TelaCadastroProduto: undefined;
    TelaConsProduto: undefined;
    TelaAlterarProduto: { id: string };
    TelaLoginAcad: undefined;
    TelaPrincipalAcad: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="TelaPrincipalAcad"
            screenOptions={{ headerShown: false }}>

            <Stack.Screen name="TelaLoginAcad" component={TelaLoginAcad} />

            <Stack.Screen name="TelaPrincipalAcad" component={TelaPrincipalAcad} />


            {/* acima disso é da academia */}

            <Stack.Screen name="TelaLogin" component={TelaLogin} />

            <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />

            <Stack.Screen name="TelaElementos" component={TelaElementos} />

            <Stack.Screen name="TelaElemento" component={TelaElemento} />

            <Stack.Screen name="TelaCadastroUsuario" component={TelaCadastroUsuario} />

            <Stack.Screen name="TelaCadastroProduto" component={TelaCadastroProduto} />

            <Stack.Screen name="TelaConsProduto" component={TelaConsProduto} />

            <Stack.Screen name="TelaAlterarProduto" component={TelaAlterarProduto} />


        </Stack.Navigator>
    );
}

type PrincipalProps = NativeStackScreenProps<RootStackParamList,
    'TelaPrincipal'>;

type LoginProps = NativeStackScreenProps<RootStackParamList,
    'TelaLogin'>;

type ElementoProps = NativeStackScreenProps<RootStackParamList,
    'TelaElemento'>;

type ElementosProps = NativeStackScreenProps<RootStackParamList,
    'TelaElementos'>;

type CadastroUsuarioProps = NativeStackScreenProps<RootStackParamList,
    'TelaCadastroUsuario'>;
    
type CadastrarProdutoProps = NativeStackScreenProps<RootStackParamList,
    'TelaCadastroProduto'>;
    
type AlterarProdutoProps = NativeStackScreenProps<RootStackParamList,
    'TelaAlterarProduto'>;
    
type ConsultarProdutosProps = NativeStackScreenProps<RootStackParamList,
    'TelaConsProduto'>;

type LoginAcadProps = NativeStackScreenProps<RootStackParamList,
    'TelaLoginAcad'>;

type PrincipalAcadProps = NativeStackScreenProps<RootStackParamList,
    'TelaPrincipalAcad'>;


export default HomeNavigator;
export type {
    PrincipalProps,
    LoginProps,
    ElementoProps,
    ElementosProps,
    CadastroUsuarioProps,
    CadastrarProdutoProps,
    ConsultarProdutosProps,
    AlterarProdutoProps,
    LoginAcadProps,
    PrincipalAcadProps,
};