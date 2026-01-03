import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Target(props) {
  const groupRef = useRef()
  const { nodes, materials } = useGLTF('models/game_bar_target_arrow.glb')

  // stable random rotation speed
  const rotationSpeed = useRef({
    x: (Math.random() * 0.3 + 0.15) * (Math.random() > 0.5 ? 1 : -1),
    y: (Math.random() * 0.3 + 0.15) * (Math.random() > 0.5 ? 1 : -1),
    z: (Math.random() * 0.3 + 0.15) * (Math.random() > 0.5 ? 1 : -1),
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
        <group
          position={[7.224, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_arrow_red_0.geometry}
            material={materials.arrow_red}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_target_white_0.geometry}
            material={materials.target_white}
          />
        </group>

        <group
          position={[101.754, 0.021, -0.037]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={130.856}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_arrow_red_0.geometry}
            material={materials.arrow_red}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_Gold_0.geometry}
            material={materials.Gold}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_Material002_0.geometry}
            material={materials['Material.002']}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/game_bar_target_arrow.glb')
