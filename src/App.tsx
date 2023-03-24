import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AddZone from './pages/addZones'
import Home from './pages'
import AddOfficer from './pages/addOfficer'

function App() {
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
