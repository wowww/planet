import { Canvas } from "@react-three/fiber";
import Planet from './components/Planet';
import Space from './components/Space';
import CameraControls from './components/CameraControls'

function App() {
  return ( 
    <Canvas>
      <CameraControls />
      <Space />
      <Planet />
    </Canvas>
  )
}

export default App;
