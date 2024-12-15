
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useContext, useState } from "react";
import ListProducts from "../../components/ListProducts";
import { CardContext } from "../../Context";
import { useNavigation } from "@react-navigation/native";


export default function Home() {

    const navigation = useNavigation()

    const { cart, addItemCart } = useContext(CardContext)
    const [ products, setProducts ] = useState([
        {
            id: 1,
            name: 'Sorvete de morango',
            price: 7.99,

        },
        {
            id: 2,
            name: 'Fanta Laranja',
            price: 5.40,

        },
        {
            id: 3,
            name: 'Sorvete de Chocolate',
            price: 7.99,

        },
    ]);


    function handleItemCart(item) {
        addItemCart(item)
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cardContent}>
                <Text style={styles.title}>Lista de produtos</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')} >
                    <View style={styles.dot}>
                        <Text style={{ color: '#fff', fontSize: 12, textAlign: 'center' }}>{cart?.length}</Text>
                    </View>
                    <Feather name="shopping-cart" size={30} color="black" />
                </TouchableOpacity>
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                data={products}
                renderItem={({ item }) => <ListProducts data={item} addToCart={() => handleItemCart(item)} />}
            />
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingEnd: 14,
        paddingStart: 14,
    },

    cardContent: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 24,
        marginTop: 24,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000'
    },
    dot: {
        width: 23,
        height: 23,
        borderRadius: 22 * 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        position: 'absolute',

        left: -4,
        bottom: -4,
        zIndex: 99
    }
});