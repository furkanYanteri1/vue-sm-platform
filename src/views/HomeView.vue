<template>
  <div class="home-container">
    <Sidebar :userId="selectedUserId" />

    <div class="content">
      <ProfilesGrid v-if="!selectedUserId" @userSelected="selectUser" />
      <TodosList v-else :userId="selectedUserId" @goHome="goHome" />
    </div>
  </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue'
import ProfilesGrid from '../components/ProfilesGrid.vue'
import TodosList from '../components/TodosList.vue'
import { ref } from 'vue'

const selectedUserId = ref(null)

const selectUser = (userId) => {
  selectedUserId.value = userId
}

const goHome = () => {
  selectedUserId.value = null // Reset the selected user to return to home view
}
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
  overflow-y: auto; /* Enables scrolling for the right section */
  height: 100%; /* Ensures the content area fills the full height */
}
</style>
