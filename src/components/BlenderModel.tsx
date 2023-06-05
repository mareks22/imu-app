import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
//import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const BlenderModel: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });

  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [rotationZ, setRotationZ] = useState(0);

  function updateCoordinates(message: any) {
    const { x, y, z } = message.payload.value;
    setRotationX(x);
    setRotationY(y);
    setRotationZ(z);
    setRotation({ x, y, z });
    console.log(`from message: x: ${x}, y: ${y}, z: ${z}`);
    console.log(
      `setRotation: x: ${rotation.x}, y: ${rotation.y}, z: ${rotation.z}`
    );
    console.log(
      `setRotationCoords: x: ${rotationX}, y: ${rotationY}, z: ${rotationZ}`
    );
  }

  useEffect(() => {
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let model: THREE.Object3D;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    robothubApi.onNotificationWithKey("rhSchema/number", (message) => {
      updateCoordinates(message);
    });

    const init = () => {
      // Create the scene
      scene = new THREE.Scene();

      // Create the camera
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 5;

      // Create the renderer
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current! });

      renderer.setSize(1000, 1000);
      renderer.setClearColor(0xffffff);
      // Load the model
      // const loader = new GLTFLoader(); // Use GLTFLoader for glTF, OBJLoader for OBJ
      // loader.load(
      //   "camera3.gltf", // Replace with the path to your model file
      //   (gltf) => {
      //     if(gltf) {
      //       model = gltf.scene;
      //       scene.add(model);
      //       // Set pivot translation to center the object
      //       const boundingBox = new THREE.Box3().setFromObject(model);
      //       const center = boundingBox.getCenter(new THREE.Vector3());
      //       model.position.sub(center);
      //     } else {

      //     }
      //   },
      //   undefined,
      //   (error) => {
      //     console.error(error);
      //   }
      // );

      const geometry = new THREE.BoxGeometry(1, 3, 1);
      const material = new THREE.MeshBasicMaterial({ color: 0x006e00 });
      model = new THREE.Mesh(geometry, material);
      scene.add(model);
    };

    const animate = () => {
      requestAnimationFrame(animate);

      const newRotationValue = { ...rotation };
      model.rotation.y = newRotationValue.y;
      model.rotation.x = newRotationValue.x;
      model.rotation.z = newRotationValue.z;
      renderer.render(scene, camera);
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    init();
    animate();

    window.addEventListener("resize", onWindowResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", onWindowResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default BlenderModel;
