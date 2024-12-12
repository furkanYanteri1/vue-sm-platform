<template>
  <div class="home-container">
    <!-- Sidebar Component -->
    <Sidebar class="sidex" />

    <!-- Profiles Grid Section -->
    <div class="content">
      <ProfilesGrid />
    </div>
  </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue'
import ProfilesGrid from '../components/ProfilesGrid.vue'
</script>

<style scoped>
.home-container {
  border: 1px solid pink;
  display: flex;
  height: 100vh;
  overflow: hidden; /* Prevents scrolling of the entire page */
}

.sidebar {
  flex-shrink: 0; /* Prevents the sidebar from shrinking */
}

.content {
  flex-grow: 1; /* Allows the content area to take up remaining space */
  overflow-y: auto; /* Enables scrolling for the right section */
  height: 100%; /* Ensures the content area fills the full height */
}
.sidex {
  border: 1px solid red;
}
</style>
