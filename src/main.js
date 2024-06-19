import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import ButtonCounter from "./components/ButtonCounter.vue";

const app = createApp(App);

// Importing a Global Component that you can use across the vue app without explicitly importing the component
app.component("ButtonCounter", ButtonCounter);
app.mount("#app");
