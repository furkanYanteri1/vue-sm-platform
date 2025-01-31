<template>
  <div class="create-account-prompt">
    <p>Don't have an account?</p>
    <button @click="redirectToSignUp" class="create-account-button">Create Account</button>
  </div>
</template>

<script setup>
const redirectToSignUp = () => {
  console.log('Redirecting to Create Account page...')
}
</script>

<style scoped>
.create-account-prompt {
  margin-top: 20px;
  text-align: center;
}

.create-account-button {
  background: none;
  border: none;
  color: #4f359b;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.3s;
}

.create-account-button:hover {
  color: #382980;
}
</style>
