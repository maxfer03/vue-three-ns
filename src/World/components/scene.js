import { Color, Scene } from 'three';

function createScene(color) {
  const scene = new Scene();

  scene.background = new Color(color);

  return scene;
}

export { createScene };