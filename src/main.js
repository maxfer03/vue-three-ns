import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { World } from "./World/World.js";

function main() {
  // Get a reference to the container element
  const container = document.querySelector("#scene-container");

  // 1. Create an instance of the World app
  const world = new World(container);

  // start the loop (produce a stream of frames)
  world.start();
}

main();

createApp(App).use(router).mount("#app");
