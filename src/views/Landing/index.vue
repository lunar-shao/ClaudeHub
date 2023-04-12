<template>
  <div class="landing">
    <n-page-header title="Claude Hub" class="header">
      <template #avatar>
        <n-avatar src="/favicon.webp" style="background-color: white" />
      </template>
    </n-page-header>

    <n-grid :cols="1" x-gap="12">
      <n-gi class="welcome">
        <h1>Welcome to Claude Hub</h1>
        <p>The movie manager for a Claude</p>
        <n-space>
          <n-button tag="a" href="/dash" type="primary">
            <template #icon>
              <n-icon>
                <LogoGoogle />
              </n-icon>
            </template>
            Log In
          </n-button>
        </n-space>
        <n-divider />
        <p class="muteted">
          We're excited to announce that Claude Hub is now in a closed beta phase.
          This means that we're inviting a select group of users to test our
          application and provide feedback before its official launch. Thank you
          for your support and we can't wait to share our vision of Claude with
          the world!
        </p>
      </n-gi>
    </n-grid>
  </div>
</template>

<script setup>
import { LogoGoogle } from "@vicons/ionicons5";
</script>

<style lang="sass" scoped>
.header
  position: absolute
  padding: 2em
.welcome, .description
  height: 100vh
  display: flex
  flex-direction: column
  justify-content: center
  // padding: 0 1.5rem
.welcome
  width: 60%
  max-width: 400px
  display: flex
  flex-direction: column
  align-items: center
  flex-wrap: nowrap
  margin: auto
  .muteted
    opacity: 0.8
    font-size: 0.65rem
    text-align: justify
</style>
