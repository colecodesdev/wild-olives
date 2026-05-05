import MenuPage from '../components/sections/MenuPage'
import { brunchMenu } from '../data/menus/brunch'
import heroImg from '../assets/images/menu/brunch-flatbread.JPEG'

export default function MenuBrunch() {
  return (
    <MenuPage
      heroImg={heroImg}
      title="Brunch"
      backgroundClassName="bg-bottom"
      menu={brunchMenu}
    />
  )
}
