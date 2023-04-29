import { computed, ref } from "vue";
import { defineStore, mapState } from "pinia";

export const useBreakpointStore = defineStore("breakpoint", () => {
  const windowWidth = ref(window.innerWidth);
  window.addEventListener(
    "resize",
    () => (windowWidth.value = window.innerWidth)
  );
  const isMobile = computed(() => windowWidth.value <= 768);
  return {
    isMobile,
  };
});

export const breakpointMixin = {
  computed: {
    ...mapState(useBreakpointStore, ["isMobile"]),
  },
};
