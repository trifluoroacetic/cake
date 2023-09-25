<script setup lang="ts">
const { status, data, signIn, signOut } = useAuth()
</script>
<template>
  <div v-if="status == 'authenticated'">
    <p>Hello, {{ data?.user?.name }}</p>
    <button @click="()=>signOut()">Logout</button>
  </div>
  <div v-if="status == 'unauthenticated'">
    <p>Hello!</p>
    <button @click="()=>signIn('keycloak')">Login</button>
  </div>
</template>
