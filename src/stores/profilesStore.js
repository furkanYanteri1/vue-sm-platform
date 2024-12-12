import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchUsersWithGender } from '../api/userService.js'

export const useProfilesStore = defineStore('profiles', () => {
  const users = ref([])

  const fetchProfiles = async () => {
    try {
      users.value = await fetchUsersWithGender()
      console.log('Users fetched and stored in Vuex:', users.value)
    } catch (error) {
      console.error('Error fetching profiles:', error)
    }
  }

  return {
    users,
    fetchProfiles,
  }
})
