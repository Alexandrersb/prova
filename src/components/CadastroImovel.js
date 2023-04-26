import React , {useState} from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {Imovel} from "../Model/Imovel";
import {Locatario} from "../Model/Locatario";
import ImovelService from "../services/ImovelService";
import LocatarioService from "../services/LocatarioService";

export const CadastroImovel = ({navigation}) => {



    const [endereco, setEndereco] = useState('');
    const [tipo, setTipo] = useState('');
    const [valorDoAluguel, setValorDoAluguel] = useState(null);
    const [valorCondominio, setValorCondominio] = useState(null);
    const [numeroQuartos, setNumeroQuartos] = useState(null);
    const [numeroBanheiros, setNumeroBanheiros] = useState(null);
    const [foto, setFoto] = useState('');
    const [estaLocado, setEstaLocado] = useState(false);
    const [locador, setLocador] = useState('');

    }
    return (
        <View>
            <Text>Endereço</Text>
            <TextInput style={style.input} onChangeText={setEndereco}/>
            <Text>Valor do aluguel</Text>
            <TextInput style={style.input} onChangeText={setValorDoAluguel} keyboardType='numeric'/>
            <Text>Valor do condominio</Text>
            <TextInput style={style.input} onChangeText={setValorCondominio} keyboardType='numeric'/>
            <Text>Número de quartos</Text>
            <TextInput style={style.input} onChangeText={setNumeroQuartos} keyboardType='numeric'/>
            <Text>Numero de banheiros</Text>
            <TextInput style={style.input} onChangeText={setNumeroBanheiros} keyboardType='numeric'/>
            <Text>Ele está locado?</Text>
            <TextInput style={style.input} onChangeText={setEstaLocado}/>
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

export default CadastroImovel;