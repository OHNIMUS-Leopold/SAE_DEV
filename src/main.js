import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './input.css'


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAe3XkRSmI_wtFpo2XIqt00H3bwOs8WlTU",
    authDomain: "sae-dev-20826.firebaseapp.com",
    projectId: "sae-dev-20826",
    storageBucket: "sae-dev-20826.appspot.com",
    messagingSenderId: "18633386918",
    appId: "1:18633386918:web:3c6d6461d6316103b37d67"
  };

  // Initialize Firebase
  const appFirebase = initializeApp(firebaseConfig);


const app = createApp(App)

app.use(router)

app.mount('#app')
