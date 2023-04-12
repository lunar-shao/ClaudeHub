<template>
  <n-layout-sider
    class="app-side-bar"
    bordered
    show-trigger
    collapse-mode="width"
    :collapsed-width="64"
    :width="200"
    :native-scrollbar="false"
    :show-collapsed-content="false"
    v-if="false"
  >
    <n-space vertical v-if="api.loading">
      <n-space v-for="i in 4" :key="i">
        <n-skeleton size="medium" width="100%" :sharp="false" />
        <n-skeleton size="medium" width="400%" />
      </n-space>
    </n-space>
    <n-menu
      v-else
      :collapsed-width="64"
      :collapsed-icon-size="35"
      :options="menuOptions"
    />
  </n-layout-sider>
</template>

<script setup>
import { h } from "vue";
import { NBadge, NIcon } from "naive-ui";
import { Bookmarks, Home, Leaf, Scale } from "@vicons/ionicons5";
import { useApiStore } from "@/stores/api";

const renderIcon = (icon) => () =>
  h(NBadge, { color: "black", value: `0` }, () =>
    h(NIcon, { size: "24px" }, { default: () => h(icon) })
  );

const api = useApiStore();

const menuOptions = [
  {
    label: "Dashboard",
    key: "dashboard",
    icon: renderIcon(Leaf),
  },
  {
    label: "Physical",
    key: "physical",
    icon: renderIcon(Scale),
  },
  {
    label: "Home",
    key: "home",
    icon: renderIcon(Home),
  },
  {
    label: "Books",
    key: "books",
    icon: renderIcon(Bookmarks),
  },
];
</script>

<style lang="sass" scoped>
.app-side-bar
  padding-top: 12px
</style>

<style lang="sass" scoped>
.app-side-bar .n-scrollbar-content .n-skeleton
  margin-top: 10px
  margin-left: 32px
</style>
