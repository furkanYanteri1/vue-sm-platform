<template>
  <div class="home-container">
    <!-- Sidebar -->
    <div class="sidebar">
      <div class="sidebar-top">
        <ul>
          <li>Users</li>
        </ul>
      </div>
      <div class="sidebar-bottom">
        <div class="spacer"></div>
        <img src="/fav-icon.png" alt="Logo" />
      </div>
    </div>

    <!-- Profiles Grid Section -->
    <ProfilesGrid />
  </div>
</template>

<script setup>
import ProfilesGrid from '../components/ProfilesGrid.vue'
</script>

<style scoped>
.home-container {
  display: flex;
  height: 100vh;
}

.sidebar {
  border: 1px solid red;
  width: 260px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 0;
  background-color: #f4f4f4;
}

.sidebar-top ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-top li {
  font-size: 1.2rem;
  font-weight: bold;
}

.spacer {
  flex-grow: 1;
}

.sidebar-bottom img {
  width: 80px;
  margin-top: 1rem;
}
</style>
