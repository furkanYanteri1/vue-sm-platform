<template>
  <div class="profile-card" @click="selectUser">
    <!-- Card Header -->
    <div class="card-header">
      <img class="profile-picture" :src="avatarURL" alt="Profile Picture" />
      <div class="profile-details">
        <div class="profile-name">{{ name }}</div>
        <div class="profile-contact">
          <div class="profile-email">{{ email }}</div>
          <div class="profile-phone">{{ phone }}</div>
        </div>
      </div>
    </div>

    <!-- Card Details -->
    <div class="card-details">
      <div class="card-row">
        <div class="icon-title">
          <img src="/icon-profile-location.png" alt="Location Icon" class="icon" />
          <span class="label">Location:</span>
        </div>
        <span class="value">{{ location }}</span>
      </div>

      <div class="card-row">
        <div class="icon-title">
          <img src="/icon-profile-company.png" alt="Company Icon" class="icon" />
          <span class="label">Company:</span>
        </div>
        <span class="value">{{ company }}</span>
      </div>
      <div class="card-row">
        <div class="icon-title">
          <img src="/icon-profile-website.png" alt="Website Icon" class="icon" />
          <span class="label">Website:</span>
        </div>
        <span class="value">{{ website }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  location: String,
  company: String,
  website: String,
  avatarURL: String,
  email: String,
  phone: String,
  userId: Number, // Ensure userId is passed
})

const emit = defineEmits(['userSelected'])

const selectUser = () => {
  emit('userSelected', props.userId) // Access userId directly from props
}
</script>

<style scoped>
.profile-card {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: 'Poppins', sans-serif;
  transition: box-shadow 0.2s ease;
  border: 1px solid #d8d9dd;
  cursor: pointer;
}

.profile-card:hover {
  box-shadow: 0px 0px 48px 0px #55555540;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.profile-picture {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-details {
  display: flex;
  flex-direction: column;
}

.profile-name {
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  color: black;
}

.profile-contact {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 14px;
  font-weight: 300;
  color: gray;
  margin-top: 4px;
}

.card-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  color: #313e50;
}

.card-row {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}

.icon-title {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon {
  width: 20px;
  height: 20px;
}

.label {
  font-weight: bold;
}

.value {
  color: #333333;
}
</style>
