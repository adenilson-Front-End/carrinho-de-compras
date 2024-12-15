import { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CardContext } from "../../Context";
import ItensCarr from "../../components/ItensCarr";

export default function Cart() {
    const { cart, deleteItemCart } = useContext(CardContext)


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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    }
})