<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Statistiques CDI</span>
        <span class="font-weight-light">Accueil</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      //
    };
  },
};
</script>
