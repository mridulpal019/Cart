import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';




const firebaseConfig = {
  apiKey: "AIzaSyCn1Zjx0lvfmJ9gsHkKLNDoN9HcnG13GG4",
  authDomain: "cart-7aaa6.firebaseapp.com",
  projectId: "cart-7aaa6",
  storageBucket: "cart-7aaa6.appspot.com",
  messagingSenderId: "480889531075",
  appId: "1:480889531075:web:7cd90b83b3f8e6d19a5076"
};

firebase.initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
