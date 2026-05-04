import MenuPage from '../components/sections/MenuPage'

import heroImg from '../assets/images/menu/dinner-menu.webp'
import dinnerMenuImg from '../assets/images/menu/dinner-menu.jpg'

export default function MenuDinner() {
  return (
    <MenuPage
      heroImg={heroImg}
      menuImg={dinnerMenuImg}
      menuImgAlt="Dinner Menu"
      title="Dinner"
    />
  )
}
