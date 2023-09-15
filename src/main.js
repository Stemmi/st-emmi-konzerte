import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/main.css';
import clickOutside from './directives/clickOutside';
import clickAnywhere from './directives/clickAnywhere';

const app = createApp(App);

app.directive('click-outside', clickOutside);
app.directive('click-anywhere', clickAnywhere);
app.use(router);

app.mount('#app');
