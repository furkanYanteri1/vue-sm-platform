<template>
  <div class="profiles-grid">
    <ProfileCard v-for="n in 12" :key="n" />
  </div>
</template>
  
  <script setup>
import ProfileCard from './ProfileCard.vue'
</script>
  
  <style scoped>
.profiles-grid {
  border: 1px solid blue;
  width: calc(100% - 260px);
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem;
  overflow-y: auto;
}
</style>
  