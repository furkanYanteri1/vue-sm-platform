<template>
  <form class="sign-in-form" @submit.prevent="handleSignIn">
    <label for="email">Email:</label>
    <input
      id="email"
      v-model="email"
      type="email"
      :class="{ 'input-error': !isEmailValid && emailTouched }"
      @blur="emailTouched = true"
      required
      placeholder="Enter your email"
    />
    <p v-if="!isEmailValid && emailTouched" class="error-message"
      >Please enter a valid email address.</p
    >

    <label for="password">Password:</label>
    <input
      id="password"
      v-model="password"
      type="password"
      :class="{ 'input-error': !isPasswordValid && passwordTouched }"
      @blur="passwordTouched = true"
      required
      placeholder="Enter your password"
    />
    <p v-if="!isPasswordValid && passwordTouched" class="error-message"
      >Password must be at least 8 characters long.</p
    >

    <button type="submit" class="sign-in-button" :disabled="!isFormValid">Sign In</button>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'

const email = ref('')
const password = ref('')
const emailTouched = ref(false)
const passwordTouched = ref(false)

const isEmailValid = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
  return emailRegex.test(email.value)
})

// Password validation
const isPasswordValid = computed(() => password.value.trim().length >= 8)

// Form validation
const isFormValid = computed(() => isEmailValid.value && isPasswordValid.value)

// Handle form submission
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
  transition: border-color 0.3s;
}

input:focus {
  border-color: #4f359b;
  outline: none;
}

.input-error {
  border-color: red;
}

.error-message {
  font-size: 12px;
  color: red;
  margin: -8px 0 8px 0;
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

.sign-in-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.sign-in-button:hover:not(:disabled) {
  background-color: #382980;
}
</style>
