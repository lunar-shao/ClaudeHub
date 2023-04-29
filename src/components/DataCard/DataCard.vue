<script setup lang="ts">
import { CogOutline } from "@vicons/ionicons5";
const props = defineProps({
  title: String,
  icon: String,
  color: String,
});
</script>

<template>
  <n-card class="box">
    <n-thing class="box">
      <template #avatar>
        <n-avatar :style="`--n-color: ${props.color}`" class="avatar-color" :src="props.icon" />
      </template>
      <template #header> {{ props.title }} </template>
      <template #header-extra>
        <n-button circle size="small">
          <template #icon>
            <CogOutline />
          </template>
        </n-button>
      </template>
      <template #description> Refresh 10 minutes ago </template>
      <slot>
        Money is any item or verifiable record that is generally accepted as
        payment for goods and services and repayment of debts, such as taxes, in
        a particular country or socio-economic context.
      </slot>
    </n-thing>
  </n-card>
</template>

<style lang="sass" scoped>
.avatar-color
  background-color: var(--n-color)
  will-change: filter
  transition: filter 500ms linear
  filter: drop-shadow(0 0 0.5em var(--n-color))
  &:hover
    filter: drop-shadow(0 0 1em rgba(var(--n-color), .9))
</style>

<style lang="sass">
.n-thing-header
  margin-top: -5px
.n-thing-main__description
  margin-top: -10px
</style>
