import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";


type listaProducts = {
	listaDePessoas: string[]
}

const ListaProdutos = (props: listaProducts) => {

	return (
		<FlatList data={props.listaDePessoas}
			renderItem={({ item }) => {
				return (
					<View>
						<Text style={styles.item}>
							Nome: {item}
						</Text>
						
						<Text style={styles.item}>
							Nome: {item}
						</Text>

						<Text style={styles.item}>
							Nome: {item}
						</Text>

					</View>
				)

			}}
		/>
	)
}

type ItemProps = {
	nome: string
}

const ItemSimples = (props: ItemProps) => {
	return (
		<View>
			<Text style={styles.item2}>
				{props.nome}
			</Text>
		</View>
	)
}

export default ListaProdutos;


const styles = StyleSheet.create({
	item: {
		padding: 10,
		fontSize: 25,
		color: 'red',
		borderWidth: 2,
		borderColor: 'green',
		borderRadius: 10,
		margin: 5
	},
	item2: {
		padding: 10,
		fontSize: 25,
		color: 'green',
		borderWidth: 2,
		borderColor: 'blue',
		borderRadius: 10,
		margin: 10
	},
})