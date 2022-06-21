import { createCamera } from "./components/camera.js";
import { createLights } from "./components/lights.js";
import { createScene } from "./components/scene.js";
import { createRenderer } from "./systems/renderer.js";
import { Loop } from "./systems/Loop.js";
import { Resizer } from "./systems/Resizer.js";


import createTerrain from "./components/objects/terrain.js";

// These variables are module-scoped: we cannot access them
// from outside the module

let color = "#42b883";
let color2 = "#4eac82";

let camera;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    // Instances of camera, scene, and renderer
    camera = createCamera();
    scene = createScene(color2);
    renderer = createRenderer();

    // Initializate Loop
    loop = new Loop(camera, scene, renderer);

    container.append(renderer.domElement);

    // Light Instance, with optional light helper
    const { light, lightHelper } = createLights(color);

    // random values for terrain vertexes
    const randomVals = [];

    for (let i = 0; i < 12675; i++) {
      randomVals.push(Math.random() - 0.5);
    }

    // terrain Instance
    let terrain = createTerrain({
      color: color,
      randVertexArr: randomVals,
      yOffset: 0,
      wire: false,
      flatShading: true,
      transparent: false,
    });

    loop.updatables.push(light);
    loop.updatables.push(terrain);

    scene.add(light, terrain);

    // Responsive handler
    const resizer = new Resizer(container, camera, renderer);
    resizer.onResize = () => {
      this.render();
    };
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  // Animation handlers
  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };