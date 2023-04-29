<template>
  <n-dropdown :options="options">
    <n-avatar round size="medium" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
  </n-dropdown>
</template>

<script>
import { h, defineComponent } from "vue";
import { NIcon } from "naive-ui";
import { LogOutOutline as LogoutIcon } from "@vicons/ionicons5";

const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon),
    });
  };
};

export default defineComponent({
  setup() {
    return {
      options: [
        {
          label: "Logout",
          key: "logout",
          icon: renderIcon(LogoutIcon),
        },
      ],
    };
  },
});
</script>
