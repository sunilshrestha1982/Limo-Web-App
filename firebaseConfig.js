import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC6DqlGhfTkrWR01WyKXvVBCrwBg4M3_2Y",
  authDomain: "limo-and-chauffeur-wp-plugin.firebaseapp.com",
  projectId: "limo-and-chauffeur-wp-plugin",
  storageBucket: "limo-and-chauffeur-wp-plugin.firebasestorage.app",
  messagingSenderId: "463668655769",
  appId: "463668655769:web:8287fd4f631b84547cea08",
};

const app = initializeApp(firebaseConfig);
export default app;

