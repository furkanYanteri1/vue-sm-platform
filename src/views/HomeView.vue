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

    <!-- Profile Cards Section -->
    <div class="profile-cards-section">
      <div class="profile-card" v-for="n in 12" :key="n"></div>
    </div>
  </div>
</template>

<script setup>
// No logic required for now
</script>

<style scoped>
/* Main container layout */
.home-container {
  display: flex;
  height: 100vh;
}

/* Sidebar styles */
.sidebar {
  border: 1px solid red;
  width: 260px;
  height: 100%; /* Sidebar height adjusted to be dynamic */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 0;
  background-color: #f4f4f4; /* Light gray for contrast */
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
  width: 80px; /* Adjust size as needed */
  margin-top: 1rem;
}

/* Profile Cards Section */
.profile-cards-section {
  border: 1px solid blue;
  width: calc(100% - 260px); /* Ensure the profile cards section takes up the remaining space */
  height: 100vh; /* Remove fixed height to make it take up the full screen */
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Always 3 cards per row */
  gap: 1rem;
  padding: 1rem;
  overflow-y: auto; /* Allow scrolling if content exceeds the screen */
}

.profile-card {
  background-color: red;
  height: 150px; /* Adjust height as needed */
  border-radius: 8px;
}
</style>
