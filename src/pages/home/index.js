import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/header';
import Movements from '../../movements';
import Balance from './../../components/balance/index';
import { DB } from './../../database/index';
import Actions from './../../components/actions/index';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name={'Alfredo Neto'}/>
      <Balance saldo={15000} gastos={200}/>
      <Actions/>
      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList 
        style={styles.list}
        data={DB}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 20
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});
