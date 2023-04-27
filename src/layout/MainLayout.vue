<template>
  <n-layout class="main-layout">
    <n-layout-header bordered>
      <AppHeader />
    </n-layout-header>
    <n-layout has-sider>
      <AppSidebar />
      <n-layout>
        <div class="main-content">
          <div class="inner-layout">
            <slot />
          </div>
        </div>
      </n-layout>
    </n-layout>
    <n-layout-footer bordered> <AppFooter /> </n-layout-footer>
  </n-layout>
</template>

<script setup>
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";
import AppSidebar from "./AppSidebar.vue";
</script>

<style lang="sass">
.main-layout
  height: 100vh

.main-content
  width: 100%
  max-width: 1400px
  margin: 2rem auto
  .inner-layout
    margin: 0 2rem

.n-layout,
.n-layout-scroll-container
  display: flex
  flex-direction: column
</style>
