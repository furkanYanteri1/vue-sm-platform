<template>
  <div class="profile-card">
    <!-- Card Header -->
    <div class="card-header">
      <div class="profile-picture"></div>
      <div class="profile-name">John Doe</div>
    </div>

    <!-- Card Details -->
    <div class="card-details">
      <div class="card-row">
        <img src="/icon-profile-location.png" alt="Location Icon" class="icon" />
        <span class="label">Location:</span>
        <span class="value">xxxx</span>
      </div>
      <div class="card-row">
        <img src="/icon-profile-company.png" alt="Company Icon" class="icon" />
        <span class="label">Company:</span>
        <span class="value">xxxx</span>
      </div>
      <div class="card-row">
        <img src="/icon-profile-website.png" alt="Website Icon" class="icon" />
        <span class="label">Website:</span>
        <span class="value">xxxx</span>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
// No logic required for now
</script>
  
  <style scoped>
.profile-card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.profile-picture {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #cccccc; /* Placeholder color for profile picture */
}

.profile-name {
  font-weight: bold;
  font-size: 1.2rem;
}

.card-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card-row {
  display: flex;
  align-items: center;
  gap: 8px; /* Space between icon and text */
}

.icon {
  width: 20px; /* Adjust size as needed */
  height: 20px;
}

.label {
  font-weight: bold;
  color: #666666;
}

.value {
  color: #333333;
}
</style>
  