import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useContext, useEffect, useState } from 'react';
import { CardContext } from '../../Context';

export default function ItensCarr({ data, deleteItem, addAmount, removeItemCart }) {


    const [ amount, setAmount ] = useState(data?.amount);

    function handleIncrease() {
        // vou chamar a função addAmount para atualizar o carrinho;
        addAmount();
        setAmount(item => item + 1);
    }

    function handleDecrease() {
        deleteItem()


        if (amount === 0) {

            setAmount(0);
            return;
        }

        setAmount(item => item - 1);
    }

    return (
        <View style={styles.container}>
            <View style={styles.areaItem}>
                <View style={styles.areaText}>
                    <Text style={styles.title}>{data.name}</Text>
                    <Text style={{ marginLeft: 8, fontSize: 16 }}>R$ {data.price}</Text>
                </View>
                <View style={styles.areaButton}>
                    <TouchableOpacity style={styles.button} onPress={handleDecrease}>
                        <Feather name="minus" size={24} color={'#fff'} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 16 }}>{amount}</Text>
                    <TouchableOpacity onPress={handleIncrease} style={[ styles.button, { borderTopRightRadius: 30 * 100, borderBottomRightRadius: 30 * 100, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 } ]}>
                        <Feather name="plus" size={24} color={'#fff'} />
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        padding: 4,

        backgroundColor: '#fafafa',
    },
    areaItem: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        elevation: 2,
        backgroundColor: '#fff',
    },
    areaText: {
        flexDirection: "colunm",

    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8
    },
    areaButton: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        marginRight: 5
    },
    button: {
        width: 35,
        height: 35,
        marginRight: 5,
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#57c2f4',
        borderTopLeftRadius: 30 * 100,
        elevation: 2,
        borderBottomLeftRadius: 30 * 100
    }

});
