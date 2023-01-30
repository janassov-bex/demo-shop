<template>
    <v-container>
        <h1> Sorry we are not taking orders</h1>
        <v-row>
            <v-col cols="12">
                <lottie :options="defaultOptions" :height="500" :width="500" v-on:animCreated="handleAnimation"/>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import Lottie from 'vue-lottie';
import * as animationData from '@/assets/75237-alert-lamp.json';
export default {
    name: 'OrderPage',
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