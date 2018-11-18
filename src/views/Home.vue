<template>
  <div class="home">
    <HelloWorld :timeSlots="timeSlots"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {

  private timeSlots: any = {};

  private mounted() {
    console.log('zesifgjgoùiehz');

    this.$http.get('http://192.168.1.34:8082/time-slots')
      .then((response: any) => {
        this.timeSlots = response.body;
        console.log(this.timeSlots);
      });
  }
}
</script>
