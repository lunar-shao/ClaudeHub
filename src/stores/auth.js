import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
const serverUrl = import.meta.env.VITE_SERVER_URI;

export const authUrls = {
  login: serverUrl + "/auth/google/login",
  token: serverUrl + "/auth/google/token",
};

export const useAuthStore = defineStore("auth", () => {
  const loading = ref(false);
  const jwt = ref(window.localStorage.getItem("jwt"));

  function registerCode() {
    if (!window.location.search.substr(1) || jwt) {
      return;
    }
    loading.value = true;
    const url = `${authUrls.token}?${window.location.search.substr(1)}`;
    axios
      .get(url, { withCredentials: true, responseType: "json" })
      .then((response) => {
        if (response?.data["result"] === true) {
          window.localStorage.setItem("jwt", response.data.access_token);
          jwt.value = response.data.access_token;
        }
      })
      .then(() => (loading.value = false));
  }

  return {
    loading,
    jwt,
    registerCode,
  };
});
