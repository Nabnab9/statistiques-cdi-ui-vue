<template>
  <div>
    <v-layout fill-height column>
      <div>
        Affichage des comptes du jour
      </div>
  
      <v-spacer></v-spacer>
      <div>
        <v-layout row>
          <v-spacer></v-spacer>
  
          <v-btn color="primary" class="fab-add-activity" dark @click="addActivityDialog = true" fab>
            <v-icon>add</v-icon>
          </v-btn>
        </v-layout>
  
  
      </div>
  
    </v-layout>
  
  
    <v-dialog v-model="addActivityDialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Ajouter une activité</v-card-title>
  
        <v-layout column style="padding: 20px">
          <v-text-field type="number" label="Nombre d'étudiants"></v-text-field>

        </v-layout>
  
        <v-card-actions>
          <v-spacer></v-spacer>
  
          <v-btn color="primary darken-2" flat="flat" @click="addActivityDialog = false">
            Annuler
          </v-btn>
  
          <v-btn color="primary darken-3" flat="flat" @click="addActivityDialog = false">
            Ajouter
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Vue,
  } from 'vue-property-decorator';
  import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
  
  import TimeSlotService from '../services/time-slot.service';
  import {
    HttpResponse,
  } from 'vue-resource/types/vue_resource';
  
  import * as _ from 'lodash';
  
  import TimeSlot from '../model/time-slot.model';
  
  
  @Component({
    components: {
      HelloWorld,
    },
  })
  export default class Home extends Vue {
  
    public timeSlotsService = new TimeSlotService();
  
    private timeSlots: TimeSlot[] = [];
  
    private data() {
      return {
        addActivityDialog: false,
      };
    }
  
    private mounted() {
      this.timeSlotsService.findAll()
        .then((response: HttpResponse) => {
          _.forEach(response.data, (ts: any) => {
            this.timeSlots.push(new TimeSlot(ts));
          });
          console.log(this.timeSlots);
        });
    }
  }
</script>

<style>
.fab-add-activity {
  margin-right: 16px;
  margin-bottom: 16px;
}

::-webkit-scrollbar { 
    display: none; 
}
</style>
