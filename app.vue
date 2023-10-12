<template>
    <VThemeProvider theme="dark" with-background class="pa-14">
      <VApp>
        <VAppBar>
          <template v-slot:append>
            <h3>Cake V0.1</h3>
            <VBtn icon="mdi-heart"></VBtn>
  
            <VBtn icon="mdi-magnify"></VBtn>
  
            <VBtn icon="mdi-dots-vertical"></VBtn>
          </template>
        </VAppBar>

        <NuxtLayout>
          <NuxtPage/>
        </NuxtLayout>

        <VBottomNavigation>
          <VBtn value="recent">
          <VIcon>mdi-history</VIcon>

          <span>Recent</span>
          </VBtn>

          <VBtn value="favorites">
          <VIcon>mdi-heart</VIcon>

          <span>Favorites</span>
          </VBtn>

          <VBtn value="nearby">
          <VIcon>mdi-map-marker</VIcon>

          <span>Nearby</span>
          </VBtn>
      </VBottomNavigation>  
      
      </VApp>
    </VThemeProvider>
</template>

<style scoped>
h1 {
  border: 2px solid red;
}
</style>