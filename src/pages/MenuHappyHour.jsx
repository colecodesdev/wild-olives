import MenuPage from '../components/sections/MenuPage'

import heroImg from '../assets/images/menu/happy-hour.JPG'
import hhMenuImg from '../assets/images/menu/happy-hour-menu.jpg'

export default function MenuHappyHour() {
  return (
    <MenuPage
      heroImg={heroImg}
      menuImg={hhMenuImg}
      menuImgAlt="Happy Hour Menu"
      title="Happy Hour"
      backgroundClassName="bg-center"
      menuImgClassName="w-full md:w-auto max-w-5xl h-auto md:h-full"
    />
  )
}
