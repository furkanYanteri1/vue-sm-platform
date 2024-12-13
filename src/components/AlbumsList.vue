<template>
  <div class="albums-grid-container">
    <div class="go-home" @click="goHome">
      <img src="/icon-back-home.png" alt="Back Home Icon" class="back-home-icon" />
      <h2>Go Home</h2>
    </div>
    <div class="albums-grid">
      <div v-for="album in albums" :key="album.id" class="album">
        <img :src="album.thumbnailUrl" :alt="album.title" class="album-thumbnail" />
        <p class="album-title">{{ album.title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchUserAlbums } from '../api/albumsService.js'

const props = defineProps({
  userId: {
    type: Number,
    required: true,
  },
})

const albums = ref([])

onMounted(async () => {
  try {
    albums.value = await fetchUserAlbums(props.userId)
  } catch (error) {
    console.error('Error fetching albums:', error)
  }
})
</script>

<style scoped>
.albums-grid-container {
  padding: 20px;
  font-family: 'Poppins', sans-serif;
}
.go-home {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  cursor: pointer;
}

.go-home h2 {
  font-size: 20px;
  font-weight: 600;
  color: #26303e;
  margin: 0;
}

.back-home-icon {
  width: 24px;
  height: 24px;
}

.header {
  height: 20px;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
  color: red;
  margin: 28px 0px 20px 2px;
}

.albums-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Matches the layout of ProfilesGrid.vue */
  gap: 1rem;
}

.album {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #d8d9dd;
  border-radius: 12px;
  background-color: white;
  padding: 16px;
  font-family: 'Poppins', sans-serif;
  transition: box-shadow 0.2s ease;
}

.album:hover {
  box-shadow: 0px 0px 48px 0px #55555540;
}

.album-thumbnail {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

.album-title {
  margin-top: 8px;
  font-size: 14px;
  text-align: center;
  color: #555555;
}
</style>
