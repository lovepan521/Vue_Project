import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import TDesign from 'tdesign-vue-next';
// 引入组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css';

createApp(App).use(router).use(store).use(TDesign).mount('#app');
