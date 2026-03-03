export default function Heading({ as: Tag = 'h2', className = '', children }) {
  return <Tag className={`font-raleway ${className}`}>{children}</Tag>
}