import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export const useForm = (initialForm, validateForm) => {
    const [formValue, setFormValue] = useState(initialForm)
    const [errors, setErrors] = useState({})

    const handleBlur = (e) => {
        setErrors(validateForm(formValue))
    }
    const handleSubmit = () => {
        setErrors(validateForm(formValue))
        console.log('erros', errors)
        if (Object.keys(errors).length === 0) {
            return 'ok'
        } else {
            return 'validando'
        }


    }
    return { formValue, errors, handleBlur, setFormValue, handleSubmit }
}


const styles = StyleSheet.create({})