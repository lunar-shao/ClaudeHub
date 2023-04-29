import { ref, type Ref } from "vue";
import { defineStore } from "pinia";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useFirebaseStore } from "./firebase";

const provider = new GoogleAuthProvider();

interface AuthUser {
  accessToken: string;
  displayName: string;
  email: string;
  photoURL: string;
}

interface AuthError {
  errorCode: string;
  errorMessage: string;
}

function getLastToken(): AuthUser | undefined {
  const strUserData = localStorage.getItem("userData");
  if (strUserData) {
    return JSON.parse(strUserData) as AuthUser;
  }
}

export const useAuthStore = defineStore("auth", () => {
  const { firebaseApp } = useFirebaseStore();
  const auth = getAuth(firebaseApp);

  const error: Ref<AuthError | false> = ref(false);
  const loading = ref(false);
  const userData: Ref<AuthUser | undefined> = ref(getLastToken());

  async function signInPopup() {
    if (userData.value?.accessToken) {
      return;
    }
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          userData.value = {
            displayName: result.user.displayName as string,
            email: result.user.email as string,
            photoURL: result.user.photoURL as string,
            accessToken: credential.accessToken as string,
          };
          localStorage.setItem("userData", JSON.stringify(userData.value));
          error.value = false;
        }
      })
      .catch((error) => {
        error.value = {
          errorCode: error.code,
          errorMessage: error.message,
        } as AuthError;
      })
      .finally(() => {
        loading.value = false;
      });
  }

  return {
    error,
    loading,
    userData,
    signInPopup,
  };
});
