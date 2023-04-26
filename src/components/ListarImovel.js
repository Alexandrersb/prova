import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, FlatList, Button} from "react-native";
import ImovelService from "../services/ImovelService";
import {SafeAreaView} from "react-native-safe-area-context";


export const ListarImovel = ({navigation}) => {


  const [imoveis, setImoveis] = useState(null)


  useEffect(() => {
    const unsubscribe = navigation.addListener('focus',() => {
      try {
        ImovelService.findAll().then((values) => {
          console.warn("Sucesso ao listar os imoveis")
          setImoveis(values._array)
        });
      } catch (e) {
        console.warn("Falha ao carregar lista de imoveis " + e)
      }
    })
    return unsubscribe;
  }, [navigation])


  const Item = ({item}) => {
    return <View style={styles.item}>
      <Text style={styles.title}>Tipo: {item.tipo}</Text>
      <Text style={styles.title}>Locador: {item.locador}</Text>
      <Text style={styles.title}>Quartos: {item.numQuarto}</Text>
      <Text style={styles.title}>Banheiros: {item.numBanheiro}</Text>
      <Text style={styles.title}>Endereço: {item.endereco}</Text>
      <Text style={styles.title}>Valor do Aluguel: {item.valorAluguel}</Text>
      <Text style={styles.title}>Locado: {item.locado}</Text>
      {item.tipo === "Apartamento" ? <Text style={styles.title}>Valor do Condominio: {item.valorCondominio}</Text> : false}


    </View>
  };

  return <SafeAreaView style={styles.container}>
    <View style={styles.fixToText}>
      <Button
          title="Cadastrar Imovel"
          onPress={() => navigation.navigate('Cadastrar Imóvel')}
      />
    </View>
    <FlatList
        data={imoveis}
        renderItem={({item}) => <Item item={item}/>}
        keyExtractor={item => item.id}
    />
  </SafeAreaView>
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

