import MenuPage from '../components/sections/MenuPage'
import { wineMenu } from '../data/menus/wine'
import heroImg from '../assets/images/menu/btg-wine.jpeg'

export default function MenuWine() {
  return (
    <MenuPage
      heroImg={heroImg}
      title="Wine"
      backgroundClassName="bg-center"
      menu={wineMenu}
    />
  )
}
