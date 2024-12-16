import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useContext, useState } from 'react';
import { CardContext } from '../../Context';

export default function ItensCarr({ data, deleteItem }) {

    const { cart } = useContext(CardContext);
    const [ quantidade, setQuantidade ] = useState(data.amount);
    const [ total, setTotal ] = useState(data.total);

    function handleIncrement() {
        setQuantidade(prevQuantidade => prevQuantidade += 1);
        setTotal(prevTotal => prevTotal += data.price);

        console.log(cart);
    }

    function handleDescrement() {
        setQuantidade(prevQuantidade => {
            const novaQuantidade = prevQuantidade - 1;
            setTotal(prevTotal => prevTotal -= data.price);


            if (novaQuantidade <= 0) {
                deleteItem()
            }

            return novaQuantidade;
        });




    }
    return (
        <View style={styles.container}>
            <View style={styles.areaItem}>
                <View style={styles.areaText}>
                    <Text style={styles.title}>{data.name}</Text>
                    <Text style={{ marginLeft: 8, fontSize: 16 }}>R$ {total.toFixed(2)}</Text>
                </View>
                <View style={styles.areaButton}>
                    <TouchableOpacity style={styles.button} onPress={handleDescrement}>
                        <Feather name="minus" size={24} color={'#fff'} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 16 }}>{quantidade}</Text>
                    <TouchableOpacity onPress={handleIncrement} style={[ styles.button, { borderTopRightRadius: 30 * 100, borderBottomRightRadius: 30 * 100, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 } ]}>
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
