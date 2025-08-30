import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/header.vue'

//firebase
import { auth } from './components/firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

let app;
onAuthStateChanged(auth, () => {
    if (!app) {
        app = createApp(App)
        app.component('app-header', Header)
        app.use(router)
        app.mount('#app')
    }
});



