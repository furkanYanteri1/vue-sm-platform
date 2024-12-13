export async function fetchPostComments(postId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
  if (!response.ok) throw new Error('Failed to fetch comments')
  const comments = await response.json()

  // Add avatar URL for comments
  return comments.map((comment, index) => ({
    ...comment,
    avatarURL: `https://randomuser.me/api/portraits/thumb/${index % 2 === 0 ? 'men' : 'women'}/${index}.jpg`,
  }))
}
