import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC-wPfpvYL3Fe8iCsVpF_ub9QzC008sEoI",
  authDomain: "payment-system-f8afd.firebaseapp.com",
  projectId: "payment-system-f8afd",
  storageBucket: "payment-system-f8afd.appspot.com",
  messagingSenderId: "1038804169301",
  appId: "1:1038804169301:web:2cba5db4baefbfdff69adc"
};

const firebaseApp = initializeApp(firebaseConfig);


export default firebaseApp

