import { fetchGenderByName } from './genderService.js'

export async function fetchUsersWithGender() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!response.ok) throw new Error('Failed to fetch users')
  const userData = await response.json()

  // Process each user
  for (const user of userData) {
    // Determine gender
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

    // Compute avatarURL based on gender and user.id
    // Fallback: if gender is 'female', use 'women'; else use 'men'.
    const genderPath = user.gender === 'female' ? 'women' : 'men'
    // Note: randomuser.me supports IDs from 0-99. If `user.id` is out of that range,
    // you might want to mod it, e.g., user.id % 100, but for this example, we'll assume the IDs are suitable.
    user.avatarURL = `https://randomuser.me/api/portraits/${genderPath}/${user.id}.jpg`
  }

  return userData
}
