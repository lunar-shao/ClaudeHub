import { ref } from "vue";
import { defineStore } from "pinia";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useFirebaseStore } from "./firebase";

const provider = new GoogleAuthProvider();

interface UserAuth {}

export const useAuthStore = defineStore("auth", () => {
  const { firebaseApp } = useFirebaseStore();
  const auth = getAuth(firebaseApp);
  const userData = getAuth(firebaseApp);
  const loading = ref(false);
  const error = ref(false);

  async function signInPopup() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        console.log({
          user,
          token,
        });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log({
          errorCode,
          errorMessage,
          email,
          credential,
        });
      });
  }

  return {
    loading,
    signInPopup,
  };
});
