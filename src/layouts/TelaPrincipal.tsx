import React from 'react';
import { PrincipalProps } from '../navigation/HomeNavigator';
import ListaProdutos from '../components/ListaProdutos';

const TelaPrincipal = (props: PrincipalProps) => {

    let ListaDeProdutos

    return (

        <ListaProdutos listaProdutos={ListaDeProdutos}>

    );
}

export default TelaPrincipal;