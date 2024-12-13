import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchUsersWithGender } from '../api/userService.js'

export const useProfilesStore = defineStore('profiles', () => {
  const users = ref([])
  const activeMenuItem = ref('Users') // Users must be active by default in the sidebar

  // Fetch user profiles
  const fetchProfiles = async () => {
    try {
      users.value = await fetchUsersWithGender()
      console.log('Users fetched and stored in Vuex:', users.value)
    } catch (error) {
      console.error('Error fetching profiles:', error)
    }
  }

  // Set active menu item
  const setActiveMenuItem = (menuItem) => {
    activeMenuItem.value = menuItem
    console.log(`Active menu item set to: ${menuItem}`)
  }

  return {
    users,
    activeMenuItem,
    fetchProfiles,
    setActiveMenuItem,
  }
})
