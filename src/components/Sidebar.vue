<template>
  <div class="sidebar">
    <!-- Top Section -->
    <div class="sidebar-top">
      <ul>
        <li>
          <img src="/icon-profile-website.png" alt="Users Icon" class="icon" />
          <span>Users</span>
        </li>
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

<script setup></script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 260px;
  height: 100%;
  padding-top: 24px 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  background-color: #f4f4f4;
  border-right: 1px solid #e0e0e0; /* Optional: light border for separation */
}

.sidebar-top ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-top li {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #5f5f5f;
}

.sidebar-top .icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.spacer {
  flex-grow: 1;
}

.sidebar-bottom img {
  width: 80px;
  margin-top: 1rem;
  align-self: center;
}
</style>
