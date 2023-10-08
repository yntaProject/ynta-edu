import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyADvpKslyxX2a9A1Ko8nWyZeydYVhpbyrE",
  authDomain: "ynta-project.firebaseapp.com",
  projectId: "ynta-project",
  storageBucket: "ynta-project.appspot.com",
  messagingSenderId: "673853675911",
  appId: "1:673853675911:web:26c2ec4cbe19e222261b22",
  measurementId: "G-H9WLJV2T6L"
};

let app: FirebaseApp;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const db = getFirestore(app);
const storage = getStorage(app);
export { app, db, storage };