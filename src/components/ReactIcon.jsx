import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function ReactIcon(props) {
  const groupRef = useRef()
  const { nodes, materials } = useGLTF('models/react_logo.glb')

  // random but stable rotation speed
  const rotationSpeed = useRef({
    x: (Math.random() * 0.4 + 0.2) * (Math.random() > 0.5 ? 1 : -1),
    y: (Math.random() * 0.4 + 0.2) * (Math.random() > 0.5 ? 1 : -1),
    z: (Math.random() * 0.4 + 0.2) * (Math.random() > 0.5 ? 1 : -1),
  })

  useFrame(() => {
    if (!groupRef.current) return
    groupRef.current.rotation.x += rotationSpeed.current.x * 0.01
    groupRef.current.rotation.y += rotationSpeed.current.y * 0.01
    groupRef.current.rotation.z += rotationSpeed.current.z * 0.01
  })

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 7.935, 18.102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[39.166, 39.166, 52.734]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/react_logo.glb')
