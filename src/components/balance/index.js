import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import formatMoney from '../../utils/formatMoney';

export default function Balance({ saldo, gastos }) {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saldo</Text>
                <Text style={styles.balance}>R$ {formatMoney(saldo)}</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Gastos</Text>
                <Text style={styles.expenses}>R$ -{formatMoney(gastos)}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -20,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99
    },
    item: {
        padding: 2
    },
    itemTitle: {
        fontSize: 18,
        marginBottom: 3
    },
    balance: {
        fontSize: 18,
        color: '#2ecc71'
    },
    expenses: {
        fontSize: 18,
        color: '#e74c3c'      
    }
})
