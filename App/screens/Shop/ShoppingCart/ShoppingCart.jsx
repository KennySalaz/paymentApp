import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import CardProduct from '../../../Componentes/Cards/CardProduct'
import ButtonGeneric from '../../../Componentes/Elements/ButtonGeneric'
import { styShoppingCard } from '../../../Styles/StyleShoppingCard'

const ShoppingCart = ({navigation}) => {
    return (
        <>
            <View style={styShoppingCard.container}>
                <ScrollView contentContainerStyle={styShoppingCard.containerScroll}>
                    <CardProduct toShow={'ShoppingCart'} />
                    <CardProduct toShow={'ShoppingCart'} />
                    <CardProduct toShow={'ShoppingCart'} />
                    <CardProduct toShow={'ShoppingCart'} />
                    <CardProduct toShow={'ShoppingCart'} />
                    <CardProduct toShow={'ShoppingCart'} />
                    <CardProduct toShow={'ShoppingCart'} />
                    <CardProduct toShow={'ShoppingCart'} />
                    <CardProduct toShow={'ShoppingCart'} />
                    <CardProduct toShow={'ShoppingCart'} />
                    <CardProduct toShow={'ShoppingCart'} />
                    <CardProduct toShow={'ShoppingCart'} />
                    <CardProduct toShow={'ShoppingCart'} />
                    <CardProduct toShow={'ShoppingCart'} />
                    <CardProduct toShow={'ShoppingCart'} />
                    <CardProduct toShow={'ShoppingCart'} />
                    <CardProduct toShow={'ShoppingCart'} />
                    <CardProduct toShow={'ShoppingCart'} />
                    <CardProduct toShow={'ShoppingCart'} />
                    <CardProduct toShow={'ShoppingCart'} />
                </ScrollView>
                <View style={styShoppingCard.containerPrice}>
                    <View>
                        <Text style={styShoppingCard.textTotal}>Total</Text>
                        <Text style={styShoppingCard.textPrice}>$500</Text>
                    </View>
                    <View style={{ width: '50%' }}>
                        <ButtonGeneric name={'Enviar'} />
                    </View>
                </View>
            </View>


        </>

    )
}

export default ShoppingCart

