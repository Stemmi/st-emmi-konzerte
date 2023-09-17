import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

import router from './router';

import './assets/main.css';
import clickOutside from './directives/clickOutside';
import clickAnywhere from './directives/clickAnywhere';

const pinia = createPinia();
const app = createApp(App);

app.directive('click-outside', clickOutside);
app.directive('click-anywhere', clickAnywhere);
app.use(router);
app.use(pinia);

app.mount('#app');
