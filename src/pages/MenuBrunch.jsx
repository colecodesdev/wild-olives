import MenuPage from '../components/sections/MenuPage'

import heroImg from '../assets/images/menu/brunch-flatbread.JPEG'
import brunchMenuImg from '../assets/images/menu/brunch-menu.jpg'

export default function MenuBrunch() {
  return (
    <MenuPage
      heroImg={heroImg}
      menuImg={brunchMenuImg}
      menuImgAlt="Brunch Menu"
      title="Brunch"
      backgroundClassName="bg-bottom"
    />
  )
}
