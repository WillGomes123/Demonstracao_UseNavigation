import firebase from 'firebase/compat/app'
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDzKW7NYaNTddG8JVe6PYmytTNkuzpo72E",
    authDomain: "teste-video-7ad59.firebaseapp.com",
    projectId: "teste-video-7ad59",
    storageBucket: "teste-video-7ad59.appspot.com",
    messagingSenderId: "687481255612",
    appId: "1:687481255612:web:eed860ee399b0bbbb582b9",
    measurementId: "G-38Z0FW0QP7",
  };

if (firebase.apps.length === 0)
    {
        firebase.initializeApp(firebaseConfig)
        console.log('conectado')
    }

const db = getDatabase();
export {db}

