//import './assets/main.css'

import { createApp } from "vue";
import App from "./components/App.vue";
import router from "./router/index";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
const app = createApp(App);

app.use(router);

app.mount("#app");
