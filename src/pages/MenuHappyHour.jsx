import MenuPage from '../components/sections/MenuPage'
import { happyHourMenu } from '../data/menus/happyHour'
import heroImg from '../assets/images/menu/happy-hour.JPG'

export default function MenuHappyHour() {
  return (
    <MenuPage
      heroImg={heroImg}
      title="Happy Hour"
      backgroundClassName="bg-center"
      menu={happyHourMenu}
    />
  )
}
