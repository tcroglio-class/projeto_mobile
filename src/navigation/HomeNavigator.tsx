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
import TelaCadastroAlunoAcad from "../layouts/TelaCadastroAlunoAcad";
import TelaEditarAlunoAcad from "../layouts/TelaEditarAlunoAcad";
import TelaConsultarAlunoAcad from "../layouts/TelaConsultarAlunoAcad";

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
    TelaCadastroAlunoAcad: undefined;
    TelaEditarAlunoAcad: { id: string };
    TelaConsultarAlunoAcad: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="TelaPrincipalAcad"
            screenOptions={{ headerShown: false }}>

            <Stack.Screen name="TelaLoginAcad" component={TelaLoginAcad} />

            <Stack.Screen name="TelaPrincipalAcad" component={TelaPrincipalAcad} />

            <Stack.Screen name="TelaCadastroAlunoAcad" component={TelaCadastroAlunoAcad} />

            <Stack.Screen name="TelaEditarAlunoAcad" component={TelaEditarAlunoAcad} />

            <Stack.Screen name="TelaConsultarAlunoAcad" component={TelaConsultarAlunoAcad} />


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
    
type CadastroAlunoAcadProps = NativeStackScreenProps<RootStackParamList,
    'TelaCadastroAlunoAcad'>;

type EditarAlunoAcadProps = NativeStackScreenProps<RootStackParamList,
    'TelaEditarAlunoAcad'>;

type ConsultarAlunoAcadProps = NativeStackScreenProps<RootStackParamList,
    'TelaConsultarAlunoAcad'>;


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
    CadastroAlunoAcadProps,
    EditarAlunoAcadProps,
    ConsultarAlunoAcadProps,
};