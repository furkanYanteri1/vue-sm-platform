<template>
  <div class="home-container">
    <Sidebar :userId="selectedUserId" />

    <div class="content">
      <ProfilesGrid v-if="!selectedUserId" @userSelected="selectUser" />
      <TodosList v-else-if="activeMenuItem === 'Todos'" :userId="selectedUserId" @goHome="goHome" />
      <PostsList v-else-if="activeMenuItem === 'Posts'" :userId="selectedUserId" @goHome="goHome" />
      <AlbumsList
        v-else-if="activeMenuItem === 'Albums'"
        :userId="selectedUserId"
        @goHome="goHome"
      />
    </div>
  </div>
</template>

<script setup>
import Sidebar from '../components/SideBar.vue'
import ProfilesGrid from '../components/ProfilesGrid.vue'
import TodosList from '../components/TodosList.vue'
import PostsList from '../components/PostsList.vue'
import AlbumsList from '../components/AlbumsList.vue'
import { ref, computed } from 'vue'
import { useProfilesStore } from '../stores/profilesStore.js'

const profilesStore = useProfilesStore()
const selectedUserId = ref(null)

const activeMenuItem = computed(() => profilesStore.activeMenuItem)

const selectUser = (userId) => {
  selectedUserId.value = userId
  profilesStore.setActiveMenuItem('Todos')
}

const goHome = () => {
  selectedUserId.value = null
  profilesStore.setActiveMenuItem('Users')
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
