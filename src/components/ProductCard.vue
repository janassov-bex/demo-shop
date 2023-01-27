<template>
  <v-card 
    elevation="4"
    outlined 
    class="mx-4 my-4"
    max-width="320">
    <v-img
      height="350"
      src="@/assets/chair.jpg"
    ></v-img>
    <v-card-title>Cool Chair</v-card-title>
    <v-card-subtitle> A brand new chair</v-card-subtitle> 
    <v-divider class="mx-4"></v-divider>
    <v-card-text> 
      150$
    </v-card-text>
    <v-card-actions >
      <v-btn class="mx-auto">
        Buy
      </v-btn>
      <v-btn class="mx-auto">
        <v-icon>mdi-heart-outline</v-icon>
      </v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>
  export default {
    name: 'ProductCard',

    data: () => ({
      
    }),
  }
</script>
