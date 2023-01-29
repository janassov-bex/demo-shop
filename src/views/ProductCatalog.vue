<template>
    <v-container>
        <v-row >
            <h1 class="mx-auto"> My awesome catalog</h1>
        </v-row>
        <v-row>
            <!-- 
            <v-col cols="2">
                <ProductFilters/>
            </v-col> -->
            <v-col cols="12">
                <v-row>
                    <ProductCard v-for="product in products" :key="product.id"
                        :id="product.id"
                        :name="product.name"
                        :shortDescr="product.shortDescr"
                        :images="product.images"
                        :price="product.price"
                    />
                </v-row>
            </v-col>

        </v-row>
        

    </v-container>
</template>
<script>
import ProductCard from '@/components/ProductCard.vue';
//import ProductFilters from '@/components/ProductFilters.vue';
import sampleProducts from '@/data/products'

export default {
    name: 'ProductCatalog',
    components: {
        ProductCard,
        //ProductFilters
    },
    data: () => ({
        products: sampleProducts
    }),

}
</script>
