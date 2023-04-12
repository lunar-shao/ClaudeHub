<script setup>
import MainLayout from "@/layout/MainLayout.vue";
import Form from "./Form.vue";
</script>

<template>
  <MainLayout class="dashboard">
    <n-card class="box" title="New entry">
      <Form />
    </n-card>
  </MainLayout>
</template>

<style lang="sass">
.dashboard
  .box
    height: 100%
</style>

<style scoped>
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}

.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>