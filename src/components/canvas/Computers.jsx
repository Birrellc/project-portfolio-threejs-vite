import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
const Computers = () => {
  // import gltf model
  const computer = useGLTF('./desktop_pc_/scene.gltf');

  return;
  // three js elements use a mesh instead of a div

  <mesh>
    {/* light so we can see the model */}
    {/* https://docs.pmnd.rs/react-three-fiber/getting-started/your-first-scene#adding-lights */}
    <hemisphereLight intensity={0.15} groundColor={'black'} />
  </mesh>;
};

export default Computers;
