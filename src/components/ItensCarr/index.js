import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useContext, useState } from 'react';
import { CardContext } from '../../Context';

export default function ItensCarr({ data, deleteItem }) {



    const [ aumentar, SetAumentar ] = useState(data.amount);
    const [ descremento, setDescremento ] = useState(data.amount);
    const [ quantidade, setQuantidade ] = useState(aumentar);

    function handleIncrement() {
        SetAumentar(quantidade => quantidade += 1);
        setQuantidade(aumentar)
    }

    function handleDescrement() {
        setDescremento(quantidade => quantidade - 1);

        setQuantidade(descremento)

        if (descremento < 1) {
            deleteItem()
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.areaItem}>
                <Text style={styles.title}>{data.name}</Text>
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
