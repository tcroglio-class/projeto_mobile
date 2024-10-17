import React from 'react';
import { ElementoProps } from '../navigation/HomeNavigator';
import { Pressable, Text, View } from 'react-native';
import ExemploCalculo from '../components/ExemploCalculo';
import ExemploEvento from '../components/ExemploEvento';
import ExemploState from '../components/ExemploState';
import ExemploConstrucaoCondicao from '../components/ExemploConstrucaoCondicao';
import ExemploStylesView from '../components/ExemploStyleView';

const TelaElemento = (props: ElementoProps) => {

	return (
		<>
			<View style={{ flex: 1, padding: 10, gap: 20, marginTop: 230 }}>

				{
					props.route.params.elemento == 1 ?
						<ExemploCalculo valor1={1} valor2={2}></ExemploCalculo>
						:
						(props.route.params.elemento == 2 ?
							<ExemploEvento></ExemploEvento>
							:
							(props.route.params.elemento == 3 ?
								<ExemploState></ExemploState>
								:
								(props.route.params.elemento == 4 ?
									<ExemploStylesView></ExemploStylesView>
									:
									(props.route.params.elemento == 5 ?
										<ExemploConstrucaoCondicao></ExemploConstrucaoCondicao>
										:
										<></>
									)
								)
							)
						)
				}

				<Pressable
					style={{ backgroundColor: 'green', padding: 5, borderRadius: 10, marginTop: 300 }}
					onPress={() => { props.navigation.goBack() }}
				>
					<Text style={{ fontSize: 30, textAlign: 'center' }}>Voltar</Text>
				</Pressable>
			</View>
		</>
	);
}

export default TelaElemento;