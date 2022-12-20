import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Dashboard from '../screens/Dashboard'
import Login from '../screens/Login/Login'
import Shop from '../screens/Shop/Shop'
import ShopCard from '../screens/Shop/ShopCard'
import AddShop from '../screens/Shop/AddShop'
import ShoppingCart from '../screens/Shop/ShoppingCart/ShoppingCart'
import ProductStock from '../screens/Shop/Stock/ProductStock'
import StatuUser from '../screens/Shop/Payments/StatuUser'
import StatusUser from '../screens/Shop/Payments/StatusUsers'
import Profile from '../screens/user/Profile'
import Recovery from '../screens/Login/Recovery'
import Register from '../screens/Login/Register'

const DrawerNavegation = () => {

    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator
            initialRouteName='Home'
        >
            <Drawer.Screen name="Home" component={Dashboard} />
            <Drawer.Screen name="login" component={Login} />
            <Drawer.Screen name="Productos" component={Shop} />
            <Drawer.Screen name="Mis Compras" component={ShopCard} />
            <Drawer.Screen name="Agregar Producto" component={AddShop} />
            <Drawer.Screen name="Carrito" component={ShoppingCart} />
            <Drawer.Screen name="Stock" component={ProductStock} />
            <Drawer.Screen name="Estado de tus pagos" component={StatuUser} />
            <Drawer.Screen name="Estado de los usuarios" component={StatusUser} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Recovery" component={Recovery} />
            <Drawer.Screen name="Register" component={Register} />
        </Drawer.Navigator>
    )
}

export default DrawerNavegation

const styles = StyleSheet.create({})