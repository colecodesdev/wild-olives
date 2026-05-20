const MENU_LINK_BY_KEY = {
  dinner: { path: '/menu/dinner', label: 'Dinner' },
  cocktails: { path: '/menu/cocktails', label: 'Cocktails' },
  wine: { path: '/menu/wine', label: 'Wine' },
}

export const MENU_LINKS_DESKTOP = [
  'dinner', 'cocktails', 'wine',
].map((k) => MENU_LINK_BY_KEY[k])

export const MENU_LINKS_MOBILE = [
  'dinner', 'cocktails', 'wine',
].map((k) => MENU_LINK_BY_KEY[k])
