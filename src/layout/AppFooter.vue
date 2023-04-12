<template>
  <div class="footer">
    <p>
      <n-gradient-text :size="16" gradient="linear-gradient(45deg, #888, #333)">
        Living the Claude Life
      </n-gradient-text>
    </p>
  </div>
</template>

<script setup>
import { NGradientText } from "naive-ui";
</script>

<style lang="sass" scoped>
.footer
  display: flex
  justify-content: center
  align-items: center
</style>
