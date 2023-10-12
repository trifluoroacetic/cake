<script setup lang="ts">
const { status, data, signIn, signOut } = useAuth()
</script>

<template>
  <div v-if="status == 'authenticated'">
    <VCard :title="`Hello, ${data?.user?.name}`">
      <VCardActions>
        <VBtn @click="()=>signOut()">Logout</VBtn>
      </VCardActions>
    </VCard>    
  </div>
  <div v-if="status == 'unauthenticated'">
    <VCard title="Hello">
      <VCardActions>
        <VBtn @click="()=>signIn('keycloak')">Login</VBtn>
      </VCardActions>
    </VCard>
  </div>
</template>
