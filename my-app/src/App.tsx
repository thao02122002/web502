import { useEffect, useState } from 'react'
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
import ProductAdd from './pages/Layouts/Admin/ProductAdd'
import { add, list } from './api/product'

function App() {
  const [products, setProducts] = useState<{ _id: number, name: string }[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, []);

  const onHandleAdd = async (product: any) => {
    console.log('app.js', product);

    //api
    const { data } = await add(product);
    //reRender
    setProducts([...products, data]);

  }

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
            {/* khi truy cập vào admin thì chuyển đến index thông qua thằng Navigate */}
            <Route index element={<Navigate to="/admin/dashboard" />} />
            {/* khi chạy index xog thì mặc đình nó sẽ truyển thằng Dashboard vào Outlet của thằng AdminLayout */}
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='productManager' element={< ProductManager />} />
            <Route path='productAdd' element={< ProductAdd name="Thao" onAdd={onHandleAdd} />} />


          </Route>

        </Routes>
      </main>
    </div>
  )
}

export default App
