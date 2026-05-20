import { createBrowserRouter, createRoutesFromElements, Route, Navigate, RouterProvider } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'

import Home from './pages/Home'
import MenuDinner from './pages/MenuDinner'
import MenuCocktails from './pages/MenuCocktails'
import MenuWine from './pages/MenuWine'
import Events from './pages/Events'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import NotFound from './pages/NotFound'
import PrivateEvents from './pages/PrivateEvents'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/menu" element={<Navigate to="/menu/dinner" replace />} />
      <Route path="/menu/dinner" element={<MenuDinner />} />
      <Route path="/menu/cocktails" element={<MenuCocktails />} />
      <Route path="/menu/wine" element={<MenuWine />} />
      <Route path="events" element={<Events />} />
      <Route path="private-events" element={<PrivateEvents />} />
      <Route path="contact" element={<Contact />} />
      <Route path="careers" element={<Careers />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}