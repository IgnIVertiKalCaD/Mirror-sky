import { createWebHistory, createRouter } from "vue-router"

const MainPage = () => import("@/components/pages/mainPage.vue")
const ServersPage = () => import("@/components/pages/serversPage.vue")
const ClientsPage = () => import("@/components/pages/clientsPage.vue")
const UnloadFilesPage = () => import("@/components/pages/uploadFilesPage.vue")
const CatalogPAge = () => import("@/components/pages/catalogPage.vue")
const mainAdmin = () => import("@/components/pages/admin/mainPage.vue")

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
  {
    path: "/catalog",
    component: CatalogPAge,
  },
  {
    path: "/admin",
    component: mainAdmin,
  },
  //   { path: '/:pathMatch(.*)*', component: error404 },
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
});

export default router;
