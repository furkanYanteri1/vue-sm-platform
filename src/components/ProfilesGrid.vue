<template>
  <div class="profiles-grid">
    <div class="profile-card" v-for="n in 12" :key="n"></div>
  </div>
</template>
  
  <script setup>
// No logic required for now
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

.profile-card {
  background-color: red;
  height: 150px;
  border-radius: 8px;
}
</style>
  