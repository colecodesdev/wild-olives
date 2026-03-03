import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'

import Home from './pages/Home'
import Menu from './pages/Menu'
import Reservations from './pages/Reservations'
import Events from './pages/Events'
import OurStory from './pages/OurStory'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import NotFound from './pages/NotFound'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="menu" element={<Menu />} />
      <Route path="reservations" element={<Reservations />} />
      <Route path="events" element={<Events />} />
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