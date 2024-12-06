<template>
  <div class="profiles-grid">
    <ProfileCard
      v-for="user in users"
      :key="user.id"
      :name="user.name"
      :location="user.address.city"
      :company="user.company.name"
      :website="user.website"
    />
  </div>
</template>
  
  <script setup>
import { ref, onMounted } from 'vue'
import ProfileCard from './ProfileCard.vue'

const users = ref([])

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!response.ok) throw new Error('Failed to fetch users')
    users.value = await response.json()
    console.log('Fetched Users:', users.value) // Logs the fetched user data
  } catch (error) {
    console.error('Error fetching users:', error)
  }
})
</script>
  
  <style scoped>
.profiles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 cards per row */
  gap: 1rem;
}
</style>
  