import { createWebHistory, createRouter } from "vue-router";

const MainPage = () => import("./components/MainPage.vue");
const ServersPage = () => import("./components/ServersPage.vue");
const ClientsPage = () => import("./components/ClientsPage.vue");
const UnloadFilesPage = () => import("./components/uploadFiles.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: MainPage,
  },
  {
    path: "/home",
    component: MainPage,
  },
  {
    path: "/servers",
    component: ServersPage,
  },
  {
    path: "/clients",
    component: ClientsPage,
  },
  {
    path: "/upload",
    component: UnloadFilesPage,
  },
  //   { path: '/:pathMatch(.*)*', component: error404 },
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
});

export default router;
