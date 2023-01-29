<template>
    <v-container>
        <v-row>
            <v-col cols="3">
                <p class="font-weight-black">
                    Product image
                </p>
            </v-col>
            <v-col cols="3">
                <p class="font-weight-black">
                    Product
                </p>
            </v-col>
            <v-col cols="3">
                <p class="font-weight-black">
                    Quantity
                </p>
            </v-col>
            <v-col cols="3">
                <p class="font-weight-black">
                    Total Price
                </p>
            </v-col>
        </v-row>
        <v-divider class="my-1"></v-divider>
        <v-row v-for="item in store.items" :key="item.name">
            <v-col cols="3">
                <v-img :src="item.images[0].src" class="my-auto"></v-img>
            </v-col>
            <v-col cols="3" class="d-flex align-content-center flex-wrap">
                <p class="font-weight-black mx-auto">{{ item.name }}</p>
                <p class="mx-auto"> 
                    {{ item.shortDescr }}
                </p>
            </v-col>
            <v-col cols="3" class="d-flex align-content-center flex-wrap">
                <p class="mx-auto text-left">
                    <v-btn icon small @click="store.decrease(item)">
                        <v-icon>
                            mdi-minus
                        </v-icon>
                    </v-btn>
                    {{item.quantity}}
                    <v-btn icon small @click="store.increase(item)">
                        <v-icon>
                            mdi-plus
                        </v-icon>
                    </v-btn>
                </p>
            </v-col>
            <v-col cols="3" class="d-flex align-content-center flex-wrap">
                <p class="mx-auto">
                    {{ item.quantity * item.price }}$
                    <v-btn icon small @click="store.remove(item)"> 
                        <v-icon>
                            mdi-delete
                        </v-icon>
                    </v-btn>
                </p>
            </v-col>
        </v-row>
        <v-divider class="my-1"></v-divider>
        <v-row v-if="store.items.length > 0">
            <v-col cols="12">
                <p class="font-weight-black text-h6">
                    Total cost: {{ totalCost }} $
                </p>
            </v-col>
        </v-row>
        <v-row v-if="store.items.length == 0"> 
            <v-col>
                <p> You Should Add to cart some items</p>
            </v-col>
        </v-row>
    </v-container>
  
</template>
<script>
import {store} from '@/store'
  export default {
    name: 'ShoppingCart',
    data: () => ({
        store,
    }),

    computed: {
      totalCost () {
        let totalCost = 0
        this.store.items.forEach(item => {
            totalCost += item.price * item.quantity
        })
        return totalCost
      }
    },
    mounted () {
    },
    watch:{
    },
    methods: {
    
    },
  }
</script>