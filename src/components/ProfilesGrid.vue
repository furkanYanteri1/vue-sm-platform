<template>
  <div class="profiles-grid-container">
    <h2 class="header">All Users</h2>
    <div class="profiles-grid">
      <ProfileCard
        v-for="user in users"
        :key="user.id"
        :name="user.name"
        :location="user.address.city"
        :company="user.company.name"
        :website="user.website"
        :avatarURL="user.avatarURL"
        :email="user.email"
        :phone="user.phone"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import ProfileCard from '../components/ProfileCard.vue'
import { useProfilesStore } from '../stores/profilesStore.js'

const profilesStore = useProfilesStore()
// Computed property for users from the store
const users = computed(() => profilesStore.users)
// Fetch profiles on mount
onMounted(() => {
  if (!users.value.length) {
    profilesStore.fetchProfiles()
  }
})
</script>

<style scoped>
.profiles-grid-container {
  position: relative;
  padding-left: 10px;
  padding-right: 8px;
}

.header {
  height: 20px;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
  color: #26303e;
  margin: 28px 0px 20px 2px;
}

.profiles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
</style>
