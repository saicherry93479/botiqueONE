import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAMmt_b2MMJ-jtim8rYqNF9bOywtyyWYgc",
  authDomain: "botique-86959.firebaseapp.com",
  projectId: "botique-86959",
  storageBucket: "botique-86959.appspot.com",
  messagingSenderId: "1024925728895",
  appId: "1:1024925728895:web:e8b059f79fbaf98a1ebf4a",
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const database = getDatabase(app);

export { app, storage, database };
