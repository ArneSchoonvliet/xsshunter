import SidebarPlugin from "../components/SidebarPlugin/index.js";
import Notify from "../components/NotificationPlugin/index.js";
import GlobalComponents from "./globalComponents.js";
import GlobalDirectives from "./globalDirectives.js";
import RTLPlugin from "./RTLPlugin";

//css assets
import "../assets/sass/black-dashboard.scss";
import "../assets/css/nucleo-icons.css";
import "../assets/demo/demo.css";

export default {
  install(app) {
    app.use(GlobalComponents);
    app.use(GlobalDirectives);
    app.use(SidebarPlugin);
    app.use(Notify);
    app.use(RTLPlugin);
  }
}
