const MENU_LINK_BY_KEY = {
  dinner: { path: '/menu/dinner', label: 'Dinner' },
  brunch: { path: '/menu/brunch', label: 'Brunch' },
  'happy-hour': { path: '/menu/happy-hour', label: 'Happy Hour' },
  cocktails: { path: '/menu/cocktails', label: 'Cocktails' },
  wine: { path: '/menu/wine', label: 'Wine' },
  dessert: { path: '/menu/dessert', label: 'Dessert' },
}

export const MENU_LINKS_DESKTOP = [
  'dinner', 'cocktails', 'wine', 'happy-hour', 'brunch', 'dessert',
].map((k) => MENU_LINK_BY_KEY[k])

export const MENU_LINKS_MOBILE = [
  'dinner', 'brunch', 'happy-hour', 'cocktails', 'wine', 'dessert',
].map((k) => MENU_LINK_BY_KEY[k])
