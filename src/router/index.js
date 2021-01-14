import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {StyleSheet} from 'react-native';
import { Home, TambahProduksi, DetailProduksi, Signup, Login }from '../pages'

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="DATA PRODUKSI" component={Home}/>
            <Stack.Screen name="Tambah Produksi" component={TambahProduksi} />
            <Stack.Screen name="Detail Produksi" component={DetailProduksi} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}

export default Router
