/*
 =========================================================
 * Vue Black Dashboard - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/black-dashboard
 * Copyright 2018 Creative Tim (http://www.creative-tim.com)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import { createApp, configureCompat } from "vue";
// import VueRouter from "vue-router";
import RouterPrefetch from 'vue-router-prefetch'
import App from "./App.vue";
// TIP: change to import router from "./router/starterRouter"; to start with a clean layout
import router from "./router/index";

import BlackDashboard from "./plugins/blackDashboard";

configureCompat({ TRANSITION_GROUP_ROOT: false })

// import i18n from "./i18n"
//import './registerServiceWorker'
// Vue.use(BlackDashboard);
// Vue.use(VueRouter);
// Vue.use(RouterPrefetch);

// import VueClipboard from 'vue-clipboard2'
// Vue.use(VueClipboard);

// import VueCodemirror from 'vue-codemirror'

// import base style
// import 'codemirror/lib/codemirror.css'
// import 'codemirror/theme/monokai.css'
// import 'codemirror/mode/yaml/yaml.js'

// Vue.use(VueCodemirror);


/* eslint-disable no-new */
const app = createApp(App);
app.use(router);
app.use(RouterPrefetch);
app.use(BlackDashboard);
app.mount("#app");