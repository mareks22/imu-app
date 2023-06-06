/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export default function Imu() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const fileUrl = new URL("camera2.gltf", window.location.href).href;

  useEffect(() => {
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let model: THREE.Object3D;

    const coordinates = { x: 0, y: 0, z: 0 };
    const targetCoordinates = { x: 0, y: 0, z: 0 };
    const easingFactor = 0.1;

    // @ts-ignore
    robothubApi.onNotificationWithKey("rhSchema/number", (message) => {
      const { x, y, z } = message.payload.value;
      console.log("coordinates no state: ", coordinates);
      targetCoordinates.x = x.toFixed(2);
      targetCoordinates.y = y.toFixed(2);
      targetCoordinates.z = z.toFixed(2);
    });

    const init = () => {
      // Create the scene
      scene = new THREE.Scene();

      //Load the model
      const loader = new GLTFLoader();
      loader.load(
        fileUrl,
        (gltf) => {
          if (gltf) {
            model = gltf.scene;

            // Set pivot translation to center the object
            const boundingBox = new THREE.Box3().setFromObject(model);
            const center = boundingBox.getCenter(new THREE.Vector3());
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

      // Create the camera
      camera = new THREE.PerspectiveCamera(45, 600 / 600, 0.1, 100);
      camera.position.z = 0.4;
      scene.add(camera);

      // Create the renderer
      renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current! });

      renderer.setSize(600, 600);
      renderer.setClearColor("#242424");
      renderer.render(scene, camera);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);

      if(model) { 
        coordinates.x = (targetCoordinates.x - coordinates.x) * easingFactor;
        coordinates.z = (targetCoordinates.z - coordinates.z) * easingFactor;
        coordinates.y = (targetCoordinates.y - coordinates.y) * easingFactor;
        
        model.rotation.y = coordinates.x;
        model.rotation.x = coordinates.y;
        model.rotation.z = coordinates.z;
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

  return <canvas ref={canvasRef} />;
}
