import { createApp } from "vue";

/** Uncomment the following blocks respectively and check the changes of the type of RouterView in App.vue */

// Block 1
// import App from './App.vue'
// import { createPinia } from 'pinia'
// import { router } from './router'

// Block 2
// import { createPinia } from 'pinia'
// import App from './App.vue'
// import { router } from './router'

// Block 3
import { router } from './router'
import App from './App.vue'
import { createPinia } from 'pinia'

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.mount("#app");
