/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function Manual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const fileUrl = new URL('camera2.gltf', window.location.href).href

  useEffect(() => {
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let model: THREE.Object3D;
    let controls: OrbitControls

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
      camera.position.z = 0.2;
      scene.add(camera);

      // Create the renderer
      renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current! });

      renderer.setSize(600, 600);
      renderer.setClearColor("#242424");
      renderer.render(scene, camera);

      controls = new OrbitControls(camera, canvasRef.current!);
      controls.enableDamping = true;
      controls.enableZoom = false;
      controls.enablePan = false;
    };

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      controls.update();
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
