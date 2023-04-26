import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useEffect} from "react";
import DatabaseInit from "./src/database/DatabaseInit";
import CadastroLocatario from "./src/components/CadastroLocatario";
import CadastroImovel from "./src/components/CadastroImovel";
import {ListarImovel} from "./src/components/ListarImovel";
import {ListarLocatario} from "./src/components/ListarLocatario";
import {HomeScreen} from "./src/components/Home";



const Stack = createNativeStackNavigator();

export default function App() {

  useEffect(() => {
    new DatabaseInit()
  },[])


  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cadastrar Locatário" component={CadastroLocatario} />
        <Stack.Screen name="Cadastrar Imóvel" component={CadastroImovel} />
          <Stack.Screen name="Listar Imóvel" component={ListarImovel} />
          <Stack.Screen name="Listar Locatário" component={ListarLocatario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}