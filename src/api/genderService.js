export async function fetchGenderByName(name) {
  const response = await fetch(`https://api.genderize.io/?name=${encodeURIComponent(name)}`)
  if (!response.ok) {
    throw new Error('Failed to fetch gender data')
  }
  const data = await response.json()
  return data.gender
}
