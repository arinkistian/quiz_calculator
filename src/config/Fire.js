// // import firebase from 'firebase'; ==> error kl make yg ini
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCzQjeh8sA4zwZMSnFWWaK1UgVIHwipju0",
    authDomain: "budget-app-dd467.firebaseapp.com",
    projectId: "budget-app-dd467",
    storageBucket: "budget-app-dd467.appspot.com",
    messagingSenderId: "361830355778",
    appId: "1:361830355778:web:8145591f5cdac0bd346edb",
    measurementId: "G-4P0LVVXQVH"
}

const fire = firebase.initializeApp(config);
export default fire; 