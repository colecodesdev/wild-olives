import MenuPage from '../components/sections/MenuPage'
import { cocktailsMenu } from '../data/menus/cocktails'
import heroImg from '../assets/images/menu/you-me-sea.jpg'

export default function MenuCocktails() {
  return (
    <MenuPage
      heroImg={heroImg}
      title="Cocktails"
      backgroundClassName="bg-center"
      menu={cocktailsMenu}
    />
  )
}
