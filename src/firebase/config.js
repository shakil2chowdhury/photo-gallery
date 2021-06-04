import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCY5ZiCPx1hwbN64eXFsnVzMpUYe4gsYJU",
    authDomain: "photo-gallery-e60b6.firebaseapp.com",
    projectId: "photo-gallery-e60b6",
    storageBucket: "photo-gallery-e60b6.appspot.com",
    messagingSenderId: "362541249571",
    appId: "1:362541249571:web:409920a645b192ead26d96"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timeStamp }