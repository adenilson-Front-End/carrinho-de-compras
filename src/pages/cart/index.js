import { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CardContext } from "../../Context";
import ItensCarr from "../../components/ItensCarr";

export default function Cart() {
    const { cart, removeItemCart, addItemCart } = useContext(CardContext)


    function handleDeleteItemCart(item) {
        removeItemCart(item);
    }


    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={cart}
                ListEmptyComponent={() => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, marginTop: '70%', fontWeight: 'bold', color: '#dcdcdc' }}>Seu carrinho está vazio (: </Text>
                </View>}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ItensCarr data={item} deleteItem={() => handleDeleteItemCart(item)} addAmount={() => addItemCart(item)} />}

            />

            <View style={styles.areaTotal}>
                <Text>R$:</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    areaTotal: {
        width: '50%',
        padding: 10,
        backgroundColor: '#fff',
        elevation: 2,
        position: 'absolute',
        bottom: 5,
        right: 0,
        zIndex: 99
    }
})