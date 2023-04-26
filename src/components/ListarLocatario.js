import React from "react";
import { View, Text, StyleSheet } from "react-native";


export const ListarLocatario = ({navigation}) => {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>Nome: {locatario.nome}</Text>
            <Text style={styles.title}>CPF: {locatario.cpf}</Text>
            <Text style={styles.title}>Data de nascimento: {locatario.dataDeNascimento}</Text>
            <Text style={styles.title}>Renda mensal: {locatario.rendaMensal}</Text>
            <Text style={styles.title}>Imovel está locado: {locatario.imovelLocado}</Text>
            <Text style={styles.title}>Dia de vencimento: {locatario.diaVencimento}</Text>
            <Text style={styles.title}>Inicio do contrato: {locatario.inicioContrato}</Text>
            <Text style={styles.title}>Fim do contrato: {locatario.fimContrato}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    item: {
        backgroundColor: 'green',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,

    },
    title: {
        color: "blue",
        fontSize: 18,
    },
});