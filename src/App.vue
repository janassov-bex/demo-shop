<template>
  <v-app>
    <v-app-bar app elevation="4">
      <v-app-bar-title>
        My Awesome Company
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
                <v-icon>
                  mdi-cart
                </v-icon>
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
                <v-btn text class="mx-auto">
                  Make an order
                </v-btn>
                <v-btn
                  color="primary"
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
        <v-tabs align-with-title>
          <v-tab to="/">Main</v-tab>
          <v-tab to="/catalog">Catalog</v-tab>
          <v-tab to="/news">News</v-tab>
          <v-tab to="/delivery">Delivery</v-tab>
          <v-tab to="/contacts">Contacts</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
    <v-footer
      dark
      padless
    >
      <v-card
        flat
        tile
        class="indigo lighten-1 white--text text-center"
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
export default {
  data () {
    return {
      dialog: false,
    }
  },
  components: {
    ShoppingCart
  }
}
</script>