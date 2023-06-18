import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore, doc} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAkUKqdo8sq5FjzBEDJxuvp78qMTEvKfUg',
  authDomain: 'pumper-gb.firebaseapp.com',
  databaseURL: 'https://pumper-gb-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'pumper-gb',
  storageBucket: 'pumper-gb.appspot.com',
  messagingSenderId: '713594391786',
  appId: '1:713594391786:web:1ca8e524b9496db0fe1b93',
  measurementId: 'G-2V5TY7B3QY',
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

export const fuelDocRef = doc(db, 'pumpers/REEE58Lt2UA0YigDnbAH/istanbul/benzin');
