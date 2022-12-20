import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Avatar, TextInput, Button, } from "@react-native-material/core";


import React, { useState } from 'react'
import { useForm } from '../../Hooks/useForm';
import { intialFormProfile } from '../../propsTypes/InitialFormProfile';
import InputGeneric from '../../Componentes/Inputs/InputGeneric';
import { t_login } from '../../Locales/es-es';



const Profile = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const { setFormValue, formValue } = useForm(intialFormProfile)
  return (
    <ScrollView style={styles.container}>

      <View>
        <View style={styles.container__avatar}>
          <Avatar size={200} style={styles.container__avatar_img} image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
          <Text style={styles.container__avatar__text}>Subir Logo</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.container__text}>Ruc</Text>
          <InputGeneric name={'name'} onChange={(value) => setFormValue({ ...formValue, name: value })} label={t_login.input_name} typeInput={'outlined'} />
          <Text style={styles.container__text}>Razon Social</Text>
          <InputGeneric name={'lastName'} onChange={(value) => setFormValue({ ...formValue, lastName: value })} label={t_login.input_name} typeInput={'outlined'} />

        </View>

      </View>
      <Button style={styles.button} contentContainerStyle={styles.buttonContainer} variant="outlined" color="#fff" title="GUARDAR CAMBIOS" />
    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },

  container__avatar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    paddingBottom: 10

  },
  container__avatar_img: {
    marginBottom: 10,
  },
  container__avatar__text: {
    textTransform: 'uppercase',
    fontSize: 15,
    fontWeight: '500'
  },

  container__text: {
    fontSize: 20
  },
  container__input: {
    paddingTop: 5,
    marginBottom: 15,

  },
  button: {
    marginBottom: 50,
    /*   borderStyle: 'none',
   */
  },
  buttonContainer: {
    backgroundColor: 'blue',
    padding: 0,
    margin: 0,
    /*  borderRadius: '50%', */

  },

})