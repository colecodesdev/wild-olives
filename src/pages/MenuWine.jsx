import MenuPage from '../components/sections/MenuPage'

import heroImg from '../assets/images/menu/btg-wine.jpeg'
import wineMenuImg from '../assets/images/menu/wine-list.jpg'

export default function MenuWine() {
  return (
    <MenuPage
      heroImg={heroImg}
      menuImg={wineMenuImg}
      menuImgAlt="Wine Menu"
      title="Wine"
      backgroundClassName="bg-center"
    />
  )
}
