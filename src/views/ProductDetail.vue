<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h1> {{ name }}</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <lingallery :iid.sync="currentId" :responsive="true" :items="images"/>
            </v-col>
            <v-col cols="6">
                <v-row>
                    <v-col cols="12">
                        <p class="font-weight-bold text-justify">
                            {{ shortDescr }}
                        </p>
                        <p class="text-justify">
                            {{ description }}
                        </p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <p>
                            <span class="font-weight-bold">Category:</span>
                            {{ category }}
                        </p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <p class="text-h5 font-weight-bold">
                            Price:
                        </p>
                        <p class="text-h5">
                            {{price}}$
                        </p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-btn class="mx-2" @click="store.addItem(id)">
                            Add to <v-icon>mdi-cart</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
                
            </v-col>
        </v-row>
    </v-container>
    
</template>
<script>
import sampleProducts from '@/data/products';
import {store} from '@/store'

export default {
    name: 'ProductDetail',
    data: () => ({
        id: 0,
        name: '',
        shortDescr: '',
        description: '',
        price: '',
        images: [],
        category: '',
        store
    }),
    mounted () {
        this.id = this.$route.params.id
        this.getProductByID(this.id)

    },
    computed: {
    },
    methods: {
        getProductByID (id) {
            let found = sampleProducts.find(product => product.id == id)
            this.name = found.name
            this.shortDescr = found.shortDescr
            this.description = found.description
            this.price = found.price
            this.images = found.images
            this.category = found.category
        }
    }

}
</script>