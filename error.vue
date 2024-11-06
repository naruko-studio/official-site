<template>
  <div class="app-layout">
    <AppHeader />
    <div
      :style="{
        'background-image':
          error.statusCode === 404
            ? 'linear-gradient(135deg, #eab308 35%, #f59e0b 100%);'
            : 'linear-gradient(135deg, #ff4d00 35%, #ff0000 100%);',
      }"
      class="flex min-h-[90vh] items-center text-white"
    >
      <div class="error-container">
        <div class="error-status-container">
          <div class="error-status">{{ error.statusCode }}</div>
        </div>
        <div class="error-message-container">
          <div class="error-message-title">
            <p>Oh...</p>
            <p>Something isn't right...</p>
            <p>:(</p>
          </div>
          <div class="error-message-description">{{ error.message }}</div>
          <button type="button" class="error-fix-button" @click="handleError">
            Go back home
          </button>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script setup>
defineProps({
  error: Object,
})

const handleError = () => clearError({ redirect: "/" })
// const errorType =
//   error.statusCode === 404
//     ? "background-image: linear-gradient(135deg, #eab308 35%, #f59e0b 100%);"
//     : "background-image: linear-gradient(135deg, #eab308 35%, #f59e0b 100%);"
</script>
