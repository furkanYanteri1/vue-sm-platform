<template>
  <div class="posts-list">
    <!-- Back Home Header -->
    <div class="go-home" @click="goHome">
      <img src="/icon-back-home.png" alt="Back Home Icon" class="back-home-icon" />
      <h2>Go Home</h2>
    </div>

    <!-- Posts -->
    <div v-for="post in posts" :key="post.id" class="post">
      <div class="post-header">
        <h3 class="post-title">{{ post.title }}</h3>
      </div>
      <p class="post-body">{{ post.body }}</p>
      <button class="see-more">
        See More
        <img src="/icon-posts-see-more.png" alt="See More Icon" class="see-more-icon" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchUserPosts } from '../api/postsService.js'

const props = defineProps({
  userId: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['goHome'])

const posts = ref([])

onMounted(async () => {
  try {
    posts.value = await fetchUserPosts(props.userId)
  } catch (error) {
    console.error('Error fetching user posts:', error)
  }
})

const goHome = () => {
  emit('goHome')
}
</script>

<style scoped>
.posts-list {
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

.post {
  position: relative; /* Position for the container */
  border-bottom: 1px solid #e0e0e0;
  padding: 20px 0;
  padding-right: 50px; /* Add space for the button */
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
}

.see-more {
  font-family: 'Poppins', sans-serif;
  position: absolute; /* Place at the bottom-right */
  right: 0;
  bottom: 20px;
  background: none;
  border: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
}

.see-more-icon {
  width: 32px;
  height: 32px;
}

.post-body {
  font-size: 14px;
  color: #26303e;
  margin-top: 10px;
}
</style>
