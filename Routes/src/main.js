import { createApp } from 'vue'
import App from './App.vue'
import routes from './router';

import Header from './components/header/index.vue';

const app =  createApp(App);
app.use(routes);
app.component('app-header',Header);
app.mount('#app')