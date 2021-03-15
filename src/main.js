import { createApp } from 'vue';

import router from './routes';
import store from './store/index';

import App from './App.vue';
import './assets/index.css';

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
