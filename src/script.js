import "./style.css";
import * as THREE from "three";

import Experience from "./Experience/Experience";

const experience = new Experience(document.querySelector("canvas.webgl"));

// const mouse = {
//   x: 0,
//   y: 0,
// };

// let canRotate = false;

// // canvas
// const canvas = document.querySelector("canvas.webgl");

// // scene
// const scene = new THREE.Scene();

// // texture
// const textureLoader = new THREE.TextureLoader();

// /**
//  * outside
//  */
// const geometry = new THREE.SphereGeometry(500, 60, 60);
// geometry.scale(1, 1, -1);
// const outsideLowTexture = textureLoader.load("outside.jpg");
// const outsideLowMaterial = new THREE.MeshBasicMaterial({
//   map: outsideLowTexture,
// });
// const outsideMesh = new THREE.Mesh(geometry, outsideLowMaterial);
// scene.add(outsideMesh);

// /**
//  * point
//  */
// const pointTexture = textureLoader.load("point.png");
// const pointGeometry = new THREE.BoxGeometry(2, 2, 2);
// const pointMaterial = new THREE.MeshBasicMaterial({
//   map: pointTexture,
// });
// const pointMesh = new THREE.Mesh(pointGeometry, pointMaterial);
// pointMesh.position.set(2, 1.5, 36);
// scene.add(pointMesh);

// /**
//  * Raycaster
//  */
// const raycaster = new THREE.Raycaster();
// const rayOrigin = new THREE.Vector3(2, 0, 10);
// const rayDirections = new THREE.Vector3(10, 0, 0);
// rayDirections.normalize();
// raycaster.set(rayOrigin, rayDirections);
// // scene.add(raycaster);

// const arrowHelper = new THREE.ArrowHelper(
//   raycaster.ray.direction,
//   raycaster.ray.origin,
//   15,
//   0xff0000,
//   1,
//   0.5
// );
// scene.add(arrowHelper);

// const sizes = {
//   width: window.innerWidth,
//   height: window.innerHeight,
// };

// /**
//  * camera
//  */
// const camera = new THREE.PerspectiveCamera(
//   75,
//   sizes.width / sizes.height,
//   1,
//   11000
// );
// camera.position.set(2, 0, 10);
// camera.lookAt(0, 0, 0);
// camera.eulerOrder = "YXZ";
// scene.add(camera);

// /**
//  * renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//   canvas,
// });
// renderer.setSize(sizes.width, sizes.height);
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// /**
//  * animate
//  */
// const clock = new THREE.Clock();
// let previousTime = 0;

// const objectsToTest = [pointMesh, outsideMesh];

// let hoverPoint = false;
// let clickPoint = false;
// const tick = () => {
//   const elapsedTime = clock.getElapsedTime();
//   const frameTime = elapsedTime - previousTime;
//   previousTime = elapsedTime;

//   if (mouse.x && mouse.y) {
//     raycaster.setFromCamera({ x: mouse.x * 2, y: mouse.y * 2 }, camera);
//   }

//   const intersects = raycaster.intersectObjects(objectsToTest);

//   if (intersects[0].object === pointMesh) {
//     hoverPoint = intersects[0];
//   } else {
//     hoverPoint = false;
//   }

//   if (clickPoint) {
//     if (camera.fov >= 25) {
//       camera.fov -= 1;
//     } else {
//       clickPoint = false;
//       camera.fov = 75;
//     }
//     camera.updateProjectionMatrix();
//   }

//   // render
//   renderer.render(scene, camera);
//   window.requestAnimationFrame(tick);
// };
// tick();

// /**
//  * resize
//  */
// window.addEventListener("resize", () => {
//   // update sizes
//   sizes.width = window.innerWidth;
//   sizes.height = window.innerHeight;

//   // update camera
//   camera.aspect = sizes.width / sizes.height;
//   camera.updateProjectionMatrix();

//   // update renderer
//   renderer.setSize(sizes.width, sizes.height);
//   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// });

// let mousedownPosition = 0;
// window.addEventListener("mousemove", (event) => {
//   mouse.x = event.clientX / sizes.width - 0.5;
//   mouse.y = -event.clientY / sizes.height + 0.5;
//   if (canRotate) {
//     const x = mouse.x - mousedownPosition;
//     mousedownPosition = mouse.x;
//     camera.rotateY(x * Math.PI * 2);
//   }
// });
// window.addEventListener("mousedown", (event) => {
//   event.preventDefault();
//   mousedownPosition = mouse.x;
//   canRotate = true;
// });
// window.addEventListener("mouseup", (event) => {
//   event.preventDefault();
//   canRotate = false;
// });
// window.addEventListener("click", () => {
//   if (hoverPoint) {
//     clickPoint = true;
//   }
// });
