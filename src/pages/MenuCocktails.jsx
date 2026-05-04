import MenuPage from '../components/sections/MenuPage'

import heroImg from '../assets/images/menu/you-me-sea.jpg'
import cocktailMenuImg from '../assets/images/menu/cocktail-menu.jpg'

export default function MenuCocktails() {
  return (
    <MenuPage
      heroImg={heroImg}
      menuImg={cocktailMenuImg}
      menuImgAlt="Cocktail Menu"
      title="Cocktails"
      backgroundClassName="bg-center"
    />
  )
}
