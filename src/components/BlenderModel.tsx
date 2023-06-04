import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const BlenderModel: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let model: THREE.Object3D;

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
      camera.position.z = 0.2;



      // Create the renderer
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current! });

      renderer.setSize(1000, 1000);
      renderer.setClearColor(0xffffff);
      // Load the model
      const loader = new GLTFLoader(); // Use GLTFLoader for glTF, OBJLoader for OBJ
      loader.load(
        "camera2.gltf", // Replace with the path to your model file
        (gltf) => {
          model = gltf.scene;
          scene.add(model);

          // Set pivot translation to center the object
          const boundingBox = new THREE.Box3().setFromObject(model);
          const center = boundingBox.getCenter(new THREE.Vector3());
          model.position.sub(center);
        },
        undefined,
        (error) => {
          console.error("Error loading model:", error);
        }
      );
    };

    const animate = () => {
      requestAnimationFrame(animate);

      if (model) {
        model.rotation.y += 0.001;
        model.rotation.x += 0.001;
        model.rotation.z += 0.001;
      }

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
