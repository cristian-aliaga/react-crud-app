import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: "fb-react-crud-6f8e1.firebaseapp.com",
    projectId: "fb-react-crud-6f8e1",
    storageBucket: "fb-react-crud-6f8e1.appspot.com",
    messagingSenderId: "109436008266",
    appId: "1:109436008266:web:af3490fe794a592032b3b3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);