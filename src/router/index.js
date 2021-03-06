import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
// import ToDo from '../views/ToDoList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/todo/',
    name: 'todo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "todo" */ '../views/ToDoList.vue'),
    // component: Home,
  },
  {
    path: '/recaptcha/',
    name: 'recaptcha',
    component: () => import(/* webpackChunkName: "todo" */ '../views/ReCapatCha.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
