import React , {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {ImovelSelector} from "./ImovelSelector";
import {Locatario} from "../Model/Locatario";
import LocatarioService from "../services/LocatarioService";
import ImovelService from "../services/ImovelService";

const CadastroLocatario = ({navigation}) => {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState(null);
    const [dataDeNascimento, setDataDeNascimento] = useState(null);
    const [rendaMensal, setRendaMensal] = useState(0);
    const [imovelLocado, setImovelLocado] = useState(null);
    const [diaVencimento, setDiaVencimento] = useState(null);
    const [inicioContrato, setInicioContrato] = useState(null);
    const [fimContrato, setFimContrato] = useState(null);

    const submit = async () => {

        try {
            const locatario = new Locatario(null, nome, cpf, dataDeNascimento, rendaMensal, diaVencimento, inicioContrato, fimContrato, imovelLocado)

            const imovel = await ImovelService.findById(imovelLocado)

            await LocatarioService.addData(locatario)

            imovel.locado = 'Sim'
            imovel.locador = locatario.nome
            await ImovelService.updateById(imovel)
            console.warn("Locador inserido com sucesso id: ")
            navigation.navigate("Lista de Locadores")
        }catch (e) {
            console.error("Erro ao inserir locador, ", e)
        }

    }


    return (
        <View>
            <Text>Nome</Text>
            <TextInput style={style.input} onChangeText={setNome}/>
            <Text>CPF</Text>
            <TextInput style={style.input} onChangeText={setCpf} keyboardType='numeric'/>
            <Text>Data de Nascimento</Text>
            <TextInput style={style.input} onChangeText={setDataDeNascimento} keyboardType='date'/>
            <Text>Renda Mensal</Text>
            <TextInput style={style.input} onChangeText={setRendaMensal} keyboardType='numeric'/>
            <Text>Dia de vencimento</Text>
            <TextInput style={style.input} onChangeText={setDiaVencimento} keyboardType='date'/>
            <Text>Inicio do contrato</Text>
            <TextInput style={style.input} onChangeText={setInicioContrato} keyboardType='date'/>
            <Text>Fim do constrato</Text>
            <TextInput style={style.input} onChangeText={setFimContrato} keyboardType='date'/>
            <ImovelSelector initialValue={imovelLocado} setSelectedValue={setImovelLocado}/>
            <Button title ="Salvar" onPress={submit}/>
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        marginBottom: 10,
        padding: 5
    }
});

export default CadastroLocatario;