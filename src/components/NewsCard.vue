<template>
    <v-card 
        elevation="4"
        outlined 
        class="mx-4 my-4"
        max-width="480">
        <v-img
        height="350"
        src="https://picsum.photos/1920/1080"
        ></v-img>
        <v-card-subtitle class="text-h6 font-weight-bold"> A brand new chair</v-card-subtitle> 
        <v-divider class="mx-4"></v-divider>
        <v-card-text> 
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
        </v-card-text>
        <v-card-actions >
        <v-btn class="mx-auto" to="/news/23">
            Read more
        </v-btn>
        </v-card-actions>

    </v-card>
</template>
<script>
export default {
    name: 'NewsCard',
}
</script>
