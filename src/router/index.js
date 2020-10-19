import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../views/Main.vue";
import PortfolioPage from "../views/Portfolio.vue";
import ContactPage from "../views/Contact.vue";
import AboutPage from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: MainPage
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: PortfolioPage
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactPage
  }
];

const router = new VueRouter({
  routes
});

export default router;
