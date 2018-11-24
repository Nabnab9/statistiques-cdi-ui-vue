import Vue from 'vue';

import VueResource from 'vue-resource';
import { Observable } from 'rxjs';
import TimeSlot from '@/model/time-slot.model';

Vue.use(VueResource);

export default class TimeSlotService extends Vue {
    public findAll() {
        return this.$http.get('time-slots');
    }
}
