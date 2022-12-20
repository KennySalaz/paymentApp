import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavegation from './DrawerNavegation';
import Recovery from '../screens/Login/Recovery';
import Dashboard from '../screens/Dashboard';
import Login from '../screens/Login/Login';
import Profile from '../screens/user/Profile';
import DetailsProduct from '../screens/Shop/Products/DetailsProduct';
import ShoppingCart from '../screens/Shop/ShoppingCart/ShoppingCart';
import ProductStock from '../screens/Shop/Stock/ProductStock';

export default function Navegation() {
    const Stack = createStackNavigator()

    return (
        <NavigationContainer >
            <Stack.Navigator >
                <Stack.Screen name="Inicio" component={DrawerNavegation} options={{
                    headerShown: false
                }} />
                <Stack.Screen options={{ title: 'Dasboard', }} name="dashboard" component={Dashboard} />
                <Stack.Screen options={{ title: 'Login', }} name="login" component={Login} />
                <Stack.Screen options={{ title: 'Recovery', }} name="recovery" component={Recovery} />
                <Stack.Screen options={{ title: 'Profile', }} name="profile" component={Profile} />
                <Stack.Screen options={{ title: 'detailsProduct', }} name="detailsProduct" component={DetailsProduct} />
                <Stack.Screen options={{ title: 'Carrito', }} name="shoppingCart" component={ShoppingCart} />
                <Stack.Screen options={{ title: 'Stock', }} name="productStock" component={ProductStock} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}