<template>
  <div class="home-container">
    <!-- Sidebar Component -->
    <Sidebar />

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
  display: flex;
  height: 100vh;
  overflow: hidden; /* Prevents scrolling of the entire page */
}

.sidebar {
  flex-shrink: 0; /* Prevents the sidebar from shrinking */
}

.content {
  flex-grow: 1; /* Ensures the content takes up the remaining space */
  width: 100%; /* Make sure it stretches to occupy the full horizontal space */
  overflow-y: auto; /* Enables scrolling for the right section */
  height: 100%; /* Ensures the content area fills the full height */
}
</style>
