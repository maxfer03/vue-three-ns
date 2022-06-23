import {
  PlaneBufferGeometry,
  MeshStandardMaterial,
  Mesh,
  TextureLoader,
} from "three";

export default function createTerrain(props) {
  const loader = new TextureLoader();
  const height = loader.load("textures/height.png");
  //                                        w    h
  const geometry = new PlaneBufferGeometry(150, 150, 64, 64);

  const material = new MeshStandardMaterial({
    color: props.color,
    flatShading: true,
    displacementMap: height,
    displacementScale: 5,
  });

  const plane = new Mesh(geometry, material);
  plane.position.set(0, 0, 0);
  plane.rotation.x -= Math.PI * 0.5;

  //Storing our original vertices position on a new attribute
  plane.geometry.attributes.position.originalPosition =
    plane.geometry.attributes.position.array;

  //Randomizing our vertices position
  const { array } = plane.geometry.attributes.position;
  for (let i = 0; i < array.length; i++) {
    props.randVertexArr.push(Math.random());
  }

  plane.geometry.attributes.position.randomValues = props.randVertexArr;

  let frame = 0;
  plane.tick = (delta) => {
    frame += 0.01;
    // destructuring of the random values, the original position and the current vertex position
    const { array, originalPosition, randomValues } =
      plane.geometry.attributes.position;

    // Animation for loop
    // In our vertex array, we have 3 coordinates: x, y and z. We are
    // only going to animate on ONE coordinate: the z coordinate.
    // This means we have to omit the x and y coords, hence the i+=3 in our loop.
    // Also, to access that y coordinate on each vertex, we have to add 2 to our
    // current i each time.
    for (let i = 0; i < array.length; i += 3) {
      // Accessing the z coord
      array[i + 2] =
        // Try switching this numbers up, or using sine instead of cosine, see how the animation changes
        originalPosition[i + 2] + Math.cos(frame + randomValues[i + 2]) * 0.002;
    }
    plane.geometry.attributes.position.needsUpdate = true;
  };

  return plane;
}
