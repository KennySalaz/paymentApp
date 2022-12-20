import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { stylesCardProduct } from '../../Styles/StylesCardProduct'


const CardProduct = ({ toShow }) => {
    return (
        <View style={stylesCardProduct.container}>
            <View style={stylesCardProduct.containerImage} >

                <Image style={stylesCardProduct.containerImage_image} source={{ uri: 'https://picsum.photos/700' }} />
            </View>
            <View style={stylesCardProduct.containerTexts}>
                <View>
                    <Text style={stylesCardProduct.containerTexts_1}>Nikon md600</Text>
                    <Text>1$ </Text>
                    <Text>1$ </Text>
                </View>
                {
                    toShow === 'ShoppingCart' && (
                        <>
                            <View style={stylesCardProduct.containerAddItem}>
                                <View style={stylesCardProduct.containerAddItem_res}>
                                    <Text>-</Text>
                                </View>
                                <Text>0</Text>
                                <View style={stylesCardProduct.containerAddItem_add}>
                                    <Text>+</Text>
                                </View>
                            </View>
                        </>
                    )
                }
            </View>
        </View>
    )
}

export default CardProduct