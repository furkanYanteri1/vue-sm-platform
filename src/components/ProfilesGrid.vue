<template>
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
.profiles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
</style>
