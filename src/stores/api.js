import { ref } from "vue";
import { defineStore } from "pinia";

export const useApiStore = defineStore("api", () => {
  const loading = ref(true);
  function fetchChangelog() {
    setTimeout(() => {
      loading.value = false;
    }, 2000);
  }
  fetchChangelog();
  return {
    loading,
    fetchChangelog,
  };
});
