import firebase from 'firebase/app';
import "firebase/auth";


export const auth = firebase.initializeApp({
    apiKey: "AIzaSyC-P80HE3V-hTMIASBGXmm9u68bk9yA3io",
    authDomain: "chat-master-20966.firebaseapp.com",
    projectId: "chat-master-20966",
    storageBucket: "chat-master-20966.appspot.com",
    messagingSenderId: "843680471448",
    appId: "1:843680471448:web:55ec3c3df55664e620f3ed"
}).auth();