<template>
  <v-card 
    elevation="4"
    outlined 
    class="mx-4 my-4"
    max-width="320" min-width="320">
    <v-img
      height="350"
      :src="images[0].src"
    >
      <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular
            indeterminate
            color="dark lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
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
