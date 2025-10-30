
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import WebLayout from './Layout/WebLayout'
import Home from './Pages/Home'
import Contact from './Pages/Contact'

import AboutUs from './Pages/AboutUs'
import OurPackages from './Pages/OurPackages'
import KedarnathDetail from './Pages/PackageDetail/KedarnathDetail'
import TungnathDetail from './Pages/PackageDetail/TungnathDetail'
import BadrinathDetail from './Pages/PackageDetail/BadrinathDetail'
import YamunotriDetail from './Pages/PackageDetail/YamunotriDetail'
import KashmirDetail from './Pages/PackageDetail/KashmirDetail'


function App() {
  const ThemeRoute = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<WebLayout />}>

          <Route index element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/our-package' element={<OurPackages />} />
          <Route path='/kedarnath-detail' element={<KedarnathDetail />} />
          <Route path='/tungnath-detail' element={<TungnathDetail />} />
          <Route path='/badrinath-detail' element={<BadrinathDetail />} />
          <Route path='/yamunotri-detail' element={<YamunotriDetail />} />
          <Route path='/kashmir-detail' element={<KashmirDetail />} />

        </Route>


      </>


    )

  )

  return (
    <>
      <RouterProvider router={ThemeRoute} />
    </>
  )
}

export default App
