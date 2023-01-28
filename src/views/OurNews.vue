<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h1>News</h1> 
            </v-col>
        </v-row>
        <v-row justify="center">
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
        </v-row>
    </v-container>
</template>
<script>
import NewsCard from '@/components/NewsCard.vue';
export default {
    name: 'OurNews',
    components: {
        NewsCard
    }
}
</script>
