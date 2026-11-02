Fay by Haretna menu (Arabic + English)

OPEN IT: double-click index.html (phone or computer).

FILES
  index.html, css/style.css, js/app.js   the page
  js/menu-data.js                        THE MENU: items, prices, offers, hours (edit this)
  images/logo.png                        the logo
  images/                                put item photos here

ADD A PHOTO TO AN ITEM
  1. Copy the photo into the images folder, e.g. images/hummus.jpg
  2. In js/menu-data.js find the item and set img: 'images/hummus.jpg'
  (Tapping a photo box on the phone also lets you try a picture, but it is kept only on that phone.)

ADD AN ITEM
  { n: ['Name', 'الاسم'], d: ['Description', 'الوصف'], p: 20, img: '' }
  p can be one price (p: 20) or sizes (p: { s: 15, m: 17, l: 19 }).
  t: ['new'] or ['popular'] adds a label.
