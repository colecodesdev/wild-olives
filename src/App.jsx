import { createBrowserRouter, createRoutesFromElements, Route, Navigate, RouterProvider } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'

import Home from './pages/Home'
import MenuDinner from './pages/MenuDinner'
import MenuBrunch from './pages/MenuBrunch'
import MenuHappyHour from './pages/MenuHappyHour'
import MenuCocktails from './pages/MenuCocktails'
import MenuWine from './pages/MenuWine'
import MenuDessert from './pages/MenuDessert'
import Reservations from './pages/Reservations'
import Events from './pages/Events'
import OurStory from './pages/OurStory'
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
      <Route path="/menu/happy-hour" element={<MenuHappyHour />} />
      <Route path="/menu/dessert" element={<MenuDessert />} />
      <Route path="/menu/brunch" element={<MenuBrunch />} />
      <Route path="reservations" element={<Reservations />} />
      <Route path="events" element={<Events />} />
      <Route path="private-events" element={<PrivateEvents />} />
      <Route path="our-story" element={<OurStory />} />
      <Route path="contact" element={<Contact />} />
      <Route path="careers" element={<Careers />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}