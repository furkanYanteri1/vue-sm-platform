<template>
  <div class="todos-list">
    <!-- Back Home Header -->
    <div class="go-home" @click="goHome">
      <img src="/icon-back-home.png" alt="Back Home Icon" class="back-home-icon" />
      <h2>Go Home</h2>
    </div>

    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <label>
          <input type="checkbox" :checked="todo.completed" />
          {{ todo.title }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchUserTodos } from '../api/todosService.js'

const props = defineProps({
  userId: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['goHome'])

const todos = ref([])

onMounted(async () => {
  try {
    todos.value = await fetchUserTodos(props.userId)
  } catch (error) {
    console.error('Error fetching user todos:', error)
  }
})

const goHome = () => {
  emit('goHome') // Emit the event to go back to the home view
}
</script>

<style scoped>
.todos-list {
  padding: 20px;
  font-family: 'Poppins', sans-serif;
}

.todos-list ul {
  list-style: none;
  padding: 0;
  font-size: 14px;
}

.todos-list li {
  margin: 10px 0;
}

.go-home {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  cursor: pointer; /* Add pointer cursor for better UX */
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
</style>
