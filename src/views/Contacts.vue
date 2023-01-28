<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h1>Contacts</h1> 
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <p class="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus elementum dignissim. 
                    Proin a vestibulum nisi. Nam condimentum nibh tortor, vel efficitur est ultricies a. 
                    Nam porta augue ipsum, sed auctor nisl consectetur ut. 
                    Aenean urna orci, aliquet non tellus a, pulvinar volutpat enim. 
                    Ut iaculis commodo venenatis. Nullam accumsan, metus sit amet euismod iaculis, 
                    purus ipsum dignissim lacus, id molestie enim dui eget justo. 
                    Curabitur in arcu at velit fermentum bibendum. 
                    Cras euismod turpis magna, et pellentesque diam rutrum ac. 
                    Pellentesque non magna a arcu accumsan feugiat. Etiam vehicula mi a aliquam laoreet.
                </p>
                <p class="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus elementum dignissim. 
                    Proin a vestibulum nisi. Nam condimentum nibh tortor, vel efficitur est ultricies a. 
                    Nam porta augue ipsum, sed auctor nisl consectetur ut. 
                    Aenean urna orci, aliquet non tellus a, pulvinar volutpat enim. 
                    Ut iaculis commodo venenatis. Nullam accumsan, metus sit amet euismod iaculis, 
                    purus ipsum dignissim lacus, id molestie enim dui eget justo. 
                    Curabitur in arcu at velit fermentum bibendum. 
                    Cras euismod turpis magna, et pellentesque diam rutrum ac. 
                    Pellentesque non magna a arcu accumsan feugiat. Etiam vehicula mi a aliquam laoreet.
                </p>
                <p class="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus elementum dignissim. 
                    Proin a vestibulum nisi. Nam condimentum nibh tortor, vel efficitur est ultricies a. 
                    Nam porta augue ipsum, sed auctor nisl consectetur ut. 
                    Aenean urna orci, aliquet non tellus a, pulvinar volutpat enim. 
                    Ut iaculis commodo venenatis. Nullam accumsan, metus sit amet euismod iaculis, 
                    purus ipsum dignissim lacus, id molestie enim dui eget justo. 
                    Curabitur in arcu at velit fermentum bibendum. 
                    Cras euismod turpis magna, et pellentesque diam rutrum ac. 
                    Pellentesque non magna a arcu accumsan feugiat. Etiam vehicula mi a aliquam laoreet.
                </p>
                <p class="text-h5">
                    Phone:
                </p>
                <p class="text-h6">
                    <a href="tel:+77777777777">+77777777777</a>
                </p>
                <p class="text-h5">
                    email:
                </p>
                <p class="text-h6">
                    <a href="mailto:customer@example.com">customer@example.com</a>
                </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <yandex-map :coords="coords" :settings="settings" :zoom="12">
                        <!--Markers-->
                        <ymap-marker 
                            :coords="coords" 
                            marker-id="123" 
                            />
                </yandex-map>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>

export default {
    name: 'ContactUs',
    data() {
        return {
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
<style>
.ymap-container {
    height: 600px;
}

</style>
