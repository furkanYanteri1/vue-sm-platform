<template>
  <div class="sidebar">
    <div class="sidebar-top">
      <ul>
        <template v-if="props.userId">
          <li
            class="sidebar-list-item"
            :class="{ active: activeMenuItem === 'Todos' }"
            @click="setActiveMenu('Todos')"
          >
            <img src="/icon-sidebar-todos.png" alt="Todos Icon" class="icon" />
            <span>Todos</span>
          </li>
          <li
            class="sidebar-list-item"
            :class="{ active: activeMenuItem === 'Posts' }"
            @click="setActiveMenu('Posts')"
          >
            <img src="/icon-sidebar-posts.png" alt="Posts Icon" class="icon" />
            <span>Posts</span>
          </li>
          <li
            class="sidebar-list-item"
            :class="{ active: activeMenuItem === 'Albums' }"
            @click="setActiveMenu('Albums')"
          >
            <img src="/icon-sidebar-albums.png" alt="Albums Icon" class="icon" />
            <span>Albums</span>
          </li>
        </template>
        <template v-else>
          <li
            class="sidebar-list-item"
            :class="{ active: activeMenuItem === 'Users' }"
            @click="setActiveMenu('Users')"
          >
            <img src="/icon-sidebar-users.png" alt="Users Icon" class="icon" />
            <span>Users</span>
          </li>
        </template>
      </ul>
    </div>

    <div class="spacer"></div>
    <div class="sidebar-bottom">
      <img src="/n2m-bottom.png" alt="N2Mobil Logo" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useProfilesStore } from '../stores/profilesStore.js'

const props = defineProps({
  userId: {
    type: Number,
    required: false, // Optional; will be null/undefined if no profile is selected
  },
})

const profilesStore = useProfilesStore()

// Computed property to track the active menu item
const activeMenuItem = computed(() => profilesStore.activeMenuItem)

// Function to update the active menu item in the store
const setActiveMenu = (menuItem) => {
  profilesStore.setActiveMenuItem(menuItem)
}
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 260px;
  height: 100%;
  padding: 24px 0;
  background-color: #f4f4f4;
  border-right: 1px solid #e0e0e0;
  font-family: 'Poppins', sans-serif;
}

.sidebar-top ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-list-item {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  color: #4f359b;
  margin-bottom: 10px;
  padding-left: 32px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* Active class for the selected item */
.sidebar-list-item.active {
  background-color: white;
}

.icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.spacer {
  flex-grow: 1;
}

.sidebar-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px; /* Adjust height as needed to fit the image */
}

.sidebar-bottom img {
  width: 228px;
  height: auto;
}
</style>
