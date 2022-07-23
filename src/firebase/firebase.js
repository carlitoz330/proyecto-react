
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC9FAaWy1JflB3ahxfD4WscqWMLaKkkNkE",
  authDomain: "proyecto-react-tiendaenlinea.firebaseapp.com",
  projectId: "proyecto-react-tiendaenlinea",
  storageBucket: "proyecto-react-tiendaenlinea.appspot.com",
  messagingSenderId: "903313380885",
  appId: "1:903313380885:web:c37fe6729139cfc204201c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
