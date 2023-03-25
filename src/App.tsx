import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AddZone from './pages/addZones'
import Home from './pages'
import AddOfficer from './pages/addOfficer'
import AllOfficers from './pages/allOfficers'
import SingleOfficer from './pages/singleOfficer'
import AllZones from './pages/allZones'

function App() {
  return (
    <BrowserRouter>
      <Layout>
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='zones'>
          <Route index element={<AllZones/>} />
          <Route path='add' element={<AddZone/>} />
        </Route>
        <Route path='officers'>
          <Route index element={<AllOfficers/>} />
          <Route path='add' element={<AddOfficer/>} />
          <Route path=':id' element={<SingleOfficer/>} />
        </Route>
      </Routes>
      </Layout>
    </BrowserRouter>

  )
}

export default App
