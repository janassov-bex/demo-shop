<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-parallax  src="https://picsum.photos/1920/1080" height="700" gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)">
                    <v-row align="center" justify="center">
                        <v-col cols="12" class="text-center">
                            <h1> Welcome to our awesome website! </h1>
                        </v-col>
                    </v-row>

                </v-parallax>

            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <masonry-wall :items="items" :ssr-columns="1" :column-width="500" :gap="16">
                    <template #default="{item}">
                        <v-card>
                            <v-card-title>{{ item.title }}</v-card-title>
                            <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                        </v-card>
                    </template>
                </masonry-wall>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <div>
                    <yandex-map :coords="coords" :settings="settings" :zoom="13">
                        <!--Markers-->
                        <ymap-marker 
                            :coords="coords" 
                            marker-id="123" 
                            hint-content="some hint" 
                            />
                    </yandex-map>
                </div>
            </v-col>
        </v-row>

    </v-container>
</template>
<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";

export default {
    name: 'MainPage',
    components: {
        yandexMap,
        ymapMarker,
    },
    data() {
        return {
            items: [
                { title: 'First', description: 'The first item.' },
                { title: 'Second', description: 'The second item.' },
                { title: 'Second', description: 'The second item.' },
                { title: 'Second', description: 'The second item.' },
                { title: 'Second', description: 'The second item.' },
                { title: 'Second', description: 'The second item.' },
                { title: 'Second', description: 'The second item.' },
                { title: 'Second', description: 'The second item.' },
                { title: 'Second', description: 'The second item.' },
                { title: 'Second', description: 'The second item.' },
                { title: 'Second', description: 'The second item.' },
                { title: 'Second', description: 'The second item.' },
            ],
            coords: [
                43.243357, 76.956166
            ],
            settings: {
                apiKey: 'aaba05d9-d4db-4ccc-948e-cfea78f9a2db',
                lang: 'ru_RU',
                coordorder: 'latlong',
                enterprise: false,
                version: '2.1'
            ,}
        }
  },
}
</script>
<style >
.ymap-container {
    height: 500px;
}

</style>