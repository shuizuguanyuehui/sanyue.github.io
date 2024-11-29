import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'

export function ProductCard({ name, description, price, image, ...props }) {
  const mesh = useRef()

  useFrame((state, delta) => {
    mesh.current.rotation.y += delta * 0.2
  })

  return (
    <group {...props}>
      <mesh ref={mesh}>
        <boxGeometry args={[3, 4, 0.2]} />
        <meshStandardMaterial color="#ffffff" />
        <Text
          position={[0, 1.5, 0.11]}
          fontSize={0.3}
          color="#000000"
          anchorX="center"
          anchorY="middle"
        >
          {name}
        </Text>
        <Text
          position={[0, 0, 0.11]}
          fontSize={0.2}
          color="#333333"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
        >
          {description}
        </Text>
        <Text
          position={[0, -1.5, 0.11]}
          fontSize={0.25}
          color="#e44d26"
          anchorX="center"
          anchorY="middle"
        >
          ¥{price.toFixed(2)}
        </Text>
      </mesh>
    </group>
  )
}

