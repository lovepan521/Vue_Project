<template>
  <div class="home-page">
    <h1> {{text}}</h1>
    <h1> {{count}}</h1>
<!--    <button @click="add">加1</button>-->
    <a-button type="primary" @click="add">
      加1
    </a-button>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
// import Api from '@/api/home.js';
export default {
  data() {
    return {
      text: 'Home Page'
    }
  },
  computed: mapState([
    // 映射 this.count 为 store.state.count
    'count'
  ]),
  methods: {
    ...mapMutations({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    }),

    // async submit() {
    //   const res = await Api.getList({});
    //   console.info(res);
    // }
  }
}
</script>
<style>
.home-page {
  margin: 20px;
}
</style>
