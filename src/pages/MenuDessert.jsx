import MenuPage from '../components/sections/MenuPage'
import { dessertMenu } from '../data/menus/dessert'
import heroImg from '../assets/images/menu/strawberry-cheesecake.jpg'

export default function MenuDessert() {
  return (
    <MenuPage
      heroImg={heroImg}
      title="Dessert"
      backgroundClassName="bg-center"
      menu={dessertMenu}
    />
  )
}
