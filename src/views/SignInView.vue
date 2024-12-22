<template>
  <div class="sign-in-container">
    <h1 class="title">Sign In</h1>
    <SignInForm />
    <CreateAccountPrompt />
  </div>
</template>

<script setup>
import SignInForm from '../components/SignInForm.vue'
import CreateAccountPrompt from '../components/CreateAccountPrompt.vue'
</script>

<style scoped>
.sign-in-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: 'Poppins', sans-serif;
}

.title {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #26303e;
}
</style>
