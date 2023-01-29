import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#DC0073',
            secondary: '#505168',
            accent: '#00a1e4',
            error: '#f5b700',
            info: '#00a1e4',
            success: '#04e762',
            warning: '#00a1e4',
          },
        },
      },
});
