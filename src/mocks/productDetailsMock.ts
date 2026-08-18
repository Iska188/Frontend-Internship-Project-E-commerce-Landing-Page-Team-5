export interface ReviewItem {
  id: number | string;
  name: string;
  avatar: string;
  date: string;
  rating: number;
  comment: string;
}

export interface ProductDetailsData {
  id: string;
  title: string;
  badge: string;
  rating: number;
  reviewsCount: number;
  price: number;
  oldPrice: number;
  discountPercentage: string;
  description: string;
  sizes: string[];
  defaultSize: string;
  sizePrices?: Record<string, { price: number; oldPrice?: number }>;
  images: string[];
  specs: {
    type: string;
    mfg: string;
    life: string;
    sku: string;
    tags: string;
    stock: string;
  };
  tabs: {
    description: {
      paragraphs: string[];
      keySpecs: { label: string; value: string }[];
      bodyAfterSpecs: string[];
      packaging: string[];
      suggestedUse: string[];
      otherIngredients: string[];
      warnings: string[];
    };
    additionalInfo: { label: string; value: string }[];
    vendor: {
      name: string;
      rating: number;
      reviewsCount: number;
      address: string;
      phone: string;
      description: string;
    };
    reviews: ReviewItem[];
  };
}

const DEFAULT_REVIEWS: ReviewItem[] = [
  {
    id: 1,
    name: 'Sienna Miller',
    avatar: 'src/assets/blog/posts/post1.png',
    date: 'December 4, 2022 at 3:12 pm',
    rating: 5,
    comment:
      'Absolutely delicious and freshly packed! This has become a staple in my pantry for quick and healthy meals. Highly recommend!',
  },
  {
    id: 2,
    name: 'Brenna Davis',
    avatar: 'src/assets/blog/posts/post2.png',
    date: 'December 4, 2022 at 3:15 pm',
    rating: 5,
    comment:
      'Great organic ingredients, excellent flavor balance and super easy to prepare. Delivery was fast and neat.',
  },
  {
    id: 3,
    name: 'Gemma Robinson',
    avatar: 'src/assets/blog/posts/post3.png',
    date: 'December 4, 2022 at 3:30 pm',
    rating: 4,
    comment:
      'Top quality food product. The taste is genuine and authentic. I will definitely purchase again.',
  },
];

const DEFAULT_VENDOR = {
  name: 'NestFood Grocery',
  rating: 4.9,
  reviewsCount: 128,
  address: '5171 W Campbell Ave undefined Kent, Utah 53127 United States',
  phone: '(+91) - 540-025-124553',
  description:
    'NestFood is dedicated to delivering only the finest certified organic produce, pantry essentials, and nutritious foods directly to your doorstep.',
};

export const PRODUCTS_DATABASE: Record<string, ProductDetailsData> = {
  'seeds-of-change-organic-quinoa-brown': {
    id: 'seeds-of-change-organic-quinoa-brown',
    title: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
    badge: 'Sale Off',
    rating: 5.0,
    reviewsCount: 32,
    price: 38,
    oldPrice: 52,
    discountPercentage: '26% Off',
    description:
      'A delicious whole grain blend combining organic brown rice, red rice, and nutrient-dense quinoa with a touch of sea salt. Packed with dietary fiber and clean plant-based protein, it pairs effortlessly with any meal.',
    sizes: ['50g', '60g', '90g', '100g', '150g'],
    defaultSize: '60g',
    sizePrices: {
      '50g': { price: 32.0, oldPrice: 44.0 },
      '60g': { price: 38.0, oldPrice: 52.0 },
      '90g': { price: 54.0, oldPrice: 72.0 },
      '100g': { price: 60.0, oldPrice: 80.0 },
      '150g': { price: 85.0, oldPrice: 110.0 },
    },
    images: [
      'src/assets/deals/Seeds.png',
      'src/assets/body/popularproducts/product-7.png',
      'src/assets/deals/Seeds.png',
      'src/assets/body/popularproducts/product-7.png',
    ],
    specs: {
      type: 'Organic Grains',
      mfg: 'Jun 4.2021',
      life: '70 days',
      sku: 'FWH1E5VK8',
      tags: 'Snack, Organic, Brown, Quinoa',
      stock: '8 Items In Stock',
    },
    tabs: {
      description: {
        paragraphs: [
          'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.',
          'Spluttered narrowly yikes left moth in vikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfish mastodon goodness gnashed a jellyfish and one however because.',
        ],
        keySpecs: [
          { label: 'Type Of Packing', value: 'Pouch Bag' },
          { label: 'Color', value: 'Natural Brown, Golden Quinoa' },
          { label: 'Quantity Per Case', value: '100ml / 250g' },
          { label: 'Certification', value: 'USDA Organic, Non-GMO' },
          { label: 'Piece In One', value: 'Carton' },
        ],
        bodyAfterSpecs: [
          'Laconic overhead dear woodchuck wow this outrageously taut beaver hey hello far meadowlark imitatively egregiously hopped that yikes minimally unanimous pouted flirtatiously as beaver beheld above forward energetic across this jeepers beneficently cozily less a the raucously that magic upheld far so the this where crud then below after jeez enchanting drunkenly more much wow callously irrespective limpet.',
        ],
        packaging: [
          'Less lion goodness that euphemistically robin expeditiously biblically smugly scratched far while then cackled sheepishly rigid after due one asserting regarding censorious while occasional or this more crane went more as this less much amid overhang anathematic because much held one exuberantly sheep goodness so where ran very well concomitantly.',
          'Scallop or far crud plain remarkably far by this far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whispered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew luridly irrationally attractively dachshund.',
        ],
        suggestedUse: [
          'Microwave: Squeeze pouch to separate rice, tear top 2 inches to vent, heat on high for 90 seconds.',
          'Skillet: Squeeze pouch, pour contents into skillet, add 2 tbsp water, stir over medium heat for 3-5 mins.',
        ],
        otherIngredients: [
          'Water, Whole Grain Brown Rice*, Whole Grain Red Rice*, Whole Grain Quinoa*, Expeller Pressed Sunflower Oil*, Sea Salt, Garlic Powder*, Tapioca Starch*, Onion Powder*, Soy Lecithin*. *Organic ingredient.',
        ],
        warnings: [
          'Pouch and contents will be hot after heating. Handle with care.',
        ],
      },
      additionalInfo: [
        { label: 'Serving Size', value: '1 cup (140g)' },
        { label: 'Servings Per Container', value: 'About 2' },
        { label: 'Calories', value: '240 kcal' },
        { label: 'Total Fat', value: '4g' },
        { label: 'Dietary Fiber', value: '4g' },
        { label: 'Total Sugars', value: '0g' },
        { label: 'Protein', value: '6g' },
        { label: 'Storage', value: 'Store unopened pouch at room temperature.' },
      ],
      vendor: DEFAULT_VENDOR,
      reviews: DEFAULT_REVIEWS,
    },
  },

  'foster-farms-crispy': {
    id: 'foster-farms-crispy',
    title: 'Foster Farms Takeout Crispy Classic Chicken Wings',
    badge: '10% Off',
    rating: 4.8,
    reviewsCount: 19,
    price: 17.85,
    oldPrice: 19.8,
    discountPercentage: '10% Off',
    description:
      'Restaurant-quality crispy chicken wings made from all-natural cuts, expertly seasoned for maximum crunch. Perfect in an air fryer or conventional oven for quick appetizers, game days, and family dinners.',
    sizes: ['500g', '1kg', '1.5kg'],
    defaultSize: '1kg',
    sizePrices: {
      '500g': { price: 9.95, oldPrice: 11.50 },
      '1kg': { price: 17.85, oldPrice: 19.80 },
      '1.5kg': { price: 25.50, oldPrice: 28.50 },
    },
    images: [
      'src/assets/body/popularproducts/product-1.png',
      'src/assets/body/popularproducts/product-1.png',
      'src/assets/body/popularproducts/product-1.png',
      'src/assets/body/popularproducts/product-1.png',
    ],
    specs: {
      type: 'Fresh Poultry',
      mfg: 'Aug 10.2022',
      life: '180 days',
      sku: 'FF-WINGS-09',
      tags: 'Chicken, Wings, Crispy, Frozen',
      stock: '24 Items In Stock',
    },
    tabs: {
      description: {
        paragraphs: [
          'Enjoy delicious takeout flavor without leaving home. Foster Farms Takeout Crispy Classic Wings come seasoned and breaded to golden perfection.',
          'Crafted with premium chicken raised with no added hormones and no antibiotics ever, guaranteeing juicy meat inside and unmatched crunch outside.',
        ],
        keySpecs: [
          { label: 'Cut', value: 'Wing Sections (Flats & Drumettes)' },
          { label: 'Preparation', value: 'Air Fryer or Oven Ready' },
          { label: 'Origin', value: 'USA Farm Raised' },
        ],
        bodyAfterSpecs: [
          'Pair with your favorite classic buffalo sauce, ranch dip, or sweet chili glaze for an authentic sports bar feast right in your kitchen.',
        ],
        packaging: [
          'Resealable heavy-duty freezer pouch ensures lasting freshness and easy portion control.',
        ],
        suggestedUse: [
          'Air Fryer: Preheat to 400°F. Place wings in single layer and cook for 16-18 mins, flipping halfway.',
          'Conventional Oven: Bake at 425°F on baking sheet for 24-28 minutes until crisp and internal temp reaches 165°F.',
        ],
        otherIngredients: [
          'Chicken wing sections, water, rice flour, wheat flour, corn starch, contains 2% or less of sea salt, garlic powder, onion powder, paprika, black pepper, yeast extract.',
        ],
        warnings: [
          'Contains Wheat. Keep frozen until ready to cook.',
        ],
      },
      additionalInfo: [
        { label: 'Weight', value: '32 oz (2 lbs / 907g)' },
        { label: 'Cooking Method', value: 'Bake, Air Fry, Deep Fry' },
        { label: 'Storage', value: 'Keep Frozen at 0°F (-18°C)' },
      ],
      vendor: DEFAULT_VENDOR,
      reviews: DEFAULT_REVIEWS,
    },
  },

  'organic-cage-grade-eggs': {
    id: 'organic-cage-grade-eggs',
    title: 'Organic Cage Grade A Large Brown Farm Eggs',
    badge: 'Hot',
    rating: 5.0,
    reviewsCount: 48,
    price: 21.0,
    oldPrice: 24.0,
    discountPercentage: '13% Off',
    description:
      'Farm-fresh Grade A organic brown eggs from pasture-raised hens fed a 100% organic vegetarian diet. Boasts vibrant golden-orange yolks, thick whites, and pure wholesome flavor.',
    sizes: ['6 Pack', '12 Pack', '18 Pack', '30 Pack'],
    defaultSize: '12 Pack',
    sizePrices: {
      '6 Pack': { price: 11.50, oldPrice: 13.00 },
      '12 Pack': { price: 21.00, oldPrice: 24.00 },
      '18 Pack': { price: 29.50, oldPrice: 34.00 },
      '30 Pack': { price: 46.00, oldPrice: 52.00 },
    },
    images: [
      'src/assets/deals/OrganicCage.png',
      'src/assets/deals/OrganicCage.png',
      'src/assets/deals/OrganicCage.png',
      'src/assets/deals/OrganicCage.png',
    ],
    specs: {
      type: 'Dairy & Farm Fresh',
      mfg: 'Yesterday',
      life: '35 days',
      sku: 'ORG-EGG-12A',
      tags: 'Eggs, Organic, Free-Range, Protein',
      stock: '45 Cartons In Stock',
    },
    tabs: {
      description: {
        paragraphs: [
          'Start your morning right with organic pasture-raised eggs. Our hens roam freely outdoors with unlimited access to sunshine, fresh air, and organic forage.',
          'Each egg delivers 6 grams of high-quality complete protein and essential choline to nourish your body and energize your day.',
        ],
        keySpecs: [
          { label: 'Grade', value: 'Grade A Large' },
          { label: 'Color', value: 'Natural Brown' },
          { label: 'Diet', value: '100% Certified Organic Vegetarian Feed' },
        ],
        bodyAfterSpecs: [
          'Superior quality you can see in the pan: rich yolks that stand tall and whites that fry cleanly without spreading thin.',
        ],
        packaging: [
          'Eco-friendly, 100% recycled paperboard molded carton designed for superior egg protection.',
        ],
        suggestedUse: [
          'Keep refrigerated at or below 40°F (4°C). Ideal for sunny-side up, soft boiling, poaching, and gourmet baking.',
        ],
        otherIngredients: ['100% Organic Grade A Brown Eggs.'],
        warnings: [
          'Contains Eggs. Safe Handling: Cook eggs until yolk and white are firm.',
        ],
      },
      additionalInfo: [
        { label: 'Quantity', value: '12 Large Eggs' },
        { label: 'Calories per egg', value: '70 kcal' },
        { label: 'Protein per egg', value: '6g' },
      ],
      vendor: DEFAULT_VENDOR,
      reviews: DEFAULT_REVIEWS,
    },
  },

  'haagen-caramel-ice-cream': {
    id: 'haagen-caramel-ice-cream',
    title: 'Haagen-Dazs Caramel Cone Boxed Ice Cream Cups',
    badge: 'New',
    rating: 4.9,
    reviewsCount: 27,
    price: 22.85,
    oldPrice: 24.8,
    discountPercentage: '8% Off',
    description:
      'Luxurious creamy caramel ice cream infused with golden ribbons of slow-cooked buttery caramel and sweet crunchy chocolate-coated cone pieces for the ultimate frozen dessert.',
    sizes: ['1 Pint (473ml)', '4-Pack Cups', '1 Quart'],
    defaultSize: '4-Pack Cups',
    sizePrices: {
      '1 Pint (473ml)': { price: 7.95, oldPrice: 8.90 },
      '4-Pack Cups': { price: 22.85, oldPrice: 24.80 },
      '1 Quart': { price: 14.50, oldPrice: 16.00 },
    },
    images: [
      'src/assets/body/popularproducts/product-3.png',
      'src/assets/body/popularproducts/product-3.png',
      'src/assets/body/popularproducts/product-3.png',
      'src/assets/body/popularproducts/product-3.png',
    ],
    specs: {
      type: 'Frozen Dessert',
      mfg: 'Jul 15.2022',
      life: '365 days',
      sku: 'HD-CONE-01',
      tags: 'Ice Cream, Sweet, Caramel, Dairy',
      stock: '18 Tubs In Stock',
    },
    tabs: {
      description: {
        paragraphs: [
          'Crafted with extraordinary passion and pure ingredients: cream, skim milk, cane sugar, and rich egg yolks. Every spoonful offers a decadent textural symphony.',
        ],
        keySpecs: [
          { label: 'Flavor', value: 'Caramel with Chocolate Cone Pieces' },
          { label: 'Base', value: 'Real Dairy Cream' },
        ],
        bodyAfterSpecs: [
          'No artificial flavors or synthetic colors. Simple, pure luxury in every bite.',
        ],
        packaging: ['Insulated recyclable carton.'],
        suggestedUse: ['Serve frozen directly from tub or with warm apple pie.'],
        otherIngredients: [
          'Cream, skim milk, cane sugar, caramel swirl (sweetened condensed milk, sugar, water, corn syrup, butter), chocolate cone pieces, egg yolks.',
        ],
        warnings: ['Contains Milk, Egg, Wheat, and Soy.'],
      },
      additionalInfo: [
        { label: 'Volume', value: '14 fl oz (414ml)' },
        { label: 'Calories', value: '330 kcal per 2/3 cup' },
      ],
      vendor: DEFAULT_VENDOR,
      reviews: DEFAULT_REVIEWS,
    },
  },

  'all-natural-style-chicken': {
    id: 'all-natural-style-chicken',
    title: 'All Natural Italian-Style Seasoned Chicken Meatballs',
    badge: 'Sale',
    rating: 4.7,
    reviewsCount: 15,
    price: 23.0,
    oldPrice: 32.0,
    discountPercentage: '28% Off',
    description:
      'Tender, juicy meatballs prepared from all-natural lean chicken, seasoned with aged parmesan, roasted garlic, cracked oregano, and aromatic sweet basil. Fully cooked and ready to warm.',
    sizes: ['400g', '800g', '1.2kg'],
    defaultSize: '800g',
    sizePrices: {
      '400g': { price: 12.50, oldPrice: 16.50 },
      '800g': { price: 23.00, oldPrice: 32.00 },
      '1.2kg': { price: 33.50, oldPrice: 45.00 },
    },
    images: [
      'src/assets/body/popularproducts/product-4.png',
      'src/assets/body/popularproducts/product-4.png',
      'src/assets/body/popularproducts/product-4.png',
      'src/assets/body/popularproducts/product-4.png',
    ],
    specs: {
      type: 'Prepared Meats',
      mfg: 'Sep 01.2022',
      life: '90 days',
      sku: 'MB-ITAL-77',
      tags: 'Chicken, Meatballs, Italian, Dinner',
      stock: '15 Packs In Stock',
    },
    tabs: {
      description: {
        paragraphs: [
          'Make delicious spaghetti & meatballs or warm meatball subs in under 10 minutes. Fully cooked and flash frozen to seal in natural juices and herb aromas.',
        ],
        keySpecs: [
          { label: 'Meat', value: '100% Lean White & Dark Chicken' },
          { label: 'Seasoning', value: 'Parmesan, Romano, Garlic, Parsley, Basil' },
        ],
        bodyAfterSpecs: [
          'Low in saturated fats, high in clean protein, and loved by children and adults alike.',
        ],
        packaging: ['Zip-lock freshness freezer bag.'],
        suggestedUse: [
          'Simmer in marinara sauce over low heat for 15-20 minutes until heated through.',
        ],
        otherIngredients: [
          'Chicken, water, bread crumbs, parmesan cheese, romano cheese, sea salt, dried garlic, dried onion, spices.',
        ],
        warnings: ['Contains Milk and Wheat.'],
      },
      additionalInfo: [
        { label: 'Net Weight', value: '26 oz (737g)' },
        { label: 'Protein per serving', value: '16g' },
      ],
      vendor: DEFAULT_VENDOR,
      reviews: DEFAULT_REVIEWS,
    },
  },

  'blue-almonds-lightly-salted': {
    id: 'blue-almonds-lightly-salted',
    title: 'Blue Diamond Lightly Salted Roasted California Almonds',
    badge: 'Hot',
    rating: 5.0,
    reviewsCount: 64,
    price: 23.85,
    oldPrice: 25.8,
    discountPercentage: '8% Off',
    description:
      'Gently oven-roasted California supreme whole almonds sprinkled with a delicate dash of sea salt. Delivering 50% less sodium than regular roasted nuts with 100% pure almond crunch.',
    sizes: ['150g', '300g', '500g', '1kg'],
    defaultSize: '500g',
    sizePrices: {
      '150g': { price: 8.50, oldPrice: 9.80 },
      '300g': { price: 15.20, oldPrice: 17.00 },
      '500g': { price: 23.85, oldPrice: 25.80 },
      '1kg': { price: 42.00, oldPrice: 48.00 },
    },
    images: [
      'src/assets/body/popularproducts/product-5.png',
      'src/assets/body/popularproducts/product-5.png',
      'src/assets/body/popularproducts/product-5.png',
      'src/assets/body/popularproducts/product-5.png',
    ],
    specs: {
      type: 'Nuts & Seeds',
      mfg: 'May 20.2022',
      life: '240 days',
      sku: 'BD-ALM-55',
      tags: 'Almonds, Healthy, Vegan, Snack',
      stock: '50 Bags In Stock',
    },
    tabs: {
      description: {
        paragraphs: [
          'A heart-healthy superfood snack loaded with vitamin E, magnesium, and healthy monounsaturated fats to fuel your active lifestyle.',
        ],
        keySpecs: [
          { label: 'Origin', value: 'California Orchards, USA' },
          { label: 'Roast', value: 'Even Dry Roast' },
        ],
        bodyAfterSpecs: [
          'Great on their own, tossed over crisp green salads, or chopped into breakfast yogurt and oatmeal bowls.',
        ],
        packaging: ['Foil-lined zip bag with air barrier.'],
        suggestedUse: ['Ready to eat. Keep sealed in a cool, dry place.'],
        otherIngredients: ['Almonds, vegetable oil (canola and/or almond), sea salt.'],
        warnings: ['Contains Tree Nuts (Almonds). May contain other tree nuts and peanuts.'],
      },
      additionalInfo: [
        { label: 'Net Weight', value: '16 oz (454g)' },
        { label: 'Fiber', value: '3g per serving' },
      ],
      vendor: DEFAULT_VENDOR,
      reviews: DEFAULT_REVIEWS,
    },
  },

  'gortons-beer-battered-fish': {
    id: 'gortons-beer-battered-fish',
    title: 'Gorton\'s Beer Battered Crispy Wild Alaskan Fish Fillets',
    badge: 'Popular',
    rating: 4.8,
    reviewsCount: 31,
    price: 23.85,
    oldPrice: 25.8,
    discountPercentage: '8% Off',
    description:
      'Wild-caught 100% whole Alaskan Pollock fillets dipped in genuine draft beer batter for a delightfully crisp, golden, and airy crust with tender flaky white fish inside.',
    sizes: ['10 Fillets', '18 Fillets', '24 Fillets'],
    defaultSize: '10 Fillets',
    sizePrices: {
      '10 Fillets': { price: 23.85, oldPrice: 25.80 },
      '18 Fillets': { price: 39.95, oldPrice: 44.50 },
      '24 Fillets': { price: 51.50, oldPrice: 58.00 },
    },
    images: [
      'src/assets/body/popularproducts/product-6.png',
      'src/assets/body/popularproducts/product-6.png',
      'src/assets/body/popularproducts/product-6.png',
      'src/assets/body/popularproducts/product-6.png',
    ],
    specs: {
      type: 'Wild Seafood',
      mfg: 'Aug 18.2022',
      life: '120 days',
      sku: 'GOR-FISH-32',
      tags: 'Seafood, Fish, Frozen, Crispy',
      stock: '22 Boxes In Stock',
    },
    tabs: {
      description: {
        paragraphs: [
          'Sustainably wild-caught in pristine Alaskan waters and flash frozen at the peak of freshness. Coated in a signature golden draft batter that bakes extra crunchy.',
        ],
        keySpecs: [
          { label: 'Species', value: 'Wild Alaska Pollock' },
          { label: 'Sustainability', value: 'Certified Sustainable Seafood MSC' },
        ],
        bodyAfterSpecs: [
          'Serve with tartar sauce, malt vinegar, and fresh lemon wedges for authentic coastal style fish & chips.',
        ],
        packaging: ['Recyclable cardboard box with inner seal.'],
        suggestedUse: ['Bake at 425°F for 19-21 minutes on a foil-lined baking sheet.'],
        otherIngredients: [
          'Alaska pollock fillets, beer (water, barley malt, corn, yeast, hops), bleached wheat flour, vegetable oil, yellow corn flour, modified corn starch, salt, spices.',
        ],
        warnings: ['Contains Fish (Pollock) and Wheat.'],
      },
      additionalInfo: [
        { label: 'Weight', value: '18.2 oz (516g)' },
        { label: 'Omega-3', value: '190mg per serving' },
      ],
      vendor: DEFAULT_VENDOR,
      reviews: DEFAULT_REVIEWS,
    },
  },

  'canada-dry-ginger-ale': {
    id: 'canada-dry-ginger-ale',
    title: 'Canada Dry Crisp Ginger Ale Sparkling Soda - 2 L Bottle',
    badge: 'Best Price',
    rating: 4.9,
    reviewsCount: 52,
    price: 32.85,
    oldPrice: 35.8,
    discountPercentage: '8% Off',
    description:
      'The gold standard of sparkling refreshment. Made with real ginger extract for a remarkably crisp, clean, and effervescent taste that satisfies anytime of day.',
    sizes: ['1 Liter', '2 Liter', '12-Pack Cans'],
    defaultSize: '2 Liter',
    sizePrices: {
      '1 Liter': { price: 18.50, oldPrice: 20.00 },
      '2 Liter': { price: 32.85, oldPrice: 35.80 },
      '12-Pack Cans': { price: 45.00, oldPrice: 49.50 },
    },
    images: [
      'src/assets/body/popularproducts/product-8.png',
      'src/assets/body/popularproducts/product-8.png',
      'src/assets/body/popularproducts/product-8.png',
      'src/assets/body/popularproducts/product-8.png',
    ],
    specs: {
      type: 'Beverages',
      mfg: 'Jun 12.2022',
      life: '360 days',
      sku: 'CD-GALE-2L',
      tags: 'Soda, Ginger Ale, Refreshing, Drinks',
      stock: '60 Bottles In Stock',
    },
    tabs: {
      description: {
        paragraphs: [
          'Since 1904, Canada Dry has been celebrated for its refined bubbly taste. 100% caffeine-free, making it the perfect beverage to relax, entertain, or mix into party punches.',
        ],
        keySpecs: [
          { label: 'Flavor', value: 'Real Ginger & Lemon-Lime notes' },
          { label: 'Caffeine', value: '0mg (100% Caffeine Free)' },
        ],
        bodyAfterSpecs: ['Best enjoyed chilled over ice with a slice of fresh lime.'],
        packaging: ['Recyclable PET 2 Liter bottle.'],
        suggestedUse: ['Serve cold. Keep refrigerated after opening.'],
        otherIngredients: [
          'Carbonated water, high fructose corn syrup, citric acid, sodium benzoate (preservative), natural flavors, caramel color.',
        ],
        warnings: ['Contents under pressure. Open slowly.'],
      },
      additionalInfo: [{ label: 'Volume', value: '2 Liters (67.6 fl oz)' }],
      vendor: DEFAULT_VENDOR,
      reviews: DEFAULT_REVIEWS,
    },
  },

  'encore-seafoods-stuffed-alaskan': {
    id: 'encore-seafoods-stuffed-alaskan',
    title: 'Encore Seafoods Gourmet Stuffed Alaskan Salmon Fillet',
    badge: 'Sale',
    rating: 4.8,
    reviewsCount: 22,
    price: 35.85,
    oldPrice: 37.8,
    discountPercentage: '6% Off',
    description:
      'Wild caught Alaskan Pink Salmon fillet generously filled with a gourmet stuffing of bay scallops, shrimp, sourdough crumbs, and fine fresh herbs.',
    sizes: ['2 Portions', '4 Portions', '8 Portions'],
    defaultSize: '2 Portions',
    sizePrices: {
      '2 Portions': { price: 35.85, oldPrice: 37.80 },
      '4 Portions': { price: 68.00, oldPrice: 72.00 },
      '8 Portions': { price: 129.00, oldPrice: 140.00 },
    },
    images: [
      'src/assets/body/popularproducts/product-9.png',
      'src/assets/body/popularproducts/product-9.png',
      'src/assets/body/popularproducts/product-9.png',
      'src/assets/body/popularproducts/product-9.png',
    ],
    specs: {
      type: 'Fresh Seafood',
      mfg: 'Sep 10.2022',
      life: '180 days',
      sku: 'ENC-SALM-11',
      tags: 'Salmon, Alaskan, Seafood, Gourmet',
      stock: '12 Packs In Stock',
    },
    tabs: {
      description: {
        paragraphs: [
          'An elegant, restaurant-tier entrée prepared effortlessly in your home oven. High in natural heart-healthy Omega-3 fatty acids and complete proteins.',
        ],
        keySpecs: [
          { label: 'Fish', value: 'Wild Alaskan Salmon' },
          { label: 'Stuffing', value: 'Shrimp, Scallop, Herb Crumb' },
        ],
        bodyAfterSpecs: [
          'Bake directly in its oven-safe tray and pair with roasted asparagus and wild rice pilaf.',
        ],
        packaging: ['Oven-ready tray with vacuum seal.'],
        suggestedUse: ['Bake at 375°F for 22-26 minutes until internal temp reaches 145°F.'],
        otherIngredients: [
          'Alaskan salmon, stuffing (shrimp, bay scallops, water, wheat flour, cream, butter, celery, onions, salt, spices).',
        ],
        warnings: ['Contains Fish, Crustacean Shellfish (Shrimp), Milk, Wheat.'],
      },
      additionalInfo: [{ label: 'Weight', value: '14 oz (397g)' }],
      vendor: DEFAULT_VENDOR,
      reviews: DEFAULT_REVIEWS,
    },
  },

  'angles-sweet-salty-kettle-corn': {
    id: 'angles-sweet-salty-kettle-corn',
    title: 'Angie\'s Boomchickapop Sweet & Salty Kettle Popcorn',
    badge: 'New',
    rating: 5.0,
    reviewsCount: 39,
    price: 48.85,
    oldPrice: 52.8,
    discountPercentage: '8% Off',
    description:
      'Whole grain non-GMO popping corn popped in pure sunflower oil and kissed with real cane sugar and fine sea salt. Only 70 calories per cup for guilt-free sweet snacking.',
    sizes: ['140g', '200g', '400g Family Pack'],
    defaultSize: '200g',
    sizePrices: {
      '140g': { price: 34.50, oldPrice: 38.00 },
      '200g': { price: 48.85, oldPrice: 52.80 },
      '400g Family Pack': { price: 89.00, oldPrice: 98.00 },
    },
    images: [
      'src/assets/body/popularproducts/product-10.png',
      'src/assets/body/popularproducts/product-10.png',
      'src/assets/body/popularproducts/product-10.png',
      'src/assets/body/popularproducts/product-10.png',
    ],
    specs: {
      type: 'Healthy Snacks',
      mfg: 'Jul 22.2022',
      life: '150 days',
      sku: 'ANG-POP-88',
      tags: 'Popcorn, Sweet, Salty, Snack',
      stock: '35 Bags In Stock',
    },
    tabs: {
      description: {
        paragraphs: [
          'Popped with genuine enthusiasm! Certified gluten-free, vegan, and packed with whole grains. The quintessential snack for movies, road trips, and afternoon cravings.',
        ],
        keySpecs: [
          { label: 'Grain', value: '100% Non-GMO Whole Grain Corn' },
          { label: 'Sweetener', value: 'Pure Cane Sugar' },
        ],
        bodyAfterSpecs: ['Zero trans fats and no artificial sweeteners or high fructose corn syrup.'],
        packaging: ['Bright stay-fresh bag.'],
        suggestedUse: ['Open and enjoy immediately with family and friends.'],
        otherIngredients: ['Popcorn, sunflower oil, cane sugar, sea salt.'],
        warnings: ['Manufactured on shared equipment with peanuts and tree nuts.'],
      },
      additionalInfo: [{ label: 'Weight', value: '7 oz (198g)' }],
      vendor: DEFAULT_VENDOR,
      reviews: DEFAULT_REVIEWS,
    },
  },

  'sahale-raspberry-crumble': {
    id: 'sahale-raspberry-crumble',
    title: 'Sahale Snacks Raspberry Crumble Cashew Trail Mix',
    badge: 'Hot',
    rating: 4.8,
    reviewsCount: 26,
    price: 238.85,
    oldPrice: 245.8,
    discountPercentage: '5% Off',
    description:
      'A culinary snack masterpiece. Dry-roasted buttery cashews blended with tart freeze-dried whole raspberries, sweet banana chips, and crunchy gluten-free oat crumbles glazed in pure vanilla and sea salt.',
    sizes: ['113g (4 oz)', '226g (8 oz)', '454g (16 oz)'],
    defaultSize: '226g (8 oz)',
    sizePrices: {
      '113g (4 oz)': { price: 125.00, oldPrice: 130.00 },
      '226g (8 oz)': { price: 238.85, oldPrice: 245.80 },
      '454g (16 oz)': { price: 440.00, oldPrice: 470.00 },
    },
    images: [
      'src/assets/body/popularproducts/product-4.png',
      'src/assets/body/popularproducts/product-4.png',
      'src/assets/body/popularproducts/product-4.png',
      'src/assets/body/popularproducts/product-4.png',
    ],
    specs: {
      type: 'Gourmet Snacks',
      mfg: 'Aug 04.2022',
      life: '200 days',
      sku: 'SAH-RASP-19',
      tags: 'Cashews, Raspberry, Snack, Gluten-Free',
      stock: '40 Bags In Stock',
    },
    tabs: {
      description: {
        paragraphs: [
          'Inspired by homemade raspberry crumble pie. Sahale Snacks blends premium nuts with real fruit pieces and layered glazes for an unforgettable snacking journey.',
        ],
        keySpecs: [
          { label: 'Nuts', value: 'Whole Cashews & Peanuts' },
          { label: 'Fruits', value: 'Dried Raspberries, Banana Chips' },
        ],
        bodyAfterSpecs: ['Non-GMO Project Verified and certified gluten-free.'],
        packaging: ['Foil barrier resealable pouch.'],
        suggestedUse: ['Perfect midday power snack or topping for smoothie bowls and acai bowls.'],
        otherIngredients: [
          'Cashews, peanuts, banana chips, dried raspberries, gluten-free oats, tapioca syrup, cane sugar, brown sugar, sea salt, natural vanilla extract.',
        ],
        warnings: ['Contains Cashews, Peanuts. May contain occasional nut shell pieces.'],
      },
      additionalInfo: [{ label: 'Net Weight', value: '8.0 oz (226g)' }],
      vendor: DEFAULT_VENDOR,
      reviews: DEFAULT_REVIEWS,
    },
  },

  'veggie-pops-supersnacks': {
    id: 'veggie-pops-supersnacks',
    title: 'Made In Nature Veggie Pops Broccoli Chedda Supersnacks',
    badge: '-12%',
    rating: 5.0,
    reviewsCount: 35,
    price: 138.85,
    oldPrice: 145.8,
    discountPercentage: '12% Off',
    description:
      'Real organic whole vegetables popped into craveable savory bite-sized clusters. Seasoned with nutritional yeast, spices, and sea salt for authentic cheesy cheddar flavor without any dairy.',
    sizes: ['85g (3 oz)', '170g (6 oz)'],
    defaultSize: '85g (3 oz)',
    sizePrices: {
      '85g (3 oz)': { price: 138.85, oldPrice: 145.80 },
      '170g (6 oz)': { price: 250.00, oldPrice: 275.00 },
    },
    images: [
      'src/assets/body/popularproducts/product-10.png',
      'src/assets/body/popularproducts/product-10.png',
      'src/assets/body/popularproducts/product-10.png',
      'src/assets/body/popularproducts/product-10.png',
    ],
    specs: {
      type: 'Organic Supersnacks',
      mfg: 'Jul 30.2022',
      life: '180 days',
      sku: 'MIN-VEG-44',
      tags: 'Broccoli, Veggie, Organic, Gluten-Free',
      stock: '25 Bags In Stock',
    },
    tabs: {
      description: {
        paragraphs: [
          'Crunchy, cheesy, and packed with whole plant nutrition. Made from organic broccoli, kale, carrots, pumpkin seeds, and chickpeas.',
        ],
        keySpecs: [
          { label: 'Vegetables', value: 'Broccoli, Kale, Carrots' },
          { label: 'Protein', value: '8g Plant Protein per serving' },
        ],
        bodyAfterSpecs: ['USDA Organic, Non-GMO, and 100% Plant-Based.'],
        packaging: ['Resealable stay-crisp stand-up pouch.'],
        suggestedUse: ['Enjoy right out of the pouch or crumble over tomato soups and fresh salads.'],
        otherIngredients: [
          'Organic broccoli, organic kale, organic pumpkin seeds, organic chickpeas, nutritional yeast, organic carrots, sea salt, organic garlic powder, organic turmeric.',
        ],
        warnings: ['Made on machinery that processes tree nuts and soy.'],
      },
      additionalInfo: [{ label: 'Net Weight', value: '3 oz (85g)' }],
      vendor: DEFAULT_VENDOR,
      reviews: DEFAULT_REVIEWS,
    },
  },

  'sahale-bean-nut': {
    id: 'sahale-bean-nut',
    title: 'Sahale Snacks Asian Sesame Edamame Bean + Nut Mix',
    badge: 'New',
    rating: 5.0,
    reviewsCount: 42,
    price: 738.85,
    oldPrice: 1245.8,
    discountPercentage: '40% Off',
    description:
      'Crunchy dry-roasted green edamame and savory peanuts tossed with toasted black and white sesame seeds, puffed brown rice, and a tamari chili glaze for rich Asian-inspired umami flavor.',
    sizes: ['113g (4 oz)', '226g (8 oz)', '1kg Bulk'],
    defaultSize: '113g (4 oz)',
    sizePrices: {
      '113g (4 oz)': { price: 738.85, oldPrice: 1245.80 },
      '226g (8 oz)': { price: 1380.00, oldPrice: 2200.00 },
      '1kg Bulk': { price: 4900.00, oldPrice: 7500.00 },
    },
    images: [
      'src/assets/body/popularproducts/product-1.png',
      'src/assets/body/popularproducts/product-1.png',
      'src/assets/body/popularproducts/product-1.png',
      'src/assets/body/popularproducts/product-1.png',
    ],
    specs: {
      type: 'Protein Snack Mix',
      mfg: 'Aug 14.2022',
      life: '210 days',
      sku: 'SAH-SES-99',
      tags: 'Edamame, Sesame, Bean, High-Protein',
      stock: '30 Bags In Stock',
    },
    tabs: {
      description: {
        paragraphs: [
          'High in plant fiber and clean protein. A crunchy savory mix that satisfies hunger on the go with zero artificial flavors.',
        ],
        keySpecs: [
          { label: 'Beans & Nuts', value: 'Edamame, Peanuts, Cashews' },
          { label: 'Glaze', value: 'Tamari Soy Sauce & Sesame' },
        ],
        bodyAfterSpecs: ['Certified Gluten-Free and Non-GMO.'],
        packaging: ['Heavy-duty foil sealed bag.'],
        suggestedUse: ['Great on its own or tossed into Asian noodle salads.'],
        otherIngredients: [
          'Edamame, peanuts, cashews, puffed brown rice, tamari soy sauce, cane sugar, sesame seeds, sea salt, ginger, red pepper.',
        ],
        warnings: ['Contains Soy, Peanuts, Cashews.'],
      },
      additionalInfo: [{ label: 'Net Weight', value: '4 oz (113g)' }],
      vendor: DEFAULT_VENDOR,
      reviews: DEFAULT_REVIEWS,
    },
  },

  'coconut-flakes': {
    id: 'coconut-flakes',
    title: 'Let\'s Do Organic Unsweetened Shredded Coconut Flakes',
    badge: 'Hot',
    rating: 4.8,
    reviewsCount: 38,
    price: 89.8,
    oldPrice: 98.8,
    discountPercentage: '9% Off',
    description:
      'Pure, 100% certified organic coconuts freshly grated and gently dehydrated without sulfites, added sugars, or artificial bleaches. Rich in natural medium-chain fatty acids.',
    sizes: ['200g (7 oz)', '500g', '1kg'],
    defaultSize: '200g (7 oz)',
    sizePrices: {
      '200g (7 oz)': { price: 89.80, oldPrice: 98.80 },
      '500g': { price: 198.00, oldPrice: 220.00 },
      '1kg': { price: 360.00, oldPrice: 410.00 },
    },
    images: [
      'src/assets/body/popularproducts/product-5.png',
      'src/assets/body/popularproducts/product-5.png',
      'src/assets/body/popularproducts/product-5.png',
      'src/assets/body/popularproducts/product-5.png',
    ],
    specs: {
      type: 'Organic Pantry & Baking',
      mfg: 'Jun 19.2022',
      life: '365 days',
      sku: 'LDO-COC-07',
      tags: 'Coconut, Organic, Baking, Vegan',
      stock: '32 Bags In Stock',
    },
    tabs: {
      description: {
        paragraphs: [
          'A rich tropical staple for baking muffins, macroons, cakes, rolling energy balls, or toasting lightly to sprinkle over smoothies, curries, and bowls.',
        ],
        keySpecs: [
          { label: 'Origin', value: 'Sri Lanka / Philippines Organic Groves' },
          { label: 'Purity', value: '100% Unsweetened Organic Coconut' },
        ],
        bodyAfterSpecs: ['Keto friendly, paleo certified, and 100% vegan.'],
        packaging: ['Recyclable freshness bag.'],
        suggestedUse: ['Store tightly sealed in refrigerator after opening.'],
        otherIngredients: ['100% Organic Coconut Meat.'],
        warnings: ['Contains Tree Nut (Coconut).'],
      },
      additionalInfo: [{ label: 'Net Weight', value: '7 oz (200g)' }],
      vendor: DEFAULT_VENDOR,
      reviews: DEFAULT_REVIEWS,
    },
  },

  'naturally-flavored-cinnamon-vanilla': {
    id: 'naturally-flavored-cinnamon-vanilla',
    title: 'Naturally Flavored Cinnamon Vanilla Organic Oatmeal',
    badge: 'Deal of Day',
    rating: 4.9,
    reviewsCount: 41,
    price: 51.0,
    oldPrice: 55.0,
    discountPercentage: '7% Off',
    description:
      'Whole grain rolled oats gently spiced with sweet Ceylon cinnamon and aromatic Madagascar vanilla beans. A nourishing, fiber-rich morning breakfast bowl.',
    sizes: ['350g', '700g', '1.2kg'],
    defaultSize: '700g',
    images: [
      'src/assets/deals/NaturallyFlavored.png',
      'src/assets/deals/NaturallyFlavored.png',
      'src/assets/deals/NaturallyFlavored.png',
      'src/assets/deals/NaturallyFlavored.png',
    ],
    specs: {
      type: 'Breakfast & Cereals',
      mfg: 'Sep 12.2022',
      life: '300 days',
      sku: 'CIN-VAN-02',
      tags: 'Oatmeal, Cinnamon, Vanilla, Organic',
      stock: '28 Items In Stock',
    },
    tabs: {
      description: {
        paragraphs: [
          'Start your day with heart-healthy whole grains. Crafted without artificial flavors, synthetic sweeteners, or processed sugars.',
        ],
        keySpecs: [
          { label: 'Grain', value: '100% Organic Rolled Oats' },
          { label: 'Spices', value: 'Ceylon Cinnamon & Pure Vanilla' },
        ],
        bodyAfterSpecs: ['Ready in just 3 minutes with hot water or milk.'],
        packaging: ['Recyclable canister.'],
        suggestedUse: ['Mix 1/2 cup with 1 cup hot water or milk, let steep 3 minutes.'],
        otherIngredients: ['Organic Whole Grain Rolled Oats, Organic Cane Sugar, Sea Salt, Natural Flavors.'],
        warnings: ['Certified gluten-free.'],
      },
      additionalInfo: [{ label: 'Net Weight', value: '24 oz (680g)' }],
      vendor: DEFAULT_VENDOR,
      reviews: DEFAULT_REVIEWS,
    },
  },

  'seeds-of-change-organic-watermelon': {
    id: 'seeds-of-change-organic-watermelon',
    title: 'Seeds of Change Organic Watermelon Sparkling Cooler',
    badge: 'Deal of Day',
    rating: 5.0,
    reviewsCount: 55,
    price: 61.0,
    oldPrice: 66.0,
    discountPercentage: '8% Off',
    description:
      'Crisp, thirst-quenching organic watermelon juice infused with sparkling spring water and fresh mint hints. 100% organic and revitalizing.',
    sizes: ['4-Pack Bottles', '8-Pack Bottles', '12-Pack Bottles'],
    defaultSize: '8-Pack Bottles',
    images: [
      'src/assets/deals/Seeds.png',
      'src/assets/deals/Seeds.png',
      'src/assets/deals/Seeds.png',
      'src/assets/deals/Seeds.png',
    ],
    specs: {
      type: 'Cold Pressed Beverages',
      mfg: 'Aug 29.2022',
      life: '90 days',
      sku: 'SOC-WMLN-09',
      tags: 'Watermelon, Organic, Juice, Refreshing',
      stock: '40 Packs In Stock',
    },
    tabs: {
      description: {
        paragraphs: [
          'Cold-pressed from heirloom organic watermelons for unparalleled sweetness and hydration.',
        ],
        keySpecs: [
          { label: 'Fruit', value: '100% Organic Watermelon Juice' },
          { label: 'Sugar', value: 'No Added Sugars' },
        ],
        bodyAfterSpecs: ['Serve ice cold.'],
        packaging: ['Glass bottles in recyclable carrier.'],
        suggestedUse: ['Shake gently before drinking.'],
        otherIngredients: ['Organic Watermelon Juice, Filtered Sparkling Water, Organic Mint Extract.'],
        warnings: ['Keep refrigerated.'],
      },
      additionalInfo: [{ label: 'Serving Size', value: '12 fl oz (355ml)' }],
      vendor: DEFAULT_VENDOR,
      reviews: DEFAULT_REVIEWS,
    },
  },

  'dried-fruit-apricots-figs-prunes': {
    id: 'dried-fruit-apricots-figs-prunes',
    title: 'Gourmet Sun-Dried Fruit Medley: Apricots, Figs, Prunes',
    badge: 'Deal of Day',
    rating: 4.8,
    reviewsCount: 34,
    price: 56.0,
    oldPrice: 76.0,
    discountPercentage: '26% Off',
    description:
      'Hand-harvested Mediterranean sun-ripened apricots, sweet Turkish figs, and tender pitted California prunes. Rich in dietary fiber, potassium, and antioxidants.',
    sizes: ['250g', '500g', '1kg Gourmet Tub'],
    defaultSize: '500g',
    images: [
      'src/assets/deals/DriedFruit.png',
      'src/assets/deals/DriedFruit.png',
      'src/assets/deals/DriedFruit.png',
      'src/assets/deals/DriedFruit.png',
    ],
    specs: {
      type: 'Dried Fruits & Snacks',
      mfg: 'Jul 10.2022',
      life: '365 days',
      sku: 'DF-MEDLEY-88',
      tags: 'Apricots, Figs, Prunes, Dried Fruit',
      stock: '30 Tubs In Stock',
    },
    tabs: {
      description: {
        paragraphs: [
          'Naturally sweet and rich in essential minerals. An exceptional healthy snack or addition to charcuterie boards and baking.',
        ],
        keySpecs: [
          { label: 'Fruits', value: 'Turkish Figs, California Apricots, French Prunes' },
          { label: 'Additives', value: 'No Added Sugar, Unsulfured' },
        ],
        bodyAfterSpecs: ['Store in a cool dry pantry.'],
        packaging: ['Resealable tub.'],
        suggestedUse: ['Eat straight from tub, or pair with artisanal cheeses and walnuts.'],
        otherIngredients: ['Dried Apricots, Dried Figs, Pitted Prunes.'],
        warnings: ['May contain occasional pit fragment.'],
      },
      additionalInfo: [{ label: 'Net Weight', value: '16 oz (454g)' }],
      vendor: DEFAULT_VENDOR,
      reviews: DEFAULT_REVIEWS,
    },
  },
};

PRODUCTS_DATABASE['seeds-of-change-organic-rice'] = PRODUCTS_DATABASE['seeds-of-change-organic-quinoa-brown'];
PRODUCTS_DATABASE['seeds-of-change-red-rice'] = PRODUCTS_DATABASE['seeds-of-change-organic-quinoa-brown'];
PRODUCTS_DATABASE['seeds-of-change-organic-quinoa'] = PRODUCTS_DATABASE['seeds-of-change-organic-quinoa-brown'];
PRODUCTS_DATABASE['angies-kettle-corn'] = PRODUCTS_DATABASE['angles-sweet-salty-kettle-corn'];
PRODUCTS_DATABASE['angies-boomchickapop-sweet-salty'] = PRODUCTS_DATABASE['angles-sweet-salty-kettle-corn'];
PRODUCTS_DATABASE['all-natural-italian-style-meatballs'] = PRODUCTS_DATABASE['all-natural-style-chicken'];
PRODUCTS_DATABASE['foster-farms-takeout-crispy-classic'] = PRODUCTS_DATABASE['foster-farms-crispy'];
PRODUCTS_DATABASE['blue-diamond-almonds-lightly'] = PRODUCTS_DATABASE['blue-almonds-lightly-salted'];
PRODUCTS_DATABASE['blue-almonds-vegetables-1'] = PRODUCTS_DATABASE['blue-almonds-lightly-salted'];
PRODUCTS_DATABASE['blue-almonds-vegetables-2'] = PRODUCTS_DATABASE['blue-almonds-lightly-salted'];
PRODUCTS_DATABASE['blue-almonds-vegetables-3'] = PRODUCTS_DATABASE['blue-almonds-lightly-salted'];
PRODUCTS_DATABASE['blue-almonds-vegetables-4'] = PRODUCTS_DATABASE['blue-almonds-lightly-salted'];
PRODUCTS_DATABASE['blue-almonds-vegetables-5'] = PRODUCTS_DATABASE['blue-almonds-lightly-salted'];
PRODUCTS_DATABASE['blue-almonds-vegetables-6'] = PRODUCTS_DATABASE['blue-almonds-lightly-salted'];
PRODUCTS_DATABASE['gortons-beer-battered-fish-fillets'] = PRODUCTS_DATABASE['gortons-beer-battered-fish'];
PRODUCTS_DATABASE['haagen-dazs-caramel-cone-ice-cream'] = PRODUCTS_DATABASE['haagen-caramel-ice-cream'];
PRODUCTS_DATABASE['canada-dry-ginger-ale-2l'] = PRODUCTS_DATABASE['canada-dry-ginger-ale'];
PRODUCTS_DATABASE['naturally-flavored-cinnamon'] = PRODUCTS_DATABASE['naturally-flavored-cinnamon-vanilla'];
PRODUCTS_DATABASE['cinnamon-vanilla'] = PRODUCTS_DATABASE['naturally-flavored-cinnamon-vanilla'];
PRODUCTS_DATABASE['dried-fruit'] = PRODUCTS_DATABASE['dried-fruit-apricots-figs-prunes'];
PRODUCTS_DATABASE['seeds-watermelon'] = PRODUCTS_DATABASE['seeds-of-change-organic-watermelon'];

export function getProductById(idOrSlug?: string): ProductDetailsData {
  if (!idOrSlug) {
    return PRODUCTS_DATABASE['seeds-of-change-organic-quinoa-brown'];
  }

  const cleanId = decodeURIComponent(idOrSlug).toLowerCase().trim();

  if (PRODUCTS_DATABASE[cleanId]) {
    return PRODUCTS_DATABASE[cleanId];
  }

  const matchedKey = Object.keys(PRODUCTS_DATABASE).find(
    (key) => cleanId.includes(key) || key.includes(cleanId)
  );

  if (matchedKey) {
    return PRODUCTS_DATABASE[matchedKey];
  }

  let fallbackImage = 'src/assets/deals/Seeds.png';
  const knownImageMap: Record<string, string> = {
    'product-1': 'src/assets/body/popularproducts/product-1.png',
    'product-2': 'src/assets/body/popularproducts/product-2.png',
    'product-3': 'src/assets/body/popularproducts/product-3.png',
    'product-4': 'src/assets/body/popularproducts/product-4.png',
    'product-5': 'src/assets/body/popularproducts/product-5.png',
    'product-6': 'src/assets/body/popularproducts/product-6.png',
    'product-7': 'src/assets/body/popularproducts/product-7.png',
    'product-8': 'src/assets/body/popularproducts/product-8.png',
    'product-9': 'src/assets/body/popularproducts/product-9.png',
    'product-10': 'src/assets/body/popularproducts/product-10.png',
    'cage': 'src/assets/deals/OrganicCage.png',
    'egg': 'src/assets/deals/OrganicCage.png',
    'cinnamon': 'src/assets/deals/NaturallyFlavored.png',
    'dried': 'src/assets/deals/DriedFruit.png',
    'apricot': 'src/assets/deals/DriedFruit.png',
    'seeds': 'src/assets/deals/Seeds.png',
    'quinoa': 'src/assets/deals/Seeds.png',
    'watermelon': 'src/assets/deals/Seeds.png',
    'chicken': 'src/assets/body/popularproducts/product-1.png',
    'crispy': 'src/assets/body/popularproducts/product-1.png',
    'meatball': 'src/assets/body/popularproducts/product-2.png',
    'ice': 'src/assets/body/popularproducts/product-3.png',
    'cream': 'src/assets/body/popularproducts/product-3.png',
    'almond': 'src/assets/body/popularproducts/product-5.png',
    'fish': 'src/assets/body/popularproducts/product-6.png',
    'ginger': 'src/assets/body/popularproducts/product-7.png',
    'ale': 'src/assets/body/popularproducts/product-7.png',
    'salmon': 'src/assets/body/popularproducts/product-8.png',
    'seafood': 'src/assets/body/popularproducts/product-8.png',
    'kettle': 'src/assets/body/popularproducts/product-10.png',
    'popcorn': 'src/assets/body/popularproducts/product-10.png',
  };

  for (const [kw, img] of Object.entries(knownImageMap)) {
    if (cleanId.includes(kw)) {
      fallbackImage = img;
      break;
    }
  }

  const formattedTitle = cleanId
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    id: cleanId,
    title: formattedTitle || 'Organic Premium Grocery Item',
    badge: 'Featured',
    rating: 4.8,
    reviewsCount: 24,
    price: 28.5,
    oldPrice: 34.0,
    discountPercentage: '16% Off',
    description: `Discover the exquisite freshness and supreme quality of ${formattedTitle}. Hand-selected and carefully packed to bring the best organic ingredients right to your dining table.`,
    sizes: ['Small (250g)', 'Medium (500g)', 'Large (1kg)'],
    defaultSize: 'Medium (500g)',
    sizePrices: {
      'Small (250g)': { price: 16.50, oldPrice: 20.00 },
      'Medium (500g)': { price: 28.50, oldPrice: 34.00 },
      'Large (1kg)': { price: 49.90, oldPrice: 59.00 },
    },
    images: [
      fallbackImage,
      fallbackImage,
      fallbackImage,
      fallbackImage,
    ],
    specs: {
      type: 'Organic Grocery',
      mfg: 'Recent Batch',
      life: '90 days',
      sku: `SKU-${cleanId.slice(0, 6).toUpperCase()}`,
      tags: 'Fresh, Organic, Grocery, Healthy',
      stock: '20 Items In Stock',
    },
    tabs: {
      description: {
        paragraphs: [
          `Experience supreme organic taste with our premium ${formattedTitle}. Sourced with high standards to ensure every serving is wholesome and full of nutrition.`,
          'Our commitment to quality means no artificial preservatives, zero harmful additives, and complete transparency from farm to table.',
        ],
        keySpecs: [
          { label: 'Quality', value: '100% Certified Organic' },
          { label: 'Processing', value: 'Minimally Processed' },
        ],
        bodyAfterSpecs: [
          'Versatile and easy to integrate into your favorite weekly recipes and daily healthy diets.',
        ],
        packaging: ['Eco-friendly recyclable food-grade packaging.'],
        suggestedUse: ['Keep in a cool, dry place. Best enjoyed fresh.'],
        otherIngredients: ['100% Natural Organic Ingredients.'],
        warnings: ['Check ingredients for personal allergen sensitivities.'],
      },
      additionalInfo: [
        { label: 'Origin', value: 'Certified Organic Farms' },
        { label: 'Shelf Life', value: '90 days' },
      ],
      vendor: DEFAULT_VENDOR,
      reviews: DEFAULT_REVIEWS,
    },
  };
}

export const RELATED_PRODUCTS_MOCK = [
  {
    id: 'sahale-raspberry-crumble',
    imageSrc: 'src/assets/body/popularproducts/product-4.png',
    statusBadge: 'Hot',
    statusBadgeType: 'hot' as const,
    category: 'Snack',
    title: 'Ulviro Bass Headphone',
    rating: 4,
    reviewsCount: 4,
    vendor: 'NestFood',
    price: '$238.85',
    oldPrice: '$245.8',
  },
  {
    id: 'veggie-pops-supersnacks',
    imageSrc: 'src/assets/body/popularproducts/product-10.png',
    discountBadge: '-12%',
    discountBgColor: '#67bcee',
    category: 'Snack',
    title: 'Smart Bluetooth Speaker',
    rating: 5,
    reviewsCount: 5,
    vendor: 'NestFood',
    price: '$138.85',
    oldPrice: '$145.8',
  },
  {
    id: 'sahale-bean-nut',
    imageSrc: 'src/assets/body/popularproducts/product-1.png',
    statusBadge: 'New',
    statusBadgeType: 'new' as const,
    category: 'Snack',
    title: 'HomeSpeak T2UEA Goode',
    rating: 5,
    reviewsCount: 5,
    vendor: 'NestFood',
    price: '$738.85',
    oldPrice: '$1245.8',
  },
  {
    id: 'coconut-flakes',
    imageSrc: 'src/assets/body/popularproducts/product-5.png',
    statusBadge: 'Hot',
    statusBadgeType: 'hot' as const,
    category: 'Snack',
    title: 'Dodus Camera 4K 2022EF',
    rating: 4,
    reviewsCount: 4,
    vendor: 'NestFood',
    price: '$89.8',
    oldPrice: '$98.8',
  },
];
