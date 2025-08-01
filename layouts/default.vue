<script setup>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col font-sans text-dark bg-white">
    <AppHeader />
    <main class="flex-grow">
      <slot /> 
    </main>
    <AppFooter />
  </div>
</template>
