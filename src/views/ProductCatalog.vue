<template>
    <v-container>
        <v-row >
            <h1 class="mx-auto"> My awesome catalog</h1>
        </v-row>
        <v-row>
            <v-col cols="2">
                <ProductFilters/>
            </v-col>
            <v-col cols="10">
                <v-row>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </v-row>
            </v-col>

        </v-row>
        

    </v-container>
</template>
<script>
import ProductCard from '@/components/ProductCard.vue';
import ProductFilters from '@/components/ProductFilters.vue';

export default {
    name: 'ProductCatalog',
    components: {
        ProductCard,
        ProductFilters
    }

}
</script>
