import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import InputGeneric from '../../Componentes/Inputs/InputGeneric'
import { Icon } from "@react-native-material/core";
import ButtonGeneric from '../../Componentes/Elements/ButtonGeneric';
import { Switch } from 'react-native-paper';

const AddShop = () => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);


    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    return (
        <>
            <ScrollView contentContainerStyle={styles.container}  >
                {/* <View style={styles.container}> */}
                <View style={styles.content}>
                    <View>
                        <View style={styles.contentIcon}>
                            <Icon name="plus-box-multiple" size={44} color="black" />
                        </View>
                        <InputGeneric name={'name'} label={'Name Product'} typeInput={'outlined'} />
                        <InputGeneric name={'cantidad'} label={'Cantidad'} typeInput={'outlined'} />
                        <InputGeneric name={'precio'} label={'Precio'} typeInput={'outlined'} />
                        <InputGeneric name={'sabor'} label={'Sabor'} typeInput={'outlined'} />
                        <Text> Disponibilidad del producto </Text>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                            <Text style={[isSwitchOn ? styles.enable : styles.disable]}>  {isSwitchOn ? 'Disponible' : 'No Disponible'} </Text>

                        </View>
                    </View>
                </View>
                <View style={styles.contentButton}>
                    <ButtonGeneric name={'Guardar'} />
                </View>
                {/*  </View> */}
            </ScrollView>

        </>
    )
}

export default AddShop

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
    },
    content: {
        flex: 5,
    },
    contentIcon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 400,
        backgroundColor: '#dddddd',
        marginBottom: 15,
    },
    contentButton: {
        flex: 1,
        justifyContent: 'flex-end'


    },
    enable: {
        color: 'green'
    },
    disable: {
        color: 'red'
    }
})