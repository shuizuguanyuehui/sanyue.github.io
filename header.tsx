import React from 'react'

export function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">科技产品展示</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-300">首页</a></li>
            <li><a href="#" className="hover:text-gray-300">产品</a></li>
            <li><a href="#" className="hover:text-gray-300">关于我们</a></li>
            <li><a href="#" className="hover:text-gray-300">联系我们</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

