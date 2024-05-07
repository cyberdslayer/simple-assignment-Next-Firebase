// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEc2Llp73gwAkJp4IpiYfSCbG9O9wD3xY",
  authDomain: "simple-auth-3a477.firebaseapp.com",
  projectId: "simple-auth-3a477",
  storageBucket: "simple-auth-3a477.appspot.com",
  messagingSenderId: "305601110556",
  appId: "1:305601110556:web:d21ef502d71e75f4d575d9" 
};  

// const firebaseConfig = {
//   apiKey: "AIzaSyCEc2Llp73gwAkJp4IpiYfSCbG9O9wD3xY",
//   authDomain: process.env.AUTHDOMAIN,
//   projectId: process.env.PROJECTID,
//   storageBucket: process.env.STORAGEBUCKET,
//   messagingSenderId: process.env.MESSAGINGSENDERID,
//   appId: process.env.APPID


  
// }; 

console.log(process.env.APIKEY);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;