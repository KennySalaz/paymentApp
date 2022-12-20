import { regexEmail } from "../../Helpers/regExp"


export const validateSingUp = (form) => {
    let error = {}
    if (!form?.name.trim()) {
        error.name = 'Debes ingresar un nombre'
    }
    if (!form?.email.trim()) {
        error.email = 'Debes ingresar un email'
    } else if (!regexEmail.test(form?.email.trim())) {
        error.email = 'Debes ingresar un email valido'
3
    }
    if (!form?.password.trim()) {
        error.password = 'Debes ingresar un password'
    }else if(form?.password.length < 6){
        error.password = 'La contrasena debe de tener mas de 6 caracteres'

    }
    if (form?.confirmPassword.trim() == '') {
        error.confirmPassword = 'Debes ingresar un password'
    } else if (form?.password.trim() !== form?.confirmPassword.trim()) {
        error.confirmPassword = 'Las contrasenas no coinciden'
    }
    return error

}