import { doc, setDoc } from "firebase/firestore";
import { auth, createUserWithEmailAndPassword, db } from "../packageFirebase"



export const register = async (email, password) => {
    const result = { statusRespon: true, error: null }

    try {
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
    } catch (error) {
        console.log('error', error)
        result.statusRespon = false
        result.error = 'Este usuario ya esta registrado'
    }
    return result
}


export const userFireStorage = async (collection, data) => {
    const result = { statusRespon: true, error: null }
    const userId = auth.currentUser.uid
    const { name, email, password, } = data
    let newJson = {
        name,
        email,
        password,
        rol: ''
    }
    try {
        await setDoc(doc(db, collection, userId),
            newJson
        )
    } catch (error) {
        result.statusRespon = false
        result.error = error
        console.log('error', error)
    }
    return result
}

