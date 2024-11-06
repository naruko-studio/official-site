<template>
  <NuxtLayout :name="layout">
    <UContainer>
      <NuxtPage />
    </UContainer>
  </NuxtLayout>
</template>

<script setup lang="ts">
const layout = "default"
</script>
