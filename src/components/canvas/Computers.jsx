import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  useEffect(() => {
    if (!computer?.scene) return;

    computer.scene.traverse((child) => {
      if (child.isMesh && child.geometry) {
        const posAttr = child.geometry.getAttribute("position");
        if (posAttr && !hasNaN(posAttr.array)) {
          child.geometry.computeBoundingSphere();
        } else {
          console.warn("Skipping boundingSphere: NaN found in", child.name || "Unnamed Mesh");
        }
      }
    });

    function hasNaN(array) {
      for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) return true;
      }
      return false;
    }
  }, [computer]);

  return (
    <mesh>
      <hemisphereLight intensity={0.8} groundColor='#111111' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1.4}
        castShadow
        shadow-mapSize={2048}
      />
      <directionalLight
        position={[0, 10, 0]}
        intensity={2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight intensity={1} />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3.6, -2.2] : [0, -3.5, -2]}
        rotation={[-0.01, -0.2, -0.1]}
      />

      <spotLight
        position={[0, 5, 5]}
        angle={0.3}
        penumbra={0.9}
        intensity={1.2}
        color="#ffffff"
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isReady, setIsReady] = useState(false); // Prevents flash

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    const updateDevice = () => {
      setIsMobile(mediaQuery.matches);
      setIsReady(true);
    };
    updateDevice();
    mediaQuery.addEventListener("change", updateDevice);
    return () => mediaQuery.removeEventListener("change", updateDevice);
  }, []);

  if (!isReady) return null; // Prevent rendering during hydration mismatch

  return isMobile ? (
    <div
      style={{
        width: "100%",
        height: "350px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0a0a0a",
        color: "#ffffff",
        fontSize: "1.2rem",
        fontFamily: "sans-serif",
      }}
    >
    </div>
  ) : (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={false} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
