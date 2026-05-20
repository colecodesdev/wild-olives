export const cocktailsMenu = {
  sections: [
    {
      title: 'Pick Me Up',
      anchor: 'pick-me-up',
      pairKey: 'updown',
      columns: 1,
      items: [
        { name: 'Blackberry Blossom', price: '13', description: 'Wheatley Vodka · Mure · Lemon Juice · House Simple' },
        { name: 'Red Hulk Smash', price: '12', description: 'Dark Rum · Strawberry Purée · Lemon Juice · Simple' },
        { name: "Sizzlin' Mojito", price: '13', description: 'Light Rum · Lime Juice · House Simple · Jalapeño · Mint' },
      ],
    },
    {
      title: 'Lay Me Down',
      anchor: 'lay-me-down',
      pairKey: 'updown',
      columns: 1,
      items: [
        { name: 'Savage Boulevard', price: '14', description: 'Rye Bourbon · Campari · Sweet Vermouth' },
        { name: 'Smoky Paloma', price: '12', description: 'Mezcal · Grapefruit Juice · Lime Juice · Simple · Soda' },
        { name: 'Fancytini', price: '15', description: "Ford's Gin · Fresh Lemon Juice · Simple · Champagne" },
      ],
    },
    {
      title: 'Signature Cocktails',
      anchor: 'signature',
      columns: 1,
      items: [
        { name: 'Wild Olives Martini', price: '18', description: "Hendrick's Gin or Tito's Vodka · House Brine · Choice of Blue Cheese, Spicy Pepper, Gherkin Pickle Stuffed Olive Trio or Unstuffed Olive Trio" },
        { name: 'Margarita Por Favor', price: '15', description: 'Siete Leguas Tequila · Fresh Lime Juice · Agave · "Uno Mas" Generous Floater' },
        { name: 'Buffalo Trace Old Fashioned', price: '17', description: 'Buffalo Trace Bourbon · Orange Bitters · House Simple · Amarena Cherry' },
      ],
    },
    {
      title: 'One More Round',
      anchor: 'one-more-round',
      columns: 1,
      items: [
        { name: 'Shot In The Dark', price: '15', description: 'Reposado Tequila · Kahlua · Espresso Liqueur · Espresso Shot' },
        { name: 'Neon Sunset', price: '13', description: 'Aperol · Prosecco · Splash Soda' },
        { name: 'Chocolate Bliss', price: '15', description: 'Chocolate Liqueur · Wheatley Vodka · Irish Cream' },
      ],
    },
    {
      title: 'Drive Me Home',
      anchor: 'drive-me-home',
      columns: 1,
      items: [
        { name: 'Knocked Up', price: '8', description: 'Fresh Cranberry Juice · Ginger Simple · Fever Tree Tonic' },
        { name: 'Fizzer Up', price: '8', description: 'N/A Bubbles · w/ Sprite Spritzer' },
        { name: 'Red Tide', price: '8', description: 'Fresh Pineapple Juice · Cranberry Juice · Club Soda' },
      ],
    },
    {
      title: 'Beer & Seltzers',
      anchor: 'beer',
      compact: true,
      columns: 2,
      items: [
        { name: 'Michelob Ultra', price: '6' },
        { name: "Idyll Hound Divide & Conch'r IPA", price: '8' },
        { name: '30-A Beach Blonde', price: '7' },
        { name: 'Wicked Weed Pernicious IPA', price: '7' },
        { name: 'Modelo Especial', price: '7' },
        { name: "FL Avenue You're My Boy, Blue!", price: '7' },
      ],
    },
    {
      title: 'Tea',
      anchor: 'tea',
      compact: true,
      columns: 2,
      items: [
        { name: 'Darjeeling', price: '5', description: 'Black Tea' },
        { name: 'Marrakesh Mint', price: '5', description: 'Gunpowder Green Tea · Spearmint' },
        { name: "Emperor's Chai", price: '5', description: 'Black Tea · Cinnamon · Cardamom · Ginger · Black Pepper · Clove' },
        { name: 'Spiced Ruby Cider', price: '5', description: 'Hibiscus · Cinnamon · Apple · Orange · Clove · Rosehip' },
      ],
    },
  ],
}
