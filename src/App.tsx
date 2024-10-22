// App.tsx - Main App
// 10/22/2024 - Joshua Lim

import { useState } from 'react'
import MegaScroll from 'react-mega-scroll';
import './App.css'

function App() {
  const [, setActive] = useState(0);
  return (
    <MegaScroll onChange={setActive}>
      <div className='h-screen bg-blue-300'>Page 1</div>
      <div className='h-screen bg-blue-400'>Page 2</div>
      <div className='h-screen bg-blue-500'>Page 3</div>
    </MegaScroll>
  )
}

export default App
