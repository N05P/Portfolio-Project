import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function FloatingCube(props) {
  const groupRef = useRef()
  const { nodes, materials } = useGLTF('models/rubiks_cube.glb')

  // stable random rotation speed
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
          geometry={nodes.Baked_baked_0.geometry}
          material={materials.baked}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={13}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/rubiks_cube.glb')
