<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h1> Awesome Product</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <lingallery :iid.sync="currentId" :responsive="true" :items="[
                    {id:'someid1', src: 'https://picsum.photos/1000/800/?image=100', thumbnail: 'https://picsum.photos/64/64/?image=100'},
                    {id:'someid2', src: 'https://picsum.photos/1000/800/?image=101', thumbnail: 'https://picsum.photos/64/64/?image=101'},
                    {id:'someid3', src: 'https://picsum.photos/1000/800/?image=102', thumbnail: 'https://picsum.photos/64/64/?image=102'},
                    {id:'someid4', src: 'https://picsum.photos/1000/800/?image=103', thumbnail: 'https://picsum.photos/64/64/?image=103'},
                    {id:'someid5', src: 'https://picsum.photos/1000/800/?image=104', thumbnail: 'https://picsum.photos/64/64/?image=104'},
                ]"/>
            </v-col>
            <v-col cols="6">
                <v-row>
                    <v-col cols="12">
                        <p class="font-weight-bold text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis lorem vitae sem eleifend, nec.
                        </p>
                        <p class="text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Phasellus venenatis auctor erat, et consectetur augue malesuada quis. 
                            Aliquam in diam eget nulla facilisis egestas ut a nibh. 
                            Pellentesque ultrices mi quis pellentesque dictum. Aenean interdum turpis nec dictum tincidunt. 
                            Nullam nec bibendum velit. Duis id sodales mauris, aliquam luctus lorem. 
                            Nam fringilla fermentum turpis, in laoreet ipsum pretium id. Nullam at interdum sem.
                        </p>
                        <p class="text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Phasellus venenatis auctor erat, et consectetur augue malesuada quis. 
                            Aliquam in diam eget nulla facilisis egestas ut a nibh. 
                            Pellentesque ultrices mi quis pellentesque dictum. Aenean interdum turpis nec dictum tincidunt. 
                            Nullam nec bibendum velit. Duis id sodales mauris, aliquam luctus lorem. 
                            Nam fringilla fermentum turpis, in laoreet ipsum pretium id. Nullam at interdum sem.
                        </p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <p class="text-h5 font-weight-bold">
                            Price:
                        </p>
                        <p class="text-h5">
                            150$
                        </p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-btn class="mx-2" to="/catalog/10">
                            Add to <v-icon>mdi-cart</v-icon>
                        </v-btn>
                        <v-btn class="mx-2">
                            <v-icon>mdi-heart-outline</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
                
            </v-col>
        </v-row>
    </v-container>
    
</template>
<script>
export default {
    name: 'ProductDetail'
}
</script>