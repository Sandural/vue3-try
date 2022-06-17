import { createRouter, createWebHashHistory } from "vue-router";
import Page1 from "@/views/Page1.vue";
import Page2 from "@/views/Page2.vue";

// TODO 如何动态生成 menu
const routes = [
  {
    path: "/page1",
    name: "page1",
    component: Page1,
  },
  {
    path: "/page2",
    name: "page2",
    component: Page2,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
