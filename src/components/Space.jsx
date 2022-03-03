import React from 'react'
import { useThree } from "@react-three/fiber";
import { CubeTextureLoader } from "three";

function Space() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader;
  const texture = loader.load([
    "/space_01.jpg",
    "/space_02.jpg",
    "/space_03.jpg",
    "/space_04.jpg",
    "/space_05.jpg",
    "/space_06.jpg"
  ]);
  scene.background = texture;
  return null;
}

export default Space
