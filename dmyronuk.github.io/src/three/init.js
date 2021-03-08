import {
  AmbientLight,
  BoxBufferGeometry,
  Clock,
  Euler,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  Quaternion,
  Scene,
  TextureLoader,
  WebGLRenderer
} from 'three';
import { initControls } from './controls';
import angularIcon from '../icons/angular.svg';
import javaIcon from '../icons/java.png';
import jsIcon from '../icons/js.png';
import nodeIcon from '../icons/node.png';
import reactIcon from '../icons/react.png';
import sassIcon from '../icons/sass.svg';

const createCamera = (domElement) => {
  // hard-coded square aspect ratio for now
  const camera = new PerspectiveCamera(75, 1, 0.1, 1000);
  camera.position.z = 5;

  return camera;
}

const createLight = () => {
  const light = new AmbientLight(0xffffff, 2);
  light.position.set(1, 1, 1);

  return light;
}

const setRendererSize = (renderer, domElement) => {
  renderer.setSize(domElement.clientHeight, domElement.clientHeight);
}

const createRenderer = (domElement) => {
  const renderer = new WebGLRenderer({ alpha: true });
  setRendererSize(renderer, domElement);
  window.addEventListener('resize', () => setRendererSize(renderer, domElement));

  domElement.appendChild(renderer.domElement);

  return renderer;
}

const createMaterials = (imgs) => {
  return imgs.map(img => {
    const texture = new TextureLoader().load(img);

    return new MeshStandardMaterial({ map: texture, transparent: true });
  })
}

const createCube = () => {
  const images = [javaIcon, angularIcon, sassIcon, nodeIcon, reactIcon, jsIcon];
  const materials = createMaterials(images, 4);
  const geometry = new BoxBufferGeometry(3.5, 3.5, 3.5);

  return new Mesh(geometry, materials);
}

const orientCube = (cube, xAngle, yAngle) => {
  const euler = new Euler(xAngle, yAngle);
  const rotationQuaternion = new Quaternion()
    .setFromEuler(euler);
  cube.quaternion.multiplyQuaternions(rotationQuaternion, cube.quaternion);
}

const updateCubePosition = (cube, clock) => {
  const speedFactor = 3;
  const distanceFactor = 150;
  const dy = Math.sin(clock.getElapsedTime() * speedFactor)
  cube.translateY(dy / distanceFactor);
}

const initAnimation = (renderCb) => {
  const animate = () => {
    renderCb();
    requestAnimationFrame(animate);
  }

  animate();
}

const createRenderCb = (renderer, scene, camera, clock, cube) => {
  return () => {
    updateCubePosition(cube, clock);
    renderer.render(scene, camera)
  };
}

export default function initThree (domElement) {
  const renderer = createRenderer(domElement);
  const camera = createCamera(domElement);
  const scene = new Scene();
  const clock = new Clock(true);

  const light = createLight();
  scene.add(light);

  const cube = createCube();
  orientCube(cube, Math.PI / 8, Math.PI / 4);
  scene.add(cube);

  initControls(renderer.domElement, cube);

  const renderCb = createRenderCb(renderer, scene, camera, clock, cube)
  initAnimation(renderCb);
}

