<template>
  <v-app>
    <v-app-bar app elevate-on-scroll  color="secondary">
      <v-app-bar-title class="primary--text mx-12">
        <a href="/">My Awesome Company</a>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <div class="text-center">
          <v-dialog
            v-model="dialog"
            width="800"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                icon
              >
                <v-badge :content="itemsInShop" :value="store.items.length" overlap>
                  <v-icon color="primary">
                    mdi-cart
                  </v-icon>
                </v-badge>

              </v-btn>
            </template>

            <v-card>

              <v-card-title class="text-h5 grey lighten-2">
                Shopping cart
              </v-card-title>

              <v-card-text>
                <ShoppingCart />
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-btn text class="mx-auto" to="/order" color="primary" @click="dialog = false">
                  Make an order
                </v-btn>
                <v-btn
                  color="secondary"
                  text
                  @click="dialog = false"
                  class="mx-auto"
                >
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
      </div>
      <template v-slot:extension>
        <v-tabs align-with-title color="primary" >
          <v-tab class="white--text" to="/"><v-icon color="white">mdi-home</v-icon>Main   </v-tab>
          <v-tab class="white--text" to="/catalog"><v-icon color="white">mdi-view-carousel</v-icon>Catalog   </v-tab>
          <v-tab class="white--text" to="/news"><v-icon color="white">mdi-newspaper-variant-outline</v-icon>News </v-tab>
          <v-tab class="white--text" to="/delivery"><v-icon color="white">mdi-truck-delivery</v-icon> Delivery</v-tab>
          <v-tab class="white--text" to="/contacts"><v-icon color="white">mdi-contacts-outline</v-icon>Contacts</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
    <v-footer
      padless
      color="primary"
    >
      <v-card
        flat
        tile
        class=" secondary white--text text-center"
      >
        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import ShoppingCart from '@/components/ShoppingCart.vue';
import {store} from '@/store'
export default {
  data () {
    return {
      dialog: false,
      store
    }
  },
  components: {
    ShoppingCart
  },
  computed: {
    itemsInShop (){
      let totalCount = 0
      store.items.forEach(item => {
        totalCount += item.quantity
      })
      return totalCount
    }
  }
}
</script>