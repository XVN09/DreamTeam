// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFeUlODjenAWl-ekzD7sVUZMuaUJNQGLM",
    authDomain: "dreamteamanimaties.firebaseapp.com",
    projectId: "dreamteamanimaties",
    storageBucket: "dreamteamanimaties.appspot.com",
    messagingSenderId: "254584443492",
    appId: "1:254584443492:web:1b151e9e3075f457894571",
    measurementId: "G-GCMYR0KCZC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// JavaScript code for various functionalities
