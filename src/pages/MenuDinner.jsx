import MenuPage from '../components/sections/MenuPage'
import { dinnerMenu } from '../data/menus/dinner'
import heroImg from '../assets/images/menu/dinner-menu.webp'

export default function MenuDinner() {
  return (
    <MenuPage
      heroImg={heroImg}
      title="Dinner"
      menu={dinnerMenu}
    />
  )
}
