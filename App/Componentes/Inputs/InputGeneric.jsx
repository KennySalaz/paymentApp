import { StyleSheet, Text, View } from 'react-native'
import { TextInput, Button } from "@react-native-material/core";
import React, { useEffect } from 'react'

const InputGeneric = ({ name, value, errors, onChange, label, placeholder, typeInput, handleBlur }) => {
    useEffect(() => {
    }, [])

    return (
        <>
            <Text style={styles.label}> {label} </Text>
            <TextInput
                name={name}
                value={value}
                placeholder={placeholder}
                variant={typeInput}
                onChangeText={onChange}
                onBlur={handleBlur}
            />
        </>
    )
}

export default InputGeneric

const styles = StyleSheet.create({
    label: {
        marginBottom: 10,
        textTransform: 'uppercase'
    }
})