<template>
  <n-dropdown :options="options" @select="handleSelect">
    <n-avatar round size="medium" :src="userData?.photoURL" referrerpolicy="no-referrer" />
  </n-dropdown>
</template>

<script setup lang="ts">
import { h } from "vue";
import { NIcon } from "naive-ui";
import { LogOutOutline as LogoutIcon } from "@vicons/ionicons5";
import { useAuthStore } from "@/stores/auth";

const { userData, logOut } = useAuthStore();

const options = [
  {
    label: "Logout",
    key: "logout",
    icon: () => h(NIcon, null, { default: () => h(LogoutIcon), }),
  },
];

const handleSelect = (key: string) => {
  if (key === 'logout') {
    logOut();
  }
}

</script>
