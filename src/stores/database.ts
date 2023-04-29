import { defineStore } from "pinia";
import { useFirebaseStore } from "./firebase";

export const useFirestoreStore = defineStore("firestore", () => {
  const { firebaseApp } = useFirebaseStore();

  return {
    firebaseApp,
  };
});
