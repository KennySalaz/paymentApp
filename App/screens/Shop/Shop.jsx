import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CardProduct from '../../Componentes/Cards/CardProduct';

const Shop = ({ navigation }) => {
  return (

    <ScrollView contentContainerStyle={styles.container}>

      <View  onTouchStart={() => { navigation.navigate('detailsProduct') }}>
        <CardProduct />
      </View>

    </ScrollView>

  )
}
export default Shop;

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f6f7f9'
  }
})