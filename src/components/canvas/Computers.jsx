import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

const Computers = () => {
  // import gltf model
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    // three js elements use a mesh instead of a div
    <mesh>
      {/* light so we can see the model */}
      {/* https://docs.pmnd.rs/react-three-fiber/getting-started/your-first-scene#adding-lights */}
      <hemisphereLight intensity={0.15} groundColor='black' />
      {/* responsive light on the computer model */}
      <pointLight intensity={1} />
      {/* primitive is where we pass the object */}
      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -3.25, 1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  // three js model canvas
  // https://docs.pmnd.rs/react-three-fiber/getting-started/your-first-scene#setting-up-the-canvas
  // camera is the view of the model - x,y,z axis for position
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      // https://threejs.org/docs/#api/en/renderers/WebGLRenderer.preserveDrawingBuffer
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* react feature to allow loader when model loads */}
      <Suspense>
        {/* controls to move the model left and right */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
