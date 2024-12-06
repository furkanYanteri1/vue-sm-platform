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
    />
  </div>
</template>
  
  <script setup>
import { ref, onMounted } from 'vue'
import ProfileCard from '../components/ProfileCard.vue'
import { fetchUsersWithGender } from '../api/userService.js'

const users = ref([])

onMounted(async () => {
  try {
    users.value = await fetchUsersWithGender()
    console.log('Users with gender and avatar:', users.value)
  } catch (error) {
    console.error('Error fetching and processing users:', error)
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
  