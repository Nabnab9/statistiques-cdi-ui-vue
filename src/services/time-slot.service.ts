import Vue from 'vue';

import VueResource from 'vue-resource';

Vue.use(VueResource);

export default class TimeSlotService extends Vue {
    public findAll() {
        return this.$http.get('http://localhost:8082/time-slots');
    }
}
