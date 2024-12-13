<template>
  <div class="post-dialog">
    <div class="dialog-content">
      <button class="close-button" @click="closeDialog">×</button>
      <div class="dialog-body">
        <!-- Post Body Section -->
        <div class="post-body">
          <h2 class="post-title">{{ post.title }}</h2>
          <p>{{ post.body }}</p>
        </div>

        <!-- Vertical Separator -->
        <div class="separator"></div>

        <!-- Comments Section -->
        <div class="comments-section">
          <h3>Comments</h3>
          <div class="comments-list">
            <div v-for="comment in comments" :key="comment.id" class="comment">
              <img :src="comment.avatarURL" alt="Commenter Avatar" class="comment-avatar" />
              <div class="comment-details">
                <p class="comment-author">{{ comment.name }}</p>
                <p class="comment-text">{{ comment.body }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchPostComments } from '../api/commentsService.js'

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
  isVisible: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['close'])

const comments = ref([])

onMounted(async () => {
  try {
    comments.value = await fetchPostComments(props.post.id)
  } catch (error) {
    console.error('Error fetching comments:', error)
  }
})

const closeDialog = () => {
  emit('close')
}
</script>

<style scoped>
.post-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.dialog-content {
  background-color: white;
  width: 80%;
  max-width: 800px;
  height: 80%; /* Dynamically adjust to viewport height */
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.dialog-body {
  display: flex;
  gap: 20px;
  flex-grow: 1;
  overflow: hidden; /* Prevents overall dialog content from overflowing */
}

.post-body {
  flex: 2;
  font-size: 14px;
  color: #26303e;
  overflow-y: auto; /* Ensures the left side is scrollable */
}

.post-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
}

.separator {
  width: 1px;
  background-color: #e0e0e0;
}

.comments-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* Ensures the comments section is scrollable */
}

.comments-section h3 {
  margin-bottom: 10px;
}
.comments-list {
  flex-grow: 1; /* Ensures it grows with the parent container */
  overflow-y: auto; /* Adds scrolling for comments */
}

.comment {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 15px;
}

.comment-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.comment-details {
  flex: 1;
}

.comment-author {
  font-size: 14px;
  font-weight: 600;
}

.comment-text {
  font-size: 12px;
  color: #555;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  border: none;
  background: none;
  cursor: pointer;
}
</style>
