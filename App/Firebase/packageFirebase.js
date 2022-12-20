import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    EmailAuthProvider,
    reauthenticateWithCredential,
    updateEmail,
    updatePassword,
    AuthCredential,

} from '@firebase/auth';
import {
    getFirestore,
    getDoc,
    collection,
    orderBy,
    limit,
    getDocs,
    startAfter,
    doc,
    addDoc,
    where,
    query,
    deleteDoc,

} from 'firebase/firestore';
import { getStorage, ref, getDownloadURL, uploadBytes, } from 'firebase/storage'
import firebaseApp from './config';



const auth = getAuth(firebaseApp)
const storage = getStorage(firebaseApp)
const db = getFirestore(firebaseApp)

export {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    EmailAuthProvider,
    reauthenticateWithCredential,
    updateEmail,
    updatePassword,
    AuthCredential,
    getDoc,
    collection,
    orderBy,
    limit,
    getDocs,
    startAfter,
    doc,
    addDoc,
    where,
    query,
    deleteDoc,
    auth,
    db,
    storage

}