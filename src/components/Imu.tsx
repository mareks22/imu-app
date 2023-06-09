/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export default function Imu() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let model: THREE.Object3D;

  const fileUrl = new URL("camera2.gltf", window.location.href).href;

  const coordinates = { x: 0, y: 0, z: 0 };

  function resetCoords() {
    model.rotation.set(0, 0, 0);
    model.updateMatrix();
  }

  useEffect(() => {
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;

    let previousTimestamp = 0;
    let currentTimestamp = 0;

    let rotationX = 0;
    let rotationY = 0;
    let rotationZ = 0;

    // @ts-ignore
    robothubApi.onNotificationWithKey("rhSchema/number", (message) => {
      const { x, y, z, timestamp } = message.payload.value;
      coordinates.x = x;
      coordinates.y = y;
      coordinates.z = z;
      currentTimestamp = +timestamp;
      console.log(`coordinates: ${coordinates}, timestamp: ${timestamp}`);
    });

    const init = () => {
      // Create the scene
      scene = new THREE.Scene();

      // Create the camera
      camera = new THREE.PerspectiveCamera(45, 600 / 600, 0.1, 100);
      camera.position.z = 0.2;

      //Load the model
      const loader = new GLTFLoader();
      loader.load(
        fileUrl,
        (gltf) => {
          if (gltf) {
            model = gltf.scene;

            // Center the model
            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            model.position.sub(center);

            scene.add(model);
            console.log("Model Added!");
          }
        },
        undefined,
        (error) => {
          console.error(error);
        }
      );

      //Light
      const light = new THREE.PointLight(0xffffff, 1, 300);
      light.position.set(3, 10, 20);
      scene.add(light);

      // Create the renderer
      renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current! });

      renderer.setSize(600, 600);
      renderer.setClearColor("#242424");
      renderer.render(scene, camera);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);

      if (model) {
        const dt = (currentTimestamp - previousTimestamp) / 1000; // Convert to seconds
        // Integrate angular velocity to get rotation angles
        rotationX += coordinates.x * dt;
        rotationY += coordinates.y * dt;
        rotationZ += coordinates.z * dt;

        // Apply rotation to the 3D object
        model.rotation.x = rotationX;
        model.rotation.y = rotationY;
        model.rotation.z = rotationZ;

        previousTimestamp = currentTimestamp;
      }
    };

    init();
    animate();

    const onWindowResize = () => {
      camera.aspect = 800 / 800;
      camera.updateProjectionMatrix();
      renderer.setSize(800, 800);
    };

    window.addEventListener("resize", onWindowResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", onWindowResize);
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} />
      <button className="button" onClick={resetCoords}>
        Reset
      </button>
    </>
  );
}
