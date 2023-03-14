import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './components/Layout'
import Layout from './components/Layout'
import Fabric from './features/addZone/SpacesInfo'
import AddZone from './pages/zones/AddZone'
import Home from './pages/Home'
import AddOfficer from './pages/officers/AddOfficer'

function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
      <Layout>
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='zones'>
          <Route index element={<h1  className=''>all zones</h1>} />
          <Route path='add' element={<AddZone/>} />
        </Route>
        <Route path='officers'>
          <Route index element={<h1 className=''>all officers</h1>} />
          <Route path='add' element={<AddOfficer/>} />
        </Route>
      </Routes>
      </Layout>
    </BrowserRouter>

  )
}

export default App
