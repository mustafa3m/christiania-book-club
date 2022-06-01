import { createApp } from "vue";
import { createStore } from "vuex";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";

import store from "../store.js";
import routes from "../routes.js";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faHatWizard } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app_store = createStore(store);
const app_router = createRouter({
  routes: routes,
  history: createWebHistory(),
});

createApp(App).use(app_store).use(app_router).mount("#app");
//library.add(faHatWizard);
