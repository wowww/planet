import { Canvas } from "@react-three/fiber";

function Sphere() {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]} castShadow>
    <directionalLight intensity={0.5} />
    <sphereGeometry attach="geometry" args={[2, 32, 32]} />
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
      <Sphere />
    </Canvas>
  )
}

export default App;
