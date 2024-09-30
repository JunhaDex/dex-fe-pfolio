<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>
<Footer />
<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer.vue'
</script>
<style scoped></style>
