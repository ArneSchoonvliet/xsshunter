import { createRouter, createWebHashHistory } from 'vue-router'
import routes from "./routes";

// configure router
const router = createRouter({
  routes, // short for routes: routes
  history: createWebHashHistory(),
  linkExactActiveClass: "active",
  scrollBehavior: (to) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  }
});

export default router;
