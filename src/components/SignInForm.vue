<template>
  <form class="sign-in-form" @submit.prevent="handleSignIn">
    <label for="email">Email:</label>
    <input id="email" v-model="email" type="email" required placeholder="Enter your email" />

    <label for="password">Password:</label>
    <input
      id="password"
      v-model="password"
      type="password"
      required
      placeholder="Enter your password"
    />

    <button type="submit" class="sign-in-button">Sign In</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const handleSignIn = () => {
  console.log('Sign-In Attempt:', { email: email.value, password: password.value })
}
</script>

<style scoped>
.sign-in-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 400px;
}

label {
  font-size: 14px;
  font-weight: 500;
  color: #26303e;
}

input {
  padding: 8px;
  border: 1px solid #d8d9dd;
  border-radius: 8px;
  font-size: 14px;
  width: 100%;
}

input:focus {
  border-color: #4f359b;
  outline: none;
}

.sign-in-button {
  background-color: #4f359b;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

.sign-in-button:hover {
  background-color: #382980;
}
</style>
