import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const clientCredentials = {
    apiKey: "AIzaSyC__Osaj_QQW9X5A48zjf22hGgZm2km21Y",
    authDomain: "get-things-done-52acc.firebaseapp.com",
    projectId: "get-things-done-52acc",
    storageBucket: "get-things-done-52acc.appspot.com",
    messagingSenderId: "311934038137",
    appId: "1:311934038137:web:5b8a855b017f613e1de4a8"
};

if (!firebase.apps.length) {
    firebase.initializeApp(clientCredentials);
}

const auth = firebase.auth()

export { auth };
