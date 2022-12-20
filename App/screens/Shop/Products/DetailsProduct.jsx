import { StyleSheet, Text, View, Image } from 'react-native'
import imgTest from '../../../Assets/Img/png/zapato.png'
import ButtonGeneric from '../../../Componentes/Elements/ButtonGeneric'
import { stylesDetailsProduct } from '../../../Styles/StyleDetailsProduct'

const DetailsProduct = ({ navigation }) => {
    return (
        <View style={stylesDetailsProduct.container}  >
            <View style={stylesDetailsProduct.containerImage}>
                <Image style={stylesDetailsProduct.image} source={imgTest} />
            </View>
            <View style={stylesDetailsProduct.details}>
                <View style={stylesDetailsProduct.contenDetails}>
                    <View >
                        <Text style={stylesDetailsProduct.contenDetailsText}>Nixon</Text>
                    </View>
                    <View >
                        <Image style={stylesDetailsProduct.contenDetailsImage} source={imgTest} />
                    </View>
                </View>
                <View>
                    <Text>
                        Prototypr
                        20 Fresh Inspirational Mobile UI Design Examples/Templates on Dribbble | by Trista liu | Prototypr
                    </Text>
                </View>
                <View style={stylesDetailsProduct.detailsPrice} >
                    <Text style={stylesDetailsProduct.detailsPrice_Price} > $168.98 </Text>
                    <Text style={stylesDetailsProduct.detailsPriceText_oferta}> $325.00 </Text>
                </View>
                <View style={stylesDetailsProduct.detailsButton}>
                    <ButtonGeneric name={'Agregar Al Carrito'} />
                </View>

            </View>
            <View style={stylesDetailsProduct.viewCard} onTouchStart={() => { navigation.navigate('shoppingCart') }}>
                <Text style={stylesDetailsProduct.viewCard_text}>
                    Carrito
                </Text>
            </View>
        </View>
    )
}

export default DetailsProduct