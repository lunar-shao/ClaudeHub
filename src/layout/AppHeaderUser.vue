<template>
  <n-dropdown :options="options">
    <n-avatar round size="medium" :src="userData?.photoURL" referrerpolicy="no-referrer" />
  </n-dropdown>
</template>

<script setup lang="ts">
import { h } from "vue";
import { NIcon } from "naive-ui";
import { LogOutOutline as LogoutIcon } from "@vicons/ionicons5";
import { useAuthStore } from "../stores/auth";

const { userData } = useAuthStore();

console.log(userData);


const renderIcon = (icon: any) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon),
    });
  };
};

const options = [
  {
    label: "Logout",
    key: "logout",
    icon: renderIcon(LogoutIcon),
  },
];
</script>
