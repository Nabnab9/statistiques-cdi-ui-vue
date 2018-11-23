<template>
  <div class="home">
    <HelloWorld :timeSlots="timeSlots"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

import TimeSlotService from '../services/time-slot.service';
import { HttpResponse } from 'vue-resource/types/vue_resource';


@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {

  public timeSlotsService = new TimeSlotService();

  private timeSlots: any = {};

  private mounted() {
    this.timeSlotsService.findAll()
    .then((response: HttpResponse) => {
      this.timeSlots = response.data;
    });
  }
}
</script>
