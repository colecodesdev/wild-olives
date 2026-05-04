import ContentBanner from '../ui/ContentBanner'
import corkOverlay from '../../assets/images/home/cork-overlay.webp'

export default function CorkBanner({
  image,
  heightClass = 'h-[520px]',
  overlayClassName = 'bg-black/40',
  backgroundClassName = '',
}) {
  return (
    <ContentBanner
      image={image}
      heightClass={heightClass}
      overlayClassName={overlayClassName}
      backgroundClassName={backgroundClassName}
    >
      <img src={corkOverlay} alt="" className="h-56 md:h-72 w-auto" />
    </ContentBanner>
  )
}
