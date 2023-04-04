import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPZClDg32jRlfXzlDSUSiczMwuSyxkr1g",
  authDomain: "springstevespring.firebaseapp.com",
  projectId: "springstevespring",
  storageBucket: "springstevespring.appspot.com",
  messagingSenderId: "488261758131",
  appId: "1:488261758131:web:db824d475c6120c2add4c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createApp(App).mount("#app");
