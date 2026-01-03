import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const getRandomSpeed = () => (Math.random() * 0.5 + 0.1) * (Math.random() < 0.5 ? -1 : 1)

const GreenSwirl = (props) => {
  const ref = useRef()

  // Random rotation speeds for x, y, z axes, stable per instance
  const rotationSpeed = useRef({
    x: getRandomSpeed(),
    y: getRandomSpeed(),
    z: getRandomSpeed(),
  })

  useFrame(() => {
    if (!ref.current) return
    ref.current.rotation.x += rotationSpeed.current.x * 0.01
    ref.current.rotation.y += rotationSpeed.current.y * 0.01
    ref.current.rotation.z += rotationSpeed.current.z * 0.01
  })

  return (
    <mesh ref={ref} {...props}>
      <torusGeometry args={[0.5, 0.1, 8, 100]} />
      <meshStandardMaterial color="limegreen" />
    </mesh>
  )
}

export default GreenSwirl
    