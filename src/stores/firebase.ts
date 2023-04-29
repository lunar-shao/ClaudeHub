// Import the functions you need from the SDKs you need
import { ref } from "vue";
import { defineStore } from "pinia";
import { initializeApp } from "firebase/app";

const app = initializeApp({
  apiKey: "AIzaSyCZ23BcqG4AHXpb6firF5tsycKzbO4op7A",
  authDomain: "claude-hub.firebaseapp.com",
  projectId: "claude-hub",
  storageBucket: "claude-hub.appspot.com",
  messagingSenderId: "152386232202",
  appId: "1:152386232202:web:a5fdf8d8f1ecf713177273",
});

export const useFirebaseStore = defineStore("firebase", () => {
  const firebaseApp = ref(app);
  return {
    firebaseApp,
  };
});
