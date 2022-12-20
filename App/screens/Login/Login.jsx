import { Text, View, Image, } from 'react-native'
import React from 'react'
import InputGeneric from '../../Componentes/Inputs/InputGeneric';
import ButtonGeneric from '../../Componentes/Elements/ButtonGeneric';
import { t_login } from '../../Locales/es-es';
import { styLogin } from '../../Styles/stylesLogin';
import { useForm } from '../../Hooks/useForm'
import { intialFormLogin } from '../../propsTypes/initialFormLogin';
import { register, userFireStorage } from '../../Firebase/Login/signUp';

const Login = ({ navigation }) => {

    const { handleChange, handleBlur, errors, setFormValue, formValue } = useForm(intialFormLogin, validateSingUp)
    return (

        <View style={styLogin.container} >
            <View >
                <View style={styLogin.container__img}>
                    <Image style={styLogin.img} source={{ uri: 'https://c8.alamy.com/zoomses/6/cd654e1152a043dc81de3d5fb248b785/2c4pfjr.jpg' }} />
                </View>
                <View style={styLogin.containerText}>
                    <Text style={styLogin.containerText_title}>Hello</Text>
                    <Text style={styLogin.containerText_subTitle}>Sign In to your account</Text>
                </View>
                <View style={styLogin.container__input}>
                    <InputGeneric name={'name'} handleBlur={handleBlur} onChange={(value) => setFormValue({ ...formValue, name: value })} label={t_login.input_name} typeInput={'outlined'} />
                    {errors.name && <Text style={{ color: 'red' }}> {errors.name} </Text>}
                    <InputGeneric name={'password'} handleBlur={handleBlur} onChange={(value) => setFormValue({ ...formValue, password: value })} label={t_login.input_password} typeInput={'outlined'} />
                    {errors.password && <Text style={{ color: 'red' }}> {errors.password} </Text>}
                </View>
                <View style={styLogin.container__confirmation}>
                    <Text style={styLogin.container__confirmation_text} onPress={() => navigation.navigate('recovery')}> {t_login.olvido}</Text>
                </View>
                <View style={styLogin.container__button}>
                    <ButtonGeneric name={t_login.iniciar} funtion={authRegister} />
                </View>
                <View style={styLogin.container__text}>
                    <Text style={styLogin.container__text_child}> {t_login.registar} </Text>
                </View>

            </View>


        </View>
    )
}

export default Login
