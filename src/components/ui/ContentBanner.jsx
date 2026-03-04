import ParallaxBanner from './ParallaxBanner'
import Container from './Container'
import logo from '../../assets/logos/logo.png'

export default function ContentBanner({
  image,
  heightClass = 'h-[500px]',
  overlayClassName = 'bg-black/30',
  backgroundClassName = '',
  logoAlt = 'Wild Olives Logo',
  logoClassName = 'h-24 w-auto',
  children,
  className = '',
}) {
  return (
    <ParallaxBanner
      image={image}
      heightClass={heightClass}
      overlayClassName={overlayClassName}
      backgroundClassName={backgroundClassName}
      contentClassName={className}
    >
      <Container className="h-full flex items-center justify-center">
        {children ? children : <img src={logo} alt={logoAlt} className={logoClassName} />}
      </Container>
    </ParallaxBanner>
  )
}