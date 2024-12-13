export async function fetchUserPosts(userId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
  if (!response.ok) {
    throw new Error('Failed to fetch user posts')
  }
  return await response.json()
}
