import React from 'react';
import { useMediaQuery } from "react-responsive";

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

export default Planet
