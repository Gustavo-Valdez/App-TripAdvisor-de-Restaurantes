import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD60Xbq62qSofdo2JuN5azrJuDkWzKfXCU",
  authDomain: "food-lovers-fce4a.firebaseapp.com",
  projectId: "food-lovers-fce4a",
  storageBucket: "food-lovers-fce4a.appspot.com",
  messagingSenderId: "128290751798",
  appId: "1:128290751798:web:bb1a112858de25d1029f97",
};

export const initFirabase = initializeApp(firebaseConfig);
