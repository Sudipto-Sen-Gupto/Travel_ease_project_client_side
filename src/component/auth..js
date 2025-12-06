
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBhfS_WLwrX6_U9ICJ-GQni-qSEOmZ08xA",
//   authDomain: "travel-ease-project-b78db.firebaseapp.com",
//   projectId: "travel-ease-project-b78db",
//   storageBucket: "travel-ease-project-b78db.appspot.com",
//   messagingSenderId: "705940220794",
//   appId: "1:705940220794:web:97efdcbb890f0859a0c4c3"
// };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const  auth =getAuth(app);