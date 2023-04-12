<script setup>
import DataCard from "@/components/DataCard/DataCard.vue";
</script>

<template>
  <DataCard title="New entries" icon="/logo/sparkles.webp">
    <n-list hoverable clickable>
      <n-list-item>
        <n-thing
          title="Better Late Than Never"
          content-style="margin-top: 10px;"
        >
          <template #description>
            <n-space size="small" style="margin-top: 4px">
              <n-tag :bordered="false" type="info" size="small"> Tag A </n-tag>
              <n-tag :bordered="false" type="info" size="small"> Tag B </n-tag>
            </n-space>
          </template>
        </n-thing>
      </n-list-item>
      <n-list-item>
        <n-thing title="Lorem Ipsum" content-style="margin-top: 10px;">
          <template #description>
            <n-space size="small" style="margin-top: 4px">
              <n-tag :bordered="false" type="info" size="small"> Tag C </n-tag>
              <n-tag :bordered="false" type="info" size="small"> Tag D </n-tag>
            </n-space>
          </template>
        </n-thing>
      </n-list-item>
    </n-list>
  </DataCard>
</template>

<style lang="sass" scoped></style>
