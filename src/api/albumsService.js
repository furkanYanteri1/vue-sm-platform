// src/api/albumsService.js

export async function fetchUserAlbums(userId) {
  const albumData = []
  const placeholderAPI = `https://jsonplaceholder.typicode.com/albums/${userId}/photos`

  try {
    const response = await fetch(placeholderAPI)
    if (!response.ok) throw new Error('Failed to fetch albums')
    const data = await response.json()

    // Extract only the first 12 photos for simplicity
    albumData.push(...data.slice(0, 12))
  } catch (error) {
    console.error('Error fetching albums:', error)
  }

  return albumData
}
