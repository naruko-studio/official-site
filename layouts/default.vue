<template>
  <div class="app-layout">
    <AppHeader />
    <main :class="main"><slot /></main>
    <AppFooter />
  </div>
</template>

<script setup>
const main = "app-main"
</script>
