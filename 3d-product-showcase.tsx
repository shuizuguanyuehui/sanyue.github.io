'use client'

import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { ProductCard } from './product-card'
import { Header } from './header'

const products = [
  { id: 1, name: '高级耳机', description: '无线蓝牙耳机，音质卓越', price: 999.99, image: '/img/th.jpg' },
  { id: 2, name: '智能手表', description: '多功能智能手表，健康监测', price: 1499.99, image: '/img/th (1).jpg' },
  { id: 3, name: '便携式音箱', description: '防水蓝牙音箱，音质震撼', price: 599.99, image: '/img/th (2).jpg' },
  { id: 4, name: '游戏手柄', description: '专业级游戏手柄，精准控制', price: 399.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 5, name: '智能家居套装', description: '一键控制家居设备', price: 2999.99, image: '/placeholder.svg?height=200&width=200' },
  { id: 6, name: '高清摄像机', description: '4K超高清摄像，稳定防抖', price: 3999.99, image: '/placeholder.svg?height=200&width=200' },
]

export default function ProductShowcase() {
  const [hoveredProduct, setHoveredProduct] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-600 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">3D 科技产品展示</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="relative h-[300px]">
              <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <ProductCard
                  {...product}
                  position={[0, 0, 0]}
                  scale={hoveredProduct === product.id ? 1.1 : 1}
                  onPointerOver={() => setHoveredProduct(product.id)}
                  onPointerOut={() => setHoveredProduct(null)}
                />
              </Canvas>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

