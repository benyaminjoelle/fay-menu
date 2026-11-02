/*
  Fay في — menu data
  ------------------
  This is the only file you need to edit to change the menu.

  Every text is a pair: [English, Arabic].
  n = name, d = description, p = price, t = tags.

  p can be:
    - a number               p: 15                      one price
    - sizes                  p: { s: 15, m: 17, l: 19 }  small / medium / large
  t can contain: 'new', 'popular', 'seasonal'
  plus: true   shows the price as "+4" (used for add-ons)

  Offers disappear by themselves after their "until" date (YYYY-MM-DD).
*/
window.FAY_MENU = {

  config: {
    currency: { en: 'SAR', ar: 'ر.س' },
    hours:    { en: 'Every day, 7:00 AM to midnight', ar: 'يومياً، من 7:00 صباحاً حتى منتصف الليل' },
    vat:      { en: 'Prices are in SAR and include VAT.', ar: 'الأسعار بالريال وتشمل ضريبة القيمة المضافة.' },
    allergy:  {
      en: 'Please tell us about any food allergy before you order. Our drinks and desserts may contain milk, nuts, gluten, eggs or sesame.',
      ar: 'يرجى إخبارنا بأي حساسية غذائية قبل الطلب. قد تحتوي مشروباتنا وحلوياتنا على الحليب أو المكسرات أو الغلوتين أو البيض أو السمسم.'
    },
    // Leave empty to hide. They show in the Info panel.
    address:   { en: '', ar: '' },
    phone:     '',
    instagram: ''
  },

  offers: [
    {
      id: 'winter',
      title: ['Winter Warmers', 'دفء الشتاء'],
      desc:  ['15% off every hot chocolate, sahlab and chai latte.', 'خصم 15% على الهوت شوكليت والسحلب والتشاي لاتيه.'],
      badge: ['15% off', 'خصم 15%'],
      when:  ['All day, every day', 'طوال اليوم، كل يوم'],
      until: '2027-02-28'
    },
    {
      id: 'morning',
      title: ['Morning Combo', 'كومبو الصباح'],
      desc:  ['Any medium hot coffee with a butter croissant.', 'أي قهوة ساخنة وسط مع كرواسون بالزبدة.'],
      price: 22, was: 27,
      when:  ['Every day until 11:00 AM', 'يومياً حتى 11:00 صباحاً'],
      until: '2026-12-31'
    },
    {
      id: 'happy',
      title: ['Happy Hour', 'ساعة السعادة'],
      desc:  ['Buy one iced drink and get a second one free.', 'اشترِ مشروباً مثلجاً واحصل على الثاني مجاناً.'],
      badge: ['1 + 1', '1 + 1'],
      when:  ['Weekdays, 3:00 to 6:00 PM', 'أيام العمل، من 3:00 إلى 6:00 مساءً'],
      until: '2026-11-30'
    },
    {
      id: 'table',
      title: ['Weekend Table', 'طاولة نهاية الأسبوع'],
      desc:  ['Four hot drinks and a dessert platter to share.', 'أربعة مشروبات ساخنة مع طبق حلويات للمشاركة.'],
      price: 79, was: 105,
      when:  ['Fridays and Saturdays', 'الجمعة والسبت'],
      until: '2026-12-31'
    }
  ],

  categories: [

    /* ------------------------------------------------------- APPETIZERS */
    {
      id: 'starters',
      name: ['Appetizers', 'مقبلات'],
      groups: [
        {
          name: ['Cold', 'باردة'],
          items: [
            { n: ['Hummus', 'حمص'], d: ['Chickpeas, tahini, lemon and olive oil, with warm bread.', 'حمص وطحينة وليمون وزيت زيتون مع خبز دافئ.'], p: 16, img: '' },
            { n: ['Mutabbal', 'متبل'], d: ['Smoked aubergine with tahini and pomegranate.', 'باذنجان مشوي مع الطحينة والرمان.'], p: 17, img: '' },
            { n: ['Fattoush', 'فتوش'], d: ['Crisp vegetables, sumac and toasted bread.', 'خضار مقرمشة وسماق وخبز محمص.'], p: 22, t: ['popular'], img: '' },
            { n: ['Tabbouleh', 'تبولة'], d: ['Parsley, tomato, bulgur and lemon.', 'بقدونس وطماطم وبرغل وليمون.'], p: 21, img: '' }
          ]
        },
        {
          name: ['Hot', 'ساخنة'],
          items: [
            { n: ['Falafel', 'فلافل'], d: ['Six crisp pieces with tahini sauce.', 'ست قطع مقرمشة مع صلصة الطحينة.'], p: 15, img: '' },
            { n: ['Cheese Sambousek', 'سمبوسة جبنة'], d: ['Golden pastry filled with melted cheese.', 'عجينة ذهبية محشوة بالجبنة الذائبة.'], p: 18, img: '' },
            { n: ['Kibbeh', 'كبة'], d: ['Fried bulgur shells with spiced beef.', 'كبة مقلية محشوة باللحم المتبّل.'], p: 24, img: '' },
            { n: ['Mozzarella Sticks', 'أصابع الموزاريلا'], d: ['Breaded and fried, with marinara.', 'مقرمشة مع صلصة المارينارا.'], p: 22, img: '' },
            { n: ['Chicken Wings', 'أجنحة دجاج'], d: ['Honey chilli glaze or classic buffalo.', 'بصلصة العسل والحار أو البافلو.'], p: 28, t: ['new'], img: '' },
            { n: ['Loaded Fries', 'بطاطس محمّلة'], d: ['Cheese sauce, jalapeño and crispy onions.', 'صلصة الجبنة وهالبينو وبصل مقرمش.'], p: 24, img: '' },
            { n: ['Soup of the Day', 'شوربة اليوم'], d: ['Ask your server. Served with bread.', 'اسأل النادل. تُقدَّم مع الخبز.'], p: 16, img: '' }
          ]
        }
      ]
    },

    /* --------------------------------------------------- WESTERN DISHES */
    {
      id: 'western',
      name: ['Western Dishes', 'أطباق غربية'],
      groups: [
        {
          name: ['Mains', 'أطباق رئيسية'],
          items: [
            { n: ['Grilled Chicken Plate', 'طبق دجاج مشوي'], d: ['Herb chicken breast, mash and seasonal vegetables.', 'صدر دجاج بالأعشاب مع بطاطس مهروسة وخضار.'], p: 52, img: '' },
            { n: ['Beef Steak', 'ستيك لحم'], d: ['Grilled ribeye, peppercorn sauce and fries.', 'ريب آي مشوي مع صلصة الفلفل وبطاطس.'], p: 98, t: ['popular'], img: '' },
            { n: ['Fish and Chips', 'سمك وبطاطس'], d: ['Beer-battered white fish, tartare and lemon.', 'سمك أبيض مقرمش مع صلصة التارتار وليمون.'], p: 56, img: '' }
          ]
        },
        {
          name: ['Pasta', 'باستا'],
          items: [
            { n: ['Chicken Alfredo', 'دجاج ألفريدو'], d: ['Fettuccine in a creamy parmesan sauce.', 'فيتوتشيني بصلصة الكريمة والبارميزان.'], p: 46, t: ['popular'], img: '' },
            { n: ['Penne Arrabbiata', 'بيني أرابياتا'], d: ['Tomato, garlic and chilli.', 'طماطم وثوم وفلفل حار.'], p: 38, img: '' },
            { n: ['Creamy Mushroom Pasta', 'باستا الفطر بالكريمة'], d: ['Mushrooms, thyme and cream.', 'فطر وزعتر وكريمة.'], p: 42, img: '' }
          ]
        },
        {
          name: ['Burgers, pizza and salads', 'برجر وبيتزا وسلطات'],
          items: [
            { n: ['Classic Beef Burger', 'برجر لحم كلاسيك'], d: ['Beef patty, cheddar, pickles and house sauce, with fries.', 'لحم وتشيدر ومخلل وصلصة خاصة مع بطاطس.'], p: 44, img: '' },
            { n: ['Crispy Chicken Burger', 'برجر دجاج مقرمش'], d: ['Buttermilk chicken, slaw and mayo, with fries.', 'دجاج مقرمش مع كول سلو ومايونيز وبطاطس.'], p: 40, img: '' },
            { n: ['Club Sandwich', 'كلوب ساندويتش'], d: ['Triple-decker chicken, egg and lettuce, with fries.', 'ثلاث طبقات دجاج وبيض وخس مع بطاطس.'], p: 36, img: '' },
            { n: ['Margherita Pizza', 'بيتزا مارغريتا'], d: ['Tomato, mozzarella and basil.', 'طماطم وموزاريلا وريحان.'], p: 40, img: '' },
            { n: ['Caesar Salad', 'سلطة سيزر'], d: ['Romaine, parmesan, croutons. Add grilled chicken for 10.', 'خس روماني وبارميزان وخبز محمص. أضف دجاجاً بـ 10.'], p: 32, img: '' }
          ]
        }
      ]
    },

    /* ------------------------------------------------------------ HOT */
    {
      id: 'hot',
      name: ['Hot Drinks', 'مشروبات ساخنة'],
      groups: [
        {
          name: ['Coffee', 'قهوة'],
          items: [
            { n: ['Espresso', 'إسبريسو'], d: ['A short, concentrated shot.', 'جرعة مركّزة وقصيرة.'], p: 9 },
            { n: ['Double Espresso', 'إسبريسو دبل'], d: ['Two shots, the same bold finish.', 'جرعتان بنفس النكهة القوية.'], p: 12 },
            { n: ['Americano', 'أمريكانو'], d: ['Espresso lengthened with hot water.', 'إسبريسو مع ماء ساخن.'], p: { s: 12, m: 14, l: 16 } },
            { n: ['Cappuccino', 'كابتشينو'], d: ['Espresso, steamed milk and foam in equal parts.', 'إسبريسو وحليب مبخّر ورغوة بنسب متساوية.'], p: { s: 15, m: 17, l: 19 } },
            { n: ['Latte', 'لاتيه'], d: ['Espresso with silky steamed milk.', 'إسبريسو مع حليب مبخّر ناعم.'], p: { s: 15, m: 17, l: 19 } },
            { n: ['Flat White', 'فلات وايت'], d: ['Double ristretto with velvety microfoam.', 'ريستريتو مزدوج مع رغوة حليب مخملية.'], p: 16 },
            { n: ['Cortado', 'كورتادو'], d: ['Espresso cut with a little warm milk.', 'إسبريسو مع قليل من الحليب الدافئ.'], p: 14 },
            { n: ['Macchiato', 'ماكياتو'], d: ['Espresso marked with a spoon of foam.', 'إسبريسو مع ملعقة من رغوة الحليب.'], p: 12 },
            { n: ['Mocha', 'موكا'], d: ['Espresso, dark chocolate and steamed milk.', 'إسبريسو وشوكولاتة داكنة وحليب مبخّر.'], p: { s: 17, m: 19, l: 21 } },
            { n: ['Spanish Latte', 'سبانش لاتيه'], d: ['Latte sweetened with condensed milk.', 'لاتيه محلّى بالحليب المكثّف.'], p: { s: 17, m: 19, l: 21 }, t: ['popular'] },
            { n: ['Pistachio Latte', 'لاتيه الفستق'], d: ['Roasted pistachio cream over espresso and milk.', 'كريمة الفستق المحمّص مع الإسبريسو والحليب.'], p: { s: 19, m: 21, l: 23 }, t: ['new'] },
            { n: ['Saffron Latte', 'لاتيه الزعفران'], d: ['Espresso and milk with saffron and a touch of honey.', 'إسبريسو وحليب مع الزعفران ولمسة عسل.'], p: { s: 19, m: 21, l: 23 }, t: ['new'] },
            { n: ['Turkish Coffee', 'قهوة تركية'], d: ['Finely ground and simmered slowly in a cezve.', 'بن ناعم يُغلى ببطء في الركوة.'], p: 10 },
            { n: ['Arabic Coffee', 'قهوة عربية'], d: ['Light roast with cardamom, served in a dallah for two, with dates.', 'تحميص خفيف بالهيل، تُقدَّم في دلة تكفي شخصين مع التمر.'], p: 28 }
          ]
        },
        {
          name: ['Tea', 'شاي'],
          items: [
            { n: ['Karak Tea', 'شاي كرك'], d: ['Strong black tea simmered with milk and cardamom.', 'شاي أسود قوي مغلي مع الحليب والهيل.'], p: 8, t: ['popular'] },
            { n: ['Black Tea', 'شاي أحمر'], d: ['Classic loose-leaf tea, served in a glass.', 'شاي أوراق كلاسيكي يُقدَّم في كوب زجاج.'], p: 7 },
            { n: ['Mint Tea', 'شاي بالنعناع'], d: ['Green tea with fresh mint.', 'شاي أخضر مع نعناع طازج.'], p: 9 },
            { n: ['Green Tea', 'شاي أخضر'], d: ['Light and clean, no sugar added.', 'خفيف ومنعش، بدون سكر.'], p: 8 },
            { n: ['Chamomile', 'بابونج'], d: ['Caffeine-free and calming.', 'خالٍ من الكافيين ومهدّئ.'], p: 8 }
          ]
        },
        {
          name: ['More hot drinks', 'مشروبات ساخنة أخرى'],
          items: [
            { n: ['Hot Chocolate', 'هوت شوكليت'], d: ['Dark chocolate melted into steamed milk.', 'شوكولاتة داكنة ذائبة في حليب مبخّر.'], p: { s: 15, m: 17, l: 19 }, t: ['seasonal'] },
            { n: ['Sahlab', 'سحلب'], d: ['Creamy hot milk pudding with cinnamon and nuts.', 'مشروب حليب كريمي ساخن بالقرفة والمكسرات.'], p: 14, t: ['seasonal'] },
            { n: ['Chai Latte', 'تشاي لاتيه'], d: ['Spiced black tea with steamed milk.', 'شاي أسود بالتوابل مع حليب مبخّر.'], p: { s: 16, m: 18, l: 20 }, t: ['seasonal'] },
            { n: ['Matcha Latte', 'ماتشا لاتيه'], d: ['Whisked matcha with steamed milk.', 'ماتشا مخفوقة مع حليب مبخّر.'], p: { s: 18, m: 20, l: 22 } },
            { n: ['Honey Milk', 'حليب بالعسل'], d: ['Warm milk with a spoon of honey.', 'حليب دافئ مع ملعقة عسل.'], p: 10 }
          ]
        }
      ]
    },

    /* ----------------------------------------------------------- COLD */
    {
      id: 'cold',
      name: ['Cold Drinks', 'مشروبات باردة'],
      groups: [
        {
          name: ['Iced coffee', 'قهوة مثلجة'],
          items: [
            { n: ['Iced Latte', 'آيس لاتيه'], d: ['Espresso and cold milk over ice.', 'إسبريسو وحليب بارد مع الثلج.'], p: { s: 16, m: 18, l: 20 } },
            { n: ['Iced Americano', 'آيس أمريكانو'], d: ['Espresso over ice and cold water.', 'إسبريسو مع الثلج والماء البارد.'], p: { s: 13, m: 15, l: 17 } },
            { n: ['Iced Spanish Latte', 'آيس سبانش لاتيه'], d: ['Iced latte with condensed milk.', 'آيس لاتيه بالحليب المكثّف.'], p: { s: 18, m: 20, l: 22 }, t: ['popular'] },
            { n: ['Iced Mocha', 'آيس موكا'], d: ['Espresso, chocolate and cold milk.', 'إسبريسو وشوكولاتة وحليب بارد.'], p: { s: 18, m: 20, l: 22 } },
            { n: ['Cold Brew', 'كولد برو'], d: ['Steeped for 18 hours. Smooth and low in acid.', 'منقوع لمدة 18 ساعة. ناعم وقليل الحموضة.'], p: { s: 17, l: 20 } },
            { n: ['Rose Cold Brew', 'كولد برو بالورد'], d: ['Cold brew with rose syrup and a splash of milk.', 'كولد برو مع شراب الورد وقليل من الحليب.'], p: { s: 20, l: 23 }, t: ['new'] },
            { n: ['Caramel Frappé', 'فرابيه كراميل'], d: ['Blended coffee, caramel and ice, topped with cream.', 'قهوة مخفوقة مع الكراميل والثلج وكريمة مخفوقة.'], p: { s: 20, m: 22, l: 24 } },
            { n: ['Affogato', 'أفوغاتو'], d: ['Vanilla ice cream with a hot espresso poured over.', 'آيس كريم فانيلا مع إسبريسو ساخن.'], p: 18 }
          ]
        },
        {
          name: ['Refreshers', 'منعشات'],
          items: [
            { n: ['Orange Blossom Lemonade', 'ليمونادة بماء الزهر'], d: ['Lemon, mint and orange blossom water.', 'ليمون ونعناع وماء الزهر.'], p: { s: 16, l: 19 }, t: ['new'] },
            { n: ['Mint Lemonade', 'ليمون بالنعناع'], d: ['Fresh lemon blended with mint.', 'ليمون طازج مخفوق مع النعناع.'], p: { s: 14, l: 17 }, t: ['popular'] },
            { n: ['Passion Fruit Mojito', 'موهيتو باشن فروت'], d: ['Passion fruit, lime, mint and soda.', 'باشن فروت وليمون ونعناع وصودا.'], p: { s: 18, l: 21 } },
            { n: ['Strawberry Mojito', 'موهيتو فراولة'], d: ['Strawberry, lime, mint and soda.', 'فراولة وليمون ونعناع وصودا.'], p: { s: 18, l: 21 } },
            { n: ['Blue Lagoon', 'بلو لاجون'], d: ['Blue curaçao syrup, lemon and soda.', 'شراب بلو كوراساو وليمون وصودا.'], p: 18 },
            { n: ['Iced Hibiscus', 'كركديه بارد'], d: ['Chilled hibiscus with a hint of mint.', 'كركديه بارد مع لمسة نعناع.'], p: { s: 14, l: 17 } },
            { n: ['Iced Peach Tea', 'شاي مثلج بالخوخ'], d: ['Black tea, peach and ice.', 'شاي أسود وخوخ وثلج.'], p: { s: 14, l: 17 } }
          ]
        },
        {
          name: ['Fresh juices', 'عصائر طازجة'],
          items: [
            { n: ['Orange', 'برتقال'], d: ['Squeezed to order.', 'يُعصر عند الطلب.'], p: { s: 16, l: 20 } },
            { n: ['Pomegranate', 'رمان'], d: ['Pressed from whole pomegranates.', 'مُعصور من حبات الرمان الكاملة.'], p: { s: 20, l: 24 } },
            { n: ['Carrot', 'جزر'], d: ['Sweet, bright and cold.', 'حلو ومنعش وبارد.'], p: { s: 14, l: 18 } },
            { n: ['Watermelon', 'بطيخ'], d: ['Fresh watermelon, no added sugar.', 'بطيخ طازج بدون سكر مضاف.'], p: { s: 14, l: 18 } },
            { n: ['Mango', 'مانجو'], d: ['Ripe mango blended thick.', 'مانجو ناضج مخفوق وكثيف.'], p: { s: 18, l: 22 } },
            { n: ['Avocado & Honey', 'أفوكادو بالعسل'], d: ['Thick avocado blend with honey and milk.', 'أفوكادو كثيف مع العسل والحليب.'], p: { s: 22, l: 26 } }
          ]
        },
        {
          name: ['Smoothies & shakes', 'سموذي وميلك شيك'],
          items: [
            { n: ['Strawberry Banana Smoothie', 'سموذي فراولة وموز'], d: ['Strawberry and banana blended with yoghurt.', 'فراولة وموز مخفوقان مع الزبادي.'], p: 20 },
            { n: ['Mango Smoothie', 'سموذي مانجو'], d: ['Mango, yoghurt and a little honey.', 'مانجو وزبادي وقليل من العسل.'], p: 20 },
            { n: ['Mixed Berry Smoothie', 'سموذي توت مشكل'], d: ['Strawberry, blueberry and raspberry.', 'فراولة وتوت أزرق وتوت أحمر.'], p: 22 },
            { n: ['Vanilla Milkshake', 'ميلك شيك فانيلا'], d: ['Vanilla ice cream and cold milk.', 'آيس كريم فانيلا وحليب بارد.'], p: 20 },
            { n: ['Chocolate Milkshake', 'ميلك شيك شوكولاتة'], d: ['Chocolate ice cream and cold milk.', 'آيس كريم شوكولاتة وحليب بارد.'], p: 20 },
            { n: ['Cookies & Cream Shake', 'ميلك شيك كوكيز وكريمة'], d: ['Crushed chocolate cookies blended into vanilla.', 'كوكيز شوكولاتة مجروشة مخفوقة مع الفانيلا.'], p: 22, t: ['popular'] }
          ]
        },
        {
          name: ['Water & soft drinks', 'مياه ومشروبات غازية'],
          items: [
            { n: ['Mineral Water', 'مياه معدنية'], d: ['Still.', 'عادية.'], p: { s: 3, l: 6 } },
            { n: ['Sparkling Water', 'مياه فوارة'], d: ['Served with lemon.', 'تُقدَّم مع الليمون.'], p: 9 },
            { n: ['Soft Drink', 'مشروب غازي'], d: ['Cola, lemon-lime or orange.', 'كولا أو ليمون أو برتقال.'], p: 7 }
          ]
        }
      ]
    },

    /* ---------------------------------------------------------- BITES */
    {
      id: 'bites',
      name: ['Light Bites', 'وجبات خفيفة'],
      groups: [
        {
          items: [
            { n: ['Butter Croissant', 'كرواسون بالزبدة'], d: ['Baked fresh every morning.', 'يُخبز طازجاً كل صباح.'], p: 10 },
            { n: ['Cheese & Zaatar Croissant', 'كرواسون جبنة وزعتر'], d: ['Melted cheese with thyme and sesame.', 'جبنة ذائبة مع الزعتر والسمسم.'], p: 14 },
            { n: ['Halloumi & Tomato Sandwich', 'ساندويتش حلوم وطماطم'], d: ['Grilled halloumi, tomato and mint on sourdough.', 'حلوم مشوي وطماطم ونعناع على خبز العجين المخمّر.'], p: 24 },
            { n: ['Chicken Pesto Panini', 'بانيني دجاج بالبيستو'], d: ['Grilled chicken, basil pesto and mozzarella.', 'دجاج مشوي وبيستو الريحان وموزاريلا.'], p: 28 },
            { n: ['Avocado & Egg Toast', 'توست أفوكادو وبيض'], d: ['Smashed avocado, poached egg and chili flakes.', 'أفوكادو مهروس وبيض مسلوق وفلفل مجروش.'], p: 26 },
            { n: ['Labneh & Olive Bagel', 'بيغل لبنة وزيتون'], d: ['Labneh, olives, cucumber and olive oil.', 'لبنة وزيتون وخيار وزيت زيتون.'], p: 22 },
            { n: ['Chicken Caesar Salad', 'سلطة سيزر بالدجاج'], d: ['Romaine, grilled chicken, parmesan and croutons.', 'خس روماني ودجاج مشوي وبارميزان وخبز محمّص.'], p: 30 }
          ]
        }
      ]
    },

    /* ------------------------------------------------------- DESSERTS */
    {
      id: 'desserts',
      name: ['Desserts', 'حلويات'],
      groups: [
        {
          items: [
            { n: ['Basque Cheesecake', 'تشيز كيك باسك'], d: ['Burnt top, creamy centre.', 'وجه محروق وقلب كريمي.'], p: 24, t: ['popular'] },
            { n: ['Kunafa Cheesecake', 'تشيز كيك الكنافة'], d: ['Creamy cheesecake under crisp kunafa and pistachio.', 'تشيز كيك كريمي مع كنافة مقرمشة وفستق.'], p: 28, t: ['new'] },
            { n: ['Pistachio Kunafa Chocolate Bar', 'لوح شوكولاتة الفستق والكنافة'], d: ['Milk chocolate filled with crunchy kunafa and pistachio cream.', 'شوكولاتة بالحليب محشوة بالكنافة المقرمشة وكريمة الفستق.'], p: 26, t: ['new'] },
            { n: ['Sticky Date Pudding', 'بودينغ التمر'], d: ['Warm date cake with toffee sauce.', 'كيكة التمر الدافئة مع صلصة التوفي.'], p: 22 },
            { n: ['Chocolate Lava Cake', 'كيكة الشوكولاتة الذائبة'], d: ['Warm cake with a molten centre and vanilla ice cream.', 'كيكة دافئة بقلب شوكولاتة سائل مع آيس كريم فانيلا.'], p: 26 },
            { n: ['Tiramisu', 'تيراميسو'], d: ['Espresso-soaked layers with mascarpone.', 'طبقات منقوعة بالإسبريسو مع الماسكاربوني.'], p: 24 },
            { n: ['Umm Ali', 'أم علي'], d: ['Baked pastry in sweet cream with nuts and raisins.', 'عجين مخبوز بالقشطة الحلوة مع المكسرات والزبيب.'], p: 20, t: ['seasonal'] },
            { n: ['Chocolate Chip Cookie', 'كوكيز بقطع الشوكولاتة'], d: ['Soft in the middle, baked daily.', 'طرية من الداخل، تُخبز يومياً.'], p: 9 },
            { n: ['Brownie', 'براوني'], d: ['Dense and fudgy, served warm.', 'كثيف وغني بالشوكولاتة، يُقدَّم دافئاً.'], p: 14 }
          ]
        }
      ]
    },

    /* --------------------------------------------------------- ADD-ONS */
    {
      id: 'addons',
      name: ['Add-ons', 'إضافات'],
      groups: [
        {
          items: [
            { n: ['Extra espresso shot', 'شوت إسبريسو إضافي'], p: 4, plus: true },
            { n: ['Oat or almond milk', 'حليب الشوفان أو اللوز'], p: 4, plus: true },
            { n: ['Flavour syrup', 'نكهة إضافية'], d: ['Vanilla, caramel or hazelnut.', 'فانيلا أو كراميل أو بندق.'], p: 3, plus: true },
            { n: ['Whipped cream', 'كريمة مخفوقة'], p: 2, plus: true }
          ]
        }
      ]
    }
  ]
};
