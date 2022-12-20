import { StyleSheet, Text, View, Image } from 'react-native'
import { TextInput, Button } from "@react-native-material/core";
import { RadioButton } from 'react-native-paper';
import React from 'react'

const Recovery = () => {
    const [value, setValue] = React.useState('first');
    return (
        <View style={styles.container}>
            <View style={styles.container__img}>
                <Image style={styles.img} source={{ uri: 'https://c8.alamy.com/zoomses/6/cd654e1152a043dc81de3d5fb248b785/2c4pfjr.jpg' }} />
            </View>
            <View style={styles.container__input}>
                <Text> Ruc: </Text>
                <TextInput style={styles.container__input_chuldren} variant="outlined" />
                <Text> Correo de Recuperacion: </Text>
                <TextInput style={styles.container__input_chuldren} variant="outlined" />
            </View>
            <View style={styles.container__button}>
                <Button title="RECUPERAR CONTRSENA" style={styles.buttons} variant="text" contentContainerStyle={styles.buttonEdit} color='#FFF' />
            </View>
            <View style={styles.container__text}>
                <Text style={styles.container__text_child} > Ayuda? </Text>
                <Text style={styles.container__text_child}> Registrarme </Text>
            </View>
            <View style={styles.container_img_icon} >
                <Image style={styles.img_icon} source={{ uri: 'https://c8.alamy.com/zoomses/6/cd654e1152a043dc81de3d5fb248b785/2c4pfjr.jpg' }} />
                <Image style={styles.img_icon} source={{ uri: 'https://c8.alamy.com/zoomses/6/cd654e1152a043dc81de3d5fb248b785/2c4pfjr.jpg' }} />
                <Image style={styles.img_icon} source={{ uri: 'https://c8.alamy.com/zoomses/6/cd654e1152a043dc81de3d5fb248b785/2c4pfjr.jpg' }} />
                <Image style={styles.img_icon} source={{ uri: 'https://c8.alamy.com/zoomses/6/cd654e1152a043dc81de3d5fb248b785/2c4pfjr.jpg' }} />

            </View>
            <Text style={styles.copy}> Copyright @ Excellentsoft 2022. </Text>
        </View>
    )
}

export default Recovery


const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    container__img: {
        height: '25%',
        padding: 20,
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    container__input: {
        height: '25%',
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20

    },
    container__input_chuldren: {
        paddingBottom: 10

    },
    container__button: {
        paddingLeft: 10,
        paddingRight: 10,

    },
    buttonEdit: {

        backgroundColor: '#0b86f8',
        height: 45,
        borderRadius: 15
    },
    container__text: {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },

    container__text_child: {
        color: '#0b86f8',
        fontWeight: '800'
    },

    container_img_icon: {
        height: '25%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'

    },

    img_icon: {
        width: 65,
        height: 70

    },
    copy: {
        textAlign: 'center',
        padding: 20
    },


})