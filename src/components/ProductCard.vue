<template>
  <v-card 
    elevation="4"
    outlined 
    class="mx-4 my-4"
    max-width="320">
    <v-img
      height="350"
      :src="images[0].src"
    ></v-img>
    <v-card-title>{{ name }}</v-card-title>
    <v-card-subtitle> {{ shortDescr }}</v-card-subtitle> 
    <v-divider class="mx-4"></v-divider>
    <v-card-text> 
      {{ price }}
    </v-card-text>
    <v-card-actions >
      <v-btn class="mx-auto" @click="store.addItem(id)" >
        Buy
      </v-btn>
      <v-btn class="mx-auto" :to="'/catalog/' + id ">
        Details
      </v-btn>
      <v-btn class="mx-auto">
        <v-icon>mdi-heart-outline</v-icon>
      </v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>
  import {store} from '@/store'
  export default {
    name: 'ProductCard',
    props: {
      id: Number,
      name: String,
      shortDescr: String,
      price: Number,
      images: Array,
    },
    data: () => ({
      store
    }),
    methods:{

    }
  }
</script>
