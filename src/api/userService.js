import { fetchGenderByName } from './genderService.js'

export async function fetchUsersWithGender() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!response.ok) throw new Error('Failed to fetch users')
  const userData = await response.json()

  // Process each user, fetching their gender
  for (const user of userData) {
    if (user.name) {
      const firstName = user.name.split(' ')[0]
      try {
        user.gender = await fetchGenderByName(firstName)
      } catch {
        user.gender = 'unknown'
      }
    } else {
      user.gender = 'unknown'
    }
  }

  // Return the fully processed array
  return userData
}
