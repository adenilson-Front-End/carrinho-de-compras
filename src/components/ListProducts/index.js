import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function ListProducts({ data, addToCart }) {

    console.log(data.total)
    return (
        <View style={styles.container}>
            <View style={styles.areaItem}>
                <Text style={styles.title}>{data.name}</Text>
                <TouchableOpacity style={styles.button} onPress={addToCart}>
                    <Feather name="plus" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        paddingLeft: 4,
        paddingRight: 4
    },
    areaItem: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
        marginTop: 5,
        elevation: 2,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8,
        color: '#000'
    },
    button: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        right: 10,
        borderRadius: 8,
        backgroundColor: '#57c2f4'
    }
})