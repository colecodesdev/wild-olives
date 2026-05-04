import MenuPage from '../components/sections/MenuPage'

import heroImg from '../assets/images/menu/strawberry-cheesecake.jpg'
import dessertMenuImg from '../assets/images/menu/dessert-menu.jpg'

export default function MenuDessert() {
  return (
    <MenuPage
      heroImg={heroImg}
      menuImg={dessertMenuImg}
      menuImgAlt="Dessert Menu"
      title="Dessert"
      backgroundClassName="bg-center"
      menuImgClassName="w-full md:w-auto max-w-5xl h-auto md:h-full"
    />
  )
}
