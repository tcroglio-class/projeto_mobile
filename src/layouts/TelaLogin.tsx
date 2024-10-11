import React from 'react';
import { View } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import Login from '../components/Login';
import { styles } from '../styles/login-styles';

const TelaLogin = (props: PrincipalProps) => {
    return (
        <View style={styles.tela}>
            <Login />
        </View>
    );
}

export default TelaLogin;
