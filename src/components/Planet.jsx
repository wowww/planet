import React from 'react';
import { useThree, useFrame } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { CubeCamera, WebGLCubeRenderTarget, RGBFormat, LinearMipmapLinearFilter } from 'three';

function Planet() {
  const isPc = useMediaQuery({
    query : "(min-width:1024px)"
  });
  const isTablet = useMediaQuery({
    query : "(min-width:768px) and (max-width:1023px)"
  });
  const isMobile = useMediaQuery({
    query : "(max-width:767px)"
  });

  const cubeRenderTarget = new WebGLCubeRenderTarget(512, {
    format: RGBFormat,
    generateMipmaps: true,
    minFilter: LinearMipmapLinearFilter
  });
  const { scene, gl } = useThree();
  const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget);
  cubeCamera.position.set(0, 0, 0);
  scene.add(cubeCamera);

  useFrame(() => cubeCamera.update(gl, scene));

  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]} castShadow>
    <directionalLight intensity={0.5} />
    {isPc && <sphereGeometry attach="geometry" args={[2, 32, 32]} />}
    {isTablet && <sphereGeometry attach="geometry" args={[1.5, 32, 32]} />}
    {isMobile && <sphereGeometry attach="geometry" args={[1, 32, 32]} />}
    
    <meshBasicMaterial
      attach="material"
      envMap={cubeCamera.renderTarget.texture}
      color="white"
      roughness={0.1}
      metalness={1}
    />
  </mesh>
  )
}

export default Planet
