import { Canvas } from "@react-three/fiber";
import Planet from './components/Planet';
import Space from './components/Space';

function App() {
  return ( 
    <Canvas>
      <directionalLight intensity={0.5} />
      <Space />
      <Planet />
    </Canvas>
  )
}

export default App;
