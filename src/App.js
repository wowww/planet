import { Canvas, useThree } from "@react-three/fiber";
import { CubeTextureLoader } from "three";
import { useMediaQuery } from "react-responsive";

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

function Sphere() {
  const isPc = useMediaQuery({
    query : "(min-width:1024px)"
  });
  const isTablet = useMediaQuery({
    query : "(min-width:768px) and (max-width:1023px)"
  });
  const isMobile = useMediaQuery({
    query : "(max-width:767px)"
  });

  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]} castShadow>
    <directionalLight intensity={0.5} />
    {isPc && <sphereGeometry attach="geometry" args={[2, 32, 32]} />}
    {isTablet && <sphereGeometry attach="geometry" args={[1.5, 32, 32]} />}
    {isMobile && <sphereGeometry attach="geometry" args={[1, 32, 32]} />}
    
    <meshBasicMaterial
      attach="material"
      color="white"
      roughness={0.1}
      metalness={1}
    />
  </mesh>
  )
}

function App() {
  return ( 
    <Canvas>
      <Space />
      <Sphere />
    </Canvas>
  )
}

export default App;
