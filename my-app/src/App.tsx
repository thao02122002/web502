import { useState } from 'react'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Showinfo from './components/Showinfo'
import AboutPage from './pages/Layouts/Website/AboutPage'
import HomePage from './pages/Layouts/Website/HomePage'
import AdminLayout from './pages/Layouts/Admin/AdminLayout'
import Dashboard from './pages/Layouts/Admin/Dashboard'
import ProductManager from './pages/Layouts/Admin/ProductManager'
import WebsiteLayout from './pages/Layouts/Website/WebsiteLayout'
import ProductPage from './pages/Layouts/Website/ProductPage'
import type { Product } from './type/product'
import ProductDetail from './pages/Layouts/Website/ProductDetail'

function App() {
  const [count, setCount] = useState(0)
  const [info, setInfo] = useState<Product>({
    name: "Thao",
    age: 20
  })

  return (
    <div className="App">
      <header>
        <ul>
          <li><NavLink to="/" >Home Pgae</NavLink></li>
          <li><NavLink to="/product" >Product Page</NavLink></li>
          <li><NavLink to="/about" >About Page</NavLink></li>

        </ul>

      </header>
      <main>
        <Routes>

          <Route path='/' element={< WebsiteLayout />}>
            <Route index element={<HomePage />} />
            {/* Cách 1: để vào chi tiết sản phẩm 
                <Route path="product">
                  <Route element={<ProductPage />} />
                  <Route path=":id" element={<ProductDetail />} />
                </Route> */}
            {/*cách 2: vào chi tiết sản phẩm */}
            <Route path='product' element={<ProductPage />} />
            <Route path='/product/:id' element={< ProductDetail />} />
            <Route path='about' element={<AboutPage />} />
          </Route>

          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/dashboard" />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='productManager' element={< ProductManager />} />
          </Route>

        </Routes>
      </main>
    </div>
  )
}

export default App
