import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from "@react-native-material/core";
const ButtonGeneric = ({ name, funtion }) => {
    return (
        <>
            <Button
                onPress={funtion}
                title={name}
                style={styles.buttons}
                variant="text"
                contentContainerStyle={styles.buttonEdit}
                color='#FFF'
            />
        </>
    )
}

export default ButtonGeneric

const styles = StyleSheet.create({
    buttons: {
        color: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,
        elevation: 5,
    },
    buttonEdit: {
        width: '100%',
        backgroundColor: '#0b86f8',
        height: 45,
        borderRadius: 15,

    },
})