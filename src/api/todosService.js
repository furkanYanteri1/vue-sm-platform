export async function fetchUserTodos(userId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
  if (!response.ok) {
    throw new Error('Failed to fetch user todos')
  }
  return response.json()
}
