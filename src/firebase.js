import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";


const firebaseConfig = {
    apiKey: "AIzaSyALB3JyAqRzcKoyxn0HdfI1supIOhFSCuE",
    authDomain: "reactfirebase-9237c.firebaseapp.com",
    projectId: "reactfirebase-9237c",
    storageBucket: "reactfirebase-9237c.appspot.com",
    messagingSenderId: "381601118252",
    appId: "1:381601118252:web:5748c7f5c91a6dc0b83989",
    measurementId: "G-P8HFNNXY07"
  };

 export const app = initializeApp(firebaseConfig);
 export const messaging = getMessaging(app);

