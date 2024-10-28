import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaLoginAcad from "../layouts/TelaLoginAcad";
import TelaPrincipalAcad from "../layouts/TelaPrincipalAcad";
import TelaCadastroAlunoAcad from "../layouts/TelaCadastroAlunoAcad";
import TelaEditarAlunoAcad from "../layouts/TelaEditarAlunoAcad";
import TelaConsultarAlunoAcad from "../layouts/TelaConsultarAlunoAcad";
import TelaCadastroTreinoAcad from "../layouts/TelaCadastroTreinoAcad";
import TelaConsultarTreinoAcad from "../layouts/TelaConsultarTreinoAcad";
import TelaCadastroNoticiaAcad from "../layouts/TelaCadastroNoticiaAcad";
import TelaEditarTreinoAcad from "../layouts/TelaEditarTreinoAcad";


type RootStackParamList = {
    TelaLoginAcad: undefined;
    TelaPrincipalAcad: { userLogado: string };
    TelaCadastroAlunoAcad: undefined;
    TelaEditarAlunoAcad: { id: string };
    TelaEditarTreinoAcad: { id: string };
    TelaConsultarAlunoAcad: undefined;
    TelaCadastroTreinoAcad: undefined;
    TelaConsultarTreinoAcad: undefined;
    TelaCadastroNoticiaAcad: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="TelaLoginAcad"
            screenOptions={{ headerShown: false }}>

            <Stack.Screen name="TelaLoginAcad" component={TelaLoginAcad} />

            <Stack.Screen name="TelaPrincipalAcad" component={TelaPrincipalAcad} />

            <Stack.Screen name="TelaCadastroAlunoAcad" component={TelaCadastroAlunoAcad} />

            <Stack.Screen name="TelaEditarAlunoAcad" component={TelaEditarAlunoAcad} />

            <Stack.Screen name="TelaConsultarAlunoAcad" component={TelaConsultarAlunoAcad} />

            <Stack.Screen name="TelaCadastroTreinoAcad" component={TelaCadastroTreinoAcad} />

            <Stack.Screen name="TelaConsultarTreinoAcad" component={TelaConsultarTreinoAcad} />

            <Stack.Screen name="TelaCadastroNoticiaAcad" component={TelaCadastroNoticiaAcad} />

            <Stack.Screen name="TelaEditarTreinoAcad" component={TelaEditarTreinoAcad} />

        </Stack.Navigator>
    );
}

type LoginAcadProps = NativeStackScreenProps<RootStackParamList,
    'TelaLoginAcad'>;

type PrincipalAcadProps = NativeStackScreenProps<RootStackParamList,
    'TelaPrincipalAcad'>;

type CadastroAlunoAcadProps = NativeStackScreenProps<RootStackParamList,
    'TelaCadastroAlunoAcad'>;

type EditarAlunoAcadProps = NativeStackScreenProps<RootStackParamList,
    'TelaEditarAlunoAcad'>;

type EditarTreinoAcadProps = NativeStackScreenProps<RootStackParamList,
    'TelaEditarTreinoAcad'>;

type ConsultarAlunoAcadProps = NativeStackScreenProps<RootStackParamList,
    'TelaConsultarAlunoAcad'>;

type CadastroTreinoAcadProps = NativeStackScreenProps<RootStackParamList,
    'TelaCadastroTreinoAcad'>;

type ConsultarTreinoAcadProps = NativeStackScreenProps<RootStackParamList,
    'TelaConsultarTreinoAcad'>;

type CadastroNoticiaAcadProps = NativeStackScreenProps<RootStackParamList,
    'TelaCadastroNoticiaAcad'>;



export default HomeNavigator;
export type {
    LoginAcadProps,
    PrincipalAcadProps,
    CadastroAlunoAcadProps,
    EditarAlunoAcadProps,
    ConsultarAlunoAcadProps,
    CadastroTreinoAcadProps,
    ConsultarTreinoAcadProps,
    CadastroNoticiaAcadProps,
    EditarTreinoAcadProps,
};