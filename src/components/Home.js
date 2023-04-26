import {Button, StatusBar, StyleSheet, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

export const HomeScreen = ({navigation}) => {

    return <SafeAreaView style={styles.container}>
        <View style={styles.fixToText}>
            <Button
                title="Lista de Imoveis"
                onPress={() => navigation.navigate('Listar Imóvel')}
            />
        </View>
        <View style={styles.fixToText}>
            <Button
                title="Lista de Locatarios"
                onPress={() => navigation.navigate('Listar Locatário')}
            />
        </View>
    </SafeAreaView>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
})