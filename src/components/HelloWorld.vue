<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
      </v-flex>
    </v-layout>
    <v-btn
              dark
              fab
              bottom
              right
              color="pink"
            >
    </v-btn>
  </v-container>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop()
  private timeSlots: any;
}
</script>

<style>
</style>
