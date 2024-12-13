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
import { useProfilesStore } from '../stores/profilesStore.js'

const profilesStore = useProfilesStore()
const selectedUserId = ref(null)

const selectUser = (userId) => {
  selectedUserId.value = userId
  profilesStore.setActiveMenuItem('Todos') // Set "Todos" as active by default
}

const goHome = () => {
  selectedUserId.value = null
  profilesStore.setActiveMenuItem('Users') // Reset to "Users" when going home
}
</script>

<style scoped>
.home-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.sidebar {
  flex-shrink: 0;
}

.content {
  flex-grow: 1;
  overflow-y: auto;
  height: 100%;
}
</style>
