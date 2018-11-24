<template>
  <v-app>
    <v-layout column>
      <v-toolbar>
        <v-toolbar-title class="headline text-uppercase">
          <span>Statistiques CDI</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </v-toolbar>
  
      <v-content fluid >
        <router-view style="height: 100%"/>
      </v-content>
  
    </v-layout>
  
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
