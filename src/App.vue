<template>
  <n-message-provider>
    <router-view />
  </n-message-provider>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAuthStore } from './stores/auth';
import { watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useFirestoreStore } from './stores/database';

const router = useRouter()
const authStore = useAuthStore()
const firestoreStore = useFirestoreStore()
const { userData } = storeToRefs(authStore)

const redirectOnLogin = () => {
  if (authStore.userData?.accessToken) {
    router.push('dash')
  } else {
    router.push('/')
  }
}
// On app initialization
redirectOnLogin()
// When user sign in/out
watch(userData, redirectOnLogin)
</script>