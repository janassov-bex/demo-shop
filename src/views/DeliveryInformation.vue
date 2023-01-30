<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h1> Delivery information</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <p>
                    We deliver everythere in the globe
                    Shipping calculations will be calculated after order
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
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <lottie :options="defaultOptions" :height="500" :width="500" v-on:animCreated="handleAnimation"/>
            </v-col>
        </v-row>
    </v-container>
    
</template>
<script>
import Lottie from 'vue-lottie';
import * as animationData from '@/assets/98455-delivery-truck.json';

export default {
    name: 'DeliveryInformation',
    data() {
      return {
        defaultOptions: {
            animationData: animationData,
            loop: true,
            utoplay: true
        },
        animationSpeed: 2
      }
    },
    components: {
      'lottie': Lottie
    },
    methods: {
        handleAnimation (anim) {
            this.anim = anim;
        },
    }
}
</script>
