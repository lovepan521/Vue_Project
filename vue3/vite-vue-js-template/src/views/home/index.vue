<template>
  <div>
    home page
    {{count}}
    <t-button @click="add">加1</t-button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/store/index';
// import User from '@/api/user';

const { count } = storeToRefs(useCounterStore());
const user_store = useCounterStore();

const add = () => {
  user_store.accumulate();
}

// export default {
//   data() {
//     return {
//       username: '',
//       password: '',
//     };
//   },
//   methods: {
//     async login() {
//       const res = await User.login(this.username, this.password);
//       console.log(res);
//     },
//   }
// }

</script>
