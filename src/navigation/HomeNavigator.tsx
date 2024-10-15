import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaPrincipal from "../layouts/TelaPrincipal";
import TelaLogin from "../layouts/TelaLogin";

type RootStackParamList = {
    TelaPrincipal: {texto: string};
    TelaLogin: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="TelaLogin"
            screenOptions={{ headerShown: false }}>
                
            <Stack.Screen name="TelaLogin" component={TelaLogin} />

            <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />

        </Stack.Navigator>
    );
}

type PrincipalProps = NativeStackScreenProps<RootStackParamList,
    'TelaPrincipal'>;

type LoginProps = NativeStackScreenProps<RootStackParamList,
    'TelaLogin'>;

export default HomeNavigator;
export type {
    PrincipalProps,
    LoginProps
};