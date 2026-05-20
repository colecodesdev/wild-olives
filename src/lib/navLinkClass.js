export const navLinkClass = ({ isActive }) =>
  isActive
    ? 'text-black font-semibold border-b-2 border-black pb-1'
    : 'text-black hover:text-gray-600 border-b-2 border-transparent pb-1'
