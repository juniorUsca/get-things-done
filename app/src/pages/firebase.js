import firebase from 'firebase/app';
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyArFGqGZ4phKYOQsA4UJN4UotS2djQ8lUo",
    authDomain: "login-89a2d.firebaseapp.com",
    projectId: "login-89a2d",
    storageBucket: "login-89a2d.appspot.com",
    messagingSenderId: "572463801506",
    appId: "1:572463801506:web:5335a8c1e7b4daf18ba3fb",
    measurementId: "G-C7LB2TNZVW"
};

firebase.initializeApp(firebaseConfig)

export const loginWithGitHub = () => {
    const githubProvider = new firebase.auth.GithubAuthProvider()
    return firebase.auth().signInWithPopup(githubProvider)
}
export const loginWithFacebook = () => {
    const facebookbProvider = new firebase.auth.FacebookAuthProvider()
    return firebase.auth().signInWithPopup(facebookbProvider)
}

