<template>
  <div class="sidebar">
    <!-- Top Section -->
    <div class="sidebar-top">
      <ul>
        <template v-if="userId">
          <li
            class="sidebar-list-item"
            :class="{ active: activeListItem === 'todos' }"
            @click="setActiveItem('todos')"
          >
            <img src="/icon-sidebar-todos.png" alt="Todos Icon" class="icon" />
            <span>Todos</span>
          </li>
          <li
            class="sidebar-list-item"
            :class="{ active: activeListItem === 'posts' }"
            @click="setActiveItem('posts')"
          >
            <img src="/icon-sidebar-posts.png" alt="Posts Icon" class="icon" />
            <span>Posts</span>
          </li>
          <li
            class="sidebar-list-item"
            :class="{ active: activeListItem === 'albums' }"
            @click="setActiveItem('albums')"
          >
            <img src="/icon-sidebar-albums.png" alt="Albums Icon" class="icon" />
            <span>Albums</span>
          </li>
        </template>
        <template v-else>
          <li
            class="sidebar-list-item"
            :class="{ active: activeListItem === 'users' }"
            @click="setActiveItem('users')"
          >
            <img src="/icon-sidebar-users.png" alt="Users Icon" class="icon" />
            <span>Users</span>
          </li>
        </template>
      </ul>
    </div>

    <!-- Spacer -->
    <div class="spacer"></div>

    <!-- Bottom Section -->
    <div class="sidebar-bottom">
      <img src="/n2m-bottom.png" alt="N2Mobil Logo" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  userId: {
    type: Number,
    required: false, // Optional; will be null/undefined if no profile is selected
  },
})

const activeListItem = ref('users') // Default active item is "Users"

// Automatically set the default active item when `userId` changes
watch(
  () => props.userId,
  (newUserId) => {
    if (newUserId) {
      activeListItem.value = 'todos' // Default active item is "Todos" when a profile card is clicked
    } else {
      activeListItem.value = 'users' // Reset to "Users" when no profile card is selected
    }
  }
)

const setActiveItem = (item) => {
  activeListItem.value = item // Update the active item when a list item is clicked
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
}

.sidebar-bottom img {
  width: 228px;
  height: auto;
}
</style>
