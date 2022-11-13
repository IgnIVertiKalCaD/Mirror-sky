import { createWebHistory, createRouter } from "vue-router";
/* eslint-disable */
// lazy-loaded
const MainPage = () => import("./components/MainPage.vue")
const ServersPage = () => import("./components/ServersPage.vue")
// const Home = () => import("./components/Home.vue")
const ClientsPage = () => import("./components/ClientsPage.vue")

const routes = [

  {
    path: "/",
    name: "home",
    component: MainPage,
  },
  {
    path: "/home",
   // eslint-disable-next-line
    component: MainPage,
  },
  {
    path: "/servers",
    component: ServersPage,
  },
  {
    path: "/clients",
   // eslint-disable-next-line
    component: ClientsPage,
  },
//   { path: '/:pathMatch(.*)*', component: error404 },

];

const router = createRouter({
  history: createWebHistory(""),
  routes,
});

export default router;