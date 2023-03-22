// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBEjHs39y9__xKrzWYfBf40EH-wkzFh8k0",
    authDomain: "iot-proj-3604a.firebaseapp.com",
    databaseURL: "https://iot-proj-3604a-default-rtdb.firebaseio.com",
    projectId: "iot-proj-3604a",
    storageBucket: "iot-proj-3604a.appspot.com",
    messagingSenderId: "153394526695",
    appId: "1:153394526695:web:daee0f4d241f8af6a2a542",
    measurementId: "G-9FL83KJT6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const analytics = getAnalytics(app);

export { db };
