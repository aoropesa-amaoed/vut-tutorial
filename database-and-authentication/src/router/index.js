import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home.vue'
import Register from '../components/users/register.vue'
import AddArticle from '../components/admin/add_article.vue'
import UpdateArticle from '../components/admin/update_article.vue'

//firebase
import { auth } from '@/components/firebase/config'

const isAuth = (to, from, next) => {
  let user = auth.currentUser;
  if (!user) {
    next({ path: '/users/register' });
    return;
  } else {
    next();
    return;
  }
}

const isLoggedIn = (to, from, next) => {
  let user = auth.currentUser;
  if (user) {
    next({ path: '/' });
    return;
  } else {
    next();
    return;
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/users/register', component: Register, beforeEnter: isLoggedIn },
    { path: '/admin/add_article', component: AddArticle, beforeEnter: isAuth },
    {path: '/admin/update_article/:id', component:UpdateArticle, beforeEnter: isAuth}
  ]
})

export default router