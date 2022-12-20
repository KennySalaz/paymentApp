import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, StatusBar } from 'react-native'
import { Stack, Button } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react'

const Dashboard = ({ navigation }) => {


    return (
        <ScrollView style={styles.container} >

            <View >
                <View style={styles.container__button}>
                    <Text style={styles.container__button_title}>Empresas</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default Dashboard

const styles = StyleSheet.create({

})