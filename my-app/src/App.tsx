import { useState } from 'react'
import './App.css'
import Showinfo from './components/Showinfo'
import type { Product } from './type/product'

function App() {
  const [count, setCount] = useState(0)
  const [info, setInfo] = useState<Product>({
    name: "Thao",
    age: 20
  })

  return (
    <div className="App">
      {count} < button onClick={() => setCount(count + 1)}>Click</button>
      {info.name}
      <Showinfo person={info} />
    </div>
  )
}

export default App
