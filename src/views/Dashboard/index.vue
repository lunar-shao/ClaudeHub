<script setup>
import LastAddedCard from "@/components/DataCard/LastAddedCard.vue";
import AllEntriesCard from "@/components/DataCard/AllEntriesCard.vue";
import FavoritesOfMomentCard from "@/components/DataCard/FavoritesOfMomentCard.vue";
import MainLayout from "@/layout/MainLayout.vue";
</script>

<template>
  <MainLayout class="dashboard">
    <n-space vertical size="large">
      <div>
        <n-h1 style="margin: 0">Hi Claude!</n-h1>
        <n-space justify="space-between">
          <n-text class="lighter">How are you doing?</n-text>
          <n-text class="lighter">12034 entries</n-text>
        </n-space>
      </div>

      <n-grid y-gap="24" x-gap="24" cols="1 768:2 1000:3">
        <n-gi span="2">
          <FavoritesOfMomentCard />
        </n-gi>
        <n-gi>
          <LastAddedCard />
        </n-gi>
        <n-gi span="3">
          <AllEntriesCard />
        </n-gi>
      </n-grid>
    </n-space>
  </MainLayout>
</template>

<style lang="sass">
.dashboard
  .box
    height: 100%
</style>
