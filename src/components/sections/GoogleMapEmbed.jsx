export default function GoogleMapEmbed({
  className = 'h-[520px]',
  query = '4771 E County Hwy 30A Unit C 103 Santa Rosa Beach, FL 32459',
  zoom = 14,
}) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=${zoom}&output=embed`

  return (
    <section className={`w-full ${className}`}>
      <iframe
        title="Wild Olives 30A Map"
        src={src}
        className="w-full h-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  )
}