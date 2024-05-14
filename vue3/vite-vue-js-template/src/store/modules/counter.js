import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 1,
    }),
    getters: {},
    actions: {
        accumulate() {
            this.count++;
        },
    },
});
