import { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CardContext } from "../../Context";
import ItensCarr from "../../components/ItensCarr";

export default function Cart() {
    const { cart, deleteItemCart, total, setTotal } = useContext(CardContext)


    function handleDeleteItemCart(item) {
        deleteItemCart(item)
    }


    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={cart}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ItensCarr data={item} deleteItem={() => handleDeleteItemCart(item.id)} />}

            />

            <View style={styles.areaTotal}>
                <Text>Total: R$: {total}</Text>
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