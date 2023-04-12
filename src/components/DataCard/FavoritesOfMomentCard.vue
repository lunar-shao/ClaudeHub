<script setup>
import DataCard from "@/components/DataCard/DataCard.vue";
</script>

<template>
  <DataCard
    class="assistant-card"
    title="Favorites of the Moment"
    icon="/logo/trophy.webp"
    color="#fafafa"
  >
    <n-grid cols="2">
      <n-gi>
        <n-h3>Televison</n-h3>
      </n-gi>
      <n-gi>
        <n-h3>Movie</n-h3>
      </n-gi>
    </n-grid>
  </DataCard>
</template>
