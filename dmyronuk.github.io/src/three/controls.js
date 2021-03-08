import { Quaternion, Euler } from 'three';

const getInitialState = () => ({
  isDragging: false,
  mouseX: null,
  mouseY: null
});

const rotateCube = (cube, dx, dy) => {
  const euler = new Euler(dy / (Math.PI * 8), dx / (Math.PI * 8));
  const rotationQuaternion = new Quaternion()
    .setFromEuler(euler);

  cube.quaternion.multiplyQuaternions(rotationQuaternion, cube.quaternion);
}

export const initControls = (canvas, cube) => {
  const state = getInitialState();
  canvas.addEventListener('mousedown', (event) => startDrag(state, event));
  canvas.addEventListener('mousemove', (event) => handleDrag(state, event, cube));
  canvas.addEventListener('mouseup', () => endDrag(state));
  canvas.addEventListener('mouseleave', () => endDrag(state));
}

const startDrag = (state, event) => {
  state.isDragging = true;
  state.mouseX = event.clientX;
  state.mouseY = event.clientY;
};

const handleDrag = (state, event, cube) => {
  if (state.isDragging) {
    const dx = event.clientX - state.mouseX;
    const dy = event.clientY - state.mouseY;
    rotateCube(cube, dx, dy);

    state.mouseX = event.clientX;
    state.mouseY = event.clientY;
  }
}

const endDrag = (state) => {
  state.isDragging = false;
};

