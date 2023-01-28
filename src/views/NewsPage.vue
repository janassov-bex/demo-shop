<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-parallax  src="https://picsum.photos/1920/1080" height="700" gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)">
                    <v-row align="center" justify="center">
                        <v-col cols="12" class="text-center">
                            <h1> A brand new chair </h1>
                        </v-col>
                    </v-row>
                </v-parallax>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <p class="font-weight-black"> 
                    And how we created it
                </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <p class="text-justify">
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    Vestibulum ac elementum risus. In ut sem et arcu sodales volutpat. Duis efficitur mollis ultricies. 
                    Suspendisse potenti. Duis id euismod ipsum. Vestibulum facilisis faucibus nisl eu luctus. 
                    Integer lobortis nisi in elit consectetur pretium. Proin et scelerisque nulla. 
                    Quisque ipsum urna, aliquam eget sapien quis, ornare ornare augue. 
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
                    Curabitur congue sollicitudin nibh et ullamcorper.
                </p>
                <p class="text-justify">
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    Vestibulum ac elementum risus. In ut sem et arcu sodales volutpat. Duis efficitur mollis ultricies. 
                    Suspendisse potenti. Duis id euismod ipsum. Vestibulum facilisis faucibus nisl eu luctus. 
                    Integer lobortis nisi in elit consectetur pretium. Proin et scelerisque nulla. 
                    Quisque ipsum urna, aliquam eget sapien quis, ornare ornare augue. 
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
                    Curabitur congue sollicitudin nibh et ullamcorper.
                </p>
                <p class="text-justify">
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    Vestibulum ac elementum risus. In ut sem et arcu sodales volutpat. Duis efficitur mollis ultricies. 
                    Suspendisse potenti. Duis id euismod ipsum. Vestibulum facilisis faucibus nisl eu luctus. 
                    Integer lobortis nisi in elit consectetur pretium. Proin et scelerisque nulla. 
                    Quisque ipsum urna, aliquam eget sapien quis, ornare ornare augue. 
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
                    Curabitur congue sollicitudin nibh et ullamcorper.
                </p>
                <p class="text-justify">
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    Vestibulum ac elementum risus. In ut sem et arcu sodales volutpat. Duis efficitur mollis ultricies. 
                    Suspendisse potenti. Duis id euismod ipsum. Vestibulum facilisis faucibus nisl eu luctus. 
                    Integer lobortis nisi in elit consectetur pretium. Proin et scelerisque nulla. 
                    Quisque ipsum urna, aliquam eget sapien quis, ornare ornare augue. 
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
                    Curabitur congue sollicitudin nibh et ullamcorper.
                </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <p class="text-h4 font-weight-black">Look some photos related to news:</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <lingallery class="images-gallery"  :iid.sync="currentId" :responsive="true" :items="[
                    {id:'someid1', src: 'https://picsum.photos/1080/600/?image=500', thumbnail: 'https://picsum.photos/64/64/?image=500'},
                    {id:'someid2', src: 'https://picsum.photos/1080/600/?image=501', thumbnail: 'https://picsum.photos/64/64/?image=501'},
                    {id:'someid3', src: 'https://picsum.photos/1080/600/?image=502', thumbnail: 'https://picsum.photos/64/64/?image=502'},
                    {id:'someid4', src: 'https://picsum.photos/1080/600/?image=503', thumbnail: 'https://picsum.photos/64/64/?image=503'},
                    {id:'someid5', src: 'https://picsum.photos/1080/600/?image=504', thumbnail: 'https://picsum.photos/64/64/?image=504'},
                ]"/>
            </v-col>
        </v-row>

    </v-container>
</template>
<script>
export default {
    name: 'NewsPage',
}
</script>
<style>

</style>