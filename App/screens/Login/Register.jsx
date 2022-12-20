import { Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import InputGeneric from '../../Componentes/Inputs/InputGeneric';
import ButtonGeneric from '../../Componentes/Elements/ButtonGeneric';
import { t_login } from '../../Locales/es-es';
import { handleChange, useForm } from '../../Hooks/useForm'
import { intialFormLogin } from '../../propsTypes/initialFormLogin';
import { styRegister } from '../../Styles/StylesRegister';
import { validateSingUp } from '../../utils/validations/validateForm';
import { register, userFireStorage } from '../../Firebase/Login/signUp';

const Register = ({ navigation }) => {

    const { handleChange, handleBlur, errors, setFormValue, formValue, handleSubmit } = useForm(intialFormLogin, validateSingUp)

    const authRegister = async () => {
        let res = handleSubmit()
        console.log('res', res)
        if (res === 'ok') {
            console.log('paso')
            const respo = await register(formValue.email, formValue.password)
            if (respo.statusRespon) {
                const res = await userFireStorage('users', formValue)
            }
        }
    }
    return (
        <View style={styRegister.container}>
            <View >
                <View style={styRegister.container__img}>
                    <Image style={styRegister.img} source={{ uri: 'https://c8.alamy.com/zoomses/6/cd654e1152a043dc81de3d5fb248b785/2c4pfjr.jpg' }} />
                </View>
                <View style={styRegister.containerText}>
                    <Text style={styRegister.containerText_title}>Hello</Text>
                    <Text style={styRegister.containerText_subTitle}>Sign In to your account</Text>
                </View>
                <View style={styRegister.container__input}>
                    <InputGeneric name={'name'} handleBlur={handleBlur} onChange={(value) => setFormValue({ ...formValue, name: value })} label={t_login.input_name} typeInput={'outlined'} />
                    {errors.name && <Text style={{ color: 'red' }}> {errors.name} </Text>}
                    <InputGeneric name={'email'} handleBlur={handleBlur} onChange={(value) => setFormValue({ ...formValue, email: value })} label={t_login.input_email} typeInput={'outlined'} />
                    {errors.email && <Text style={{ color: 'red' }}> {errors.email} </Text>}
                    <InputGeneric name={'password'} handleBlur={handleBlur} onChange={(value) => setFormValue({ ...formValue, password: value })} label={t_login.input_password} typeInput={'outlined'} />
                    {errors.password && <Text style={{ color: 'red' }}> {errors.password} </Text>}
                    <InputGeneric name={'confirmPassword'} handleBlur={handleBlur} onChange={(value) => setFormValue({ ...formValue, confirmPassword: value })} label={t_login.input_confirmPassword} typeInput={'outlined'} />
                    {errors.confirmPassword && <Text style={{ color: 'red' }}> {errors.confirmPassword} </Text>}

                </View>
                <View style={styRegister.container__confirmation}>
                    <Text style={styRegister.container__confirmation_text} onPress={() => navigation.navigate('recovery')}> {t_login.olvido}</Text>
                </View>
                <View style={styRegister.container__button}>
                    <ButtonGeneric name={t_login.iniciar} funtion={authRegister} />
                </View>
                <View style={styRegister.container__text}>
                    <Text style={styRegister.container__text_child}> {t_login.registar} </Text>
                </View>

            </View>


        </View>
    )
}

export default Register
