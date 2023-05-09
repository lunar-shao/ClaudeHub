import { createApp } from "vue";
import { createPinia } from "pinia";
import { markRaw } from "vue";
import {
  create,
  NIcon,
  NAvatar,
  NBadge,
  NButton,
  NLayout,
  NLayoutHeader,
  NLayoutFooter,
  NMenu,
  NLayoutSider,
  NSkeleton,
  NSpace,
  NCard,
  NH1,
  NH2,
  NText,
  NUl,
  NLi,
  NStatistic,
  NNumberAnimation,
  NTimeline,
  NTimelineItem,
  NGi,
  NGrid,
  NDropdown,
  NPageHeader,
  NTabs,
  NTab,
  NSpin,
  NTooltip,
  NMessageProvider,
  NResult,
  NThing,
  NProgress,
  NImage,
  NCarousel,
  NDivider,
  NInput,
  NCascader,
  NTransfer,
  NForm,
  NRadio,
  NInputGroup,
  NTimePicker,
  NSlider,
  NCheckbox,
  NInputNumber,
  NDatePicker,
  NSwitch,
  NCheckboxGroup,
  NRadioGroup,
  NFormItemGi,
  NSelect,
  NRadioButton,
  NDataTable,
  NList,
  NListItem,
  NTag,
  NH3,
} from "naive-ui";

import App from "@/App.vue";
import router from "@/router";
import { breakpointMixin } from "./stores/breakpoint";

import "./assets/index.sass";

const naive = create({
  components: [
    NIcon,
    NAvatar,
    NBadge,
    NButton,
    NLayout,
    NLayoutHeader,
    NLayoutFooter,
    NMenu,
    NLayoutSider,
    NSkeleton,
    NSpace,
    NCard,
    NH1,
    NH2,
    NText,
    NUl,
    NLi,
    NStatistic,
    NNumberAnimation,
    NTimeline,
    NTimelineItem,
    NGi,
    NGrid,
    NDropdown,
    NPageHeader,
    NTabs,
    NTab,
    NSpin,
    NTooltip,
    NMessageProvider,
    NResult,
    NThing,
    NProgress,
    NImage,
    NCarousel,
    NDivider,
    NInput,
    NCascader,
    NTransfer,
    NForm,
    NRadio,
    NInputGroup,
    NTimePicker,
    NSlider,
    NCheckbox,
    NInputNumber,
    NDatePicker,
    NSwitch,
    NCheckboxGroup,
    NRadioGroup,
    NFormItemGi,
    NSelect,
    NRadioButton,
    NDataTable,
    NList,
    NListItem,
    NTag,
    NH3,
  ],
});

const pinia = createPinia();

pinia.use(({ store }) => {
  store.$router = markRaw(router);
});

const app = createApp(App);

app.use(pinia);
app.use(naive);
app.use(router);

app.mixin(breakpointMixin);

app.mount("#app");
