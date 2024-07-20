interface MenuItem {
  name?: string;
  id: string;
  type?: string;
  primaryProductId?: string | null;
  collectionMemberIds: string[];
  gtin?: string | null;
  categories: string[];
  title: string;
  brands: string[];
  description?: string | null;
  languageCode?: string;
  attributes: Array<{
    key?: string;
    value?: {
      text: string[];
      numbers: number[];
    };
  }>;
  tags: string[];
  priceInfo?: {
    currencyCode?: string | null;
    price?: number | null;
    originalPrice?: number | null;
    cost?: number | null;
    priceEffectiveTime?: string | null;
    priceExpireTime?: string | null;
  } | null;
  rating?: {
    ratingCount?: number | null;
    averageRating?: number | null;
    ratingHistogram: number[] | null;
  } | null;
  expireTime?: string | null;
  ttl?: {
    seconds?: number | null;
    nanos?: number | null;
  } | null;
  availableTime?: string | null;
  availability?: string | null;
  availableQuantity?: number | null;
  fulfillmentInfo: Array<{
    type?: string | null;
    placeIds: string[];
  }>;
  uri?: string | null;
  images: Array<{
    uri: string;
    height?: number | null;
    width?: number | null;
  }>;
  audience?: {
    genders: string[];
    ageGroups: string[];
  } | null;
  colorInfo?: {
    colorFamilies: string[];
    colors: string[];
  } | null;
  sizes: string[];
  materials: string[];
  patterns: string[];
  conditions: string[];
  retrievableFields?: string | null;
  publishTime?: string | null;
  promotions: Array<{
    promotionId?: string | null;
  }>;
}

export const catalog: MenuItem[] = [
  {
    name: "Butter Chicken",
    id: "dish001",
    type: "PRIMARY",
    primaryProductId: null,
    collectionMemberIds: [],
    gtin: "1234567890123",
    categories: ["Non-Veg", "North Indian"],
    title: "Butter Chicken",
    brands: ["TastyBites"],
    description:
      "A rich and creamy dish made with marinated chicken cooked in a buttery tomato sauce.",
    languageCode: "en",
    attributes: [
      {
        key: "spiceLevel",
        value: {
          text: ["Medium"],
          numbers: [],
        },
      },
      {
        key: "prepTime",
        value: {
          text: [],
          numbers: [30.0],
        },
      },
    ],
    tags: ["creamy", "popular", "chicken"],
    priceInfo: {
      currencyCode: "INR",
      price: 250.0,
      originalPrice: 280.0,
      cost: 150.0,
      priceEffectiveTime: "2023-07-01T00:00:00Z",
      priceExpireTime: "2023-12-31T23:59:59Z",
    },
    rating: {
      ratingCount: 1250,
      averageRating: 4.7,
      ratingHistogram: [10, 25, 75, 400, 740],
    },
    expireTime: null,
    ttl: null,
    availableTime: "2023-07-19T00:00:00Z",
    availability: "IN_STOCK",
    availableQuantity: 100,
    fulfillmentInfo: [
      {
        type: "DELIVERY",
        placeIds: ["restaurant_loc_001"],
      },
    ],
    uri: "https://example.com/menu/butter-chicken",
    images: [
      {
        uri: "https://example.com/images/butter-chicken.jpg",
        height: 600,
        width: 800,
      },
    ],
    audience: {
      genders: ["MALE", "FEMALE"],
      ageGroups: ["ADULT", "SENIOR"],
    },
    colorInfo: null,
    sizes: [],
    materials: [],
    patterns: [],
    conditions: ["FRESH"],
    retrievableFields: null,
    publishTime: "2023-07-01T00:00:00Z",
    promotions: [
      {
        promotionId: "SUMMER_SPECIAL",
      },
    ],
  },
  {
    name: "Paneer Tikka",
    id: "dish002",
    type: "PRIMARY",
    primaryProductId: null,
    collectionMemberIds: [],
    gtin: "2345678901234",
    categories: ["Veg", "North Indian"],
    title: "Paneer Tikka",
    brands: ["VegDelight"],
    description: "Spiced paneer chunks grilled to perfection.",
    languageCode: "en",
    attributes: [
      {
        key: "spiceLevel",
        value: {
          text: ["Medium"],
          numbers: [],
        },
      },
      {
        key: "prepTime",
        value: {
          text: [],
          numbers: [25.0],
        },
      },
    ],
    tags: ["grilled", "vegetarian", "appetizer"],
    priceInfo: {
      currencyCode: "INR",
      price: 200.0,
      originalPrice: 220.0,
      cost: 120.0,
      priceEffectiveTime: "2023-07-01T00:00:00Z",
      priceExpireTime: "2023-12-31T23:59:59Z",
    },
    rating: {
      ratingCount: 980,
      averageRating: 4.5,
      ratingHistogram: [15, 30, 95, 350, 490],
    },
    expireTime: null,
    ttl: null,
    availableTime: "2023-07-19T00:00:00Z",
    availability: "IN_STOCK",
    availableQuantity: 80,
    fulfillmentInfo: [
      {
        type: "DELIVERY",
        placeIds: ["restaurant_loc_002"],
      },
    ],
    uri: "https://example.com/menu/paneer-tikka",
    images: [
      {
        uri: "https://example.com/images/paneer-tikka.jpg",
        height: 600,
        width: 800,
      },
    ],
    audience: {
      genders: ["MALE", "FEMALE"],
      ageGroups: ["ADULT", "SENIOR", "TEEN"],
    },
    colorInfo: null,
    sizes: [],
    materials: [],
    patterns: [],
    conditions: ["FRESH"],
    retrievableFields: null,
    publishTime: "2023-07-01T00:00:00Z",
    promotions: [
      {
        promotionId: "VEG_SPECIAL",
      },
    ],
  },
  {
    name: "Masala Dosa",
    id: "dish003",
    type: "PRIMARY",
    primaryProductId: null,
    collectionMemberIds: [],
    gtin: "3456789012345",
    categories: ["Veg", "South Indian"],
    title: "Masala Dosa",
    brands: ["DosaHouse"],
    description: "Crispy dosa filled with spiced potato filling.",
    languageCode: "en",
    attributes: [
      {
        key: "spiceLevel",
        value: {
          text: ["Mild"],
          numbers: [],
        },
      },
      {
        key: "prepTime",
        value: {
          text: [],
          numbers: [20.0],
        },
      },
    ],
    tags: ["crispy", "breakfast", "popular"],
    priceInfo: {
      currencyCode: "INR",
      price: 120.0,
      originalPrice: 130.0,
      cost: 70.0,
      priceEffectiveTime: "2023-07-01T00:00:00Z",
      priceExpireTime: "2023-12-31T23:59:59Z",
    },
    rating: {
      ratingCount: 1500,
      averageRating: 4.8,
      ratingHistogram: [10, 20, 70, 400, 1000],
    },
    expireTime: null,
    ttl: null,
    availableTime: "2023-07-19T00:00:00Z",
    availability: "IN_STOCK",
    availableQuantity: 150,
    fulfillmentInfo: [
      {
        type: "DELIVERY",
        placeIds: ["restaurant_loc_003"],
      },
    ],
    uri: "https://example.com/menu/masala-dosa",
    images: [
      {
        uri: "https://example.com/images/masala-dosa.jpg",
        height: 600,
        width: 800,
      },
    ],
    audience: {
      genders: ["MALE", "FEMALE"],
      ageGroups: ["ADULT", "SENIOR", "TEEN", "KID"],
    },
    colorInfo: null,
    sizes: [],
    materials: [],
    patterns: [],
    conditions: ["FRESH"],
    retrievableFields: null,
    publishTime: "2023-07-01T00:00:00Z",
    promotions: [
      {
        promotionId: "BREAKFAST_DEAL",
      },
    ],
  },
  {
    name: "Chole Bhature",
    id: "dish004",
    type: "PRIMARY",
    primaryProductId: null,
    collectionMemberIds: [],
    gtin: "4567890123456",
    categories: ["Veg", "North Indian"],
    title: "Chole Bhature",
    brands: ["SpicyTreats"],
    description:
      "A spicy and tangy chickpea curry served with fluffy fried bread.",
    languageCode: "en",
    attributes: [
      {
        key: "spiceLevel",
        value: {
          text: ["High"],
          numbers: [],
        },
      },
      {
        key: "prepTime",
        value: {
          text: [],
          numbers: [40.0],
        },
      },
    ],
    tags: ["spicy", "popular", "vegetarian"],
    priceInfo: {
      currencyCode: "INR",
      price: 180.0,
      originalPrice: 200.0,
      cost: 100.0,
      priceEffectiveTime: "2023-07-01T00:00:00Z",
      priceExpireTime: "2023-12-31T23:59:59Z",
    },
    rating: {
      ratingCount: 1100,
      averageRating: 4.6,
      ratingHistogram: [20, 30, 100, 400, 550],
    },
    expireTime: null,
    ttl: null,
    availableTime: "2023-07-19T00:00:00Z",
    availability: "IN_STOCK",
    availableQuantity: 90,
    fulfillmentInfo: [
      {
        type: "DELIVERY",
        placeIds: ["restaurant_loc_004"],
      },
    ],
    uri: "https://example.com/menu/chole-bhature",
    images: [
      {
        uri: "https://example.com/images/chole-bhature.jpg",
        height: 600,
        width: 800,
      },
    ],
    audience: {
      genders: ["MALE", "FEMALE"],
      ageGroups: ["ADULT", "SENIOR", "TEEN"],
    },
    colorInfo: null,
    sizes: [],
    materials: [],
    patterns: [],
    conditions: ["FRESH"],
    retrievableFields: null,
    publishTime: "2023-07-01T00:00:00Z",
    promotions: [
      {
        promotionId: "SPICY_SPECIAL",
      },
    ],
  },
  {
    name: "Hyderabadi Biryani",
    id: "dish005",
    type: "PRIMARY",
    primaryProductId: null,
    collectionMemberIds: [],
    gtin: "5678901234567",
    categories: ["Non-Veg", "South Indian"],
    title: "Hyderabadi Biryani",
    brands: ["BiryaniHouse"],
    description: "Aromatic basmati rice cooked with marinated meat and spices.",
    languageCode: "en",
    attributes: [
      {
        key: "spiceLevel",
        value: {
          text: ["High"],
          numbers: [],
        },
      },
      {
        key: "prepTime",
        value: {
          text: [],
          numbers: [45.0],
        },
      },
    ],
    tags: ["aromatic", "spicy", "rice"],
    priceInfo: {
      currencyCode: "INR",
      price: 300.0,
      originalPrice: 350.0,
      cost: 200.0,
      priceEffectiveTime: "2023-07-01T00:00:00Z",
      priceExpireTime: "2023-12-31T23:59:59Z",
    },
    rating: {
      ratingCount: 2000,
      averageRating: 4.9,
      ratingHistogram: [10, 15, 50, 600, 1325],
    },
    expireTime: null,
    ttl: null,
    availableTime: "2023-07-19T00:00:00Z",
    availability: "IN_STOCK",
    availableQuantity: 120,
    fulfillmentInfo: [
      {
        type: "DELIVERY",
        placeIds: ["restaurant_loc_005"],
      },
    ],
    uri: "https://example.com/menu/hyderabadi-biryani",
    images: [
      {
        uri: "https://example.com/images/hyderabadi-biryani.jpg",
        height: 600,
        width: 800,
      },
    ],
    audience: {
      genders: ["MALE", "FEMALE"],
      ageGroups: ["ADULT", "SENIOR"],
    },
    colorInfo: null,
    sizes: [],
    materials: [],
    patterns: [],
    conditions: ["FRESH"],
    retrievableFields: null,
    publishTime: "2023-07-01T00:00:00Z",
    promotions: [
      {
        promotionId: "BIRYANI_BONANZA",
      },
    ],
  },
  {
    name: "Fish Curry",
    id: "dish006",
    type: "PRIMARY",
    primaryProductId: null,
    collectionMemberIds: [],
    gtin: "6789012345678",
    categories: ["Non-Veg", "Coastal"],
    title: "Fish Curry",
    brands: ["CoastalDelight"],
    description:
      "A traditional coastal dish made with fresh fish cooked in a tangy and spicy curry.",
    languageCode: "en",
    attributes: [
      {
        key: "spiceLevel",
        value: {
          text: ["Medium"],
          numbers: [],
        },
      },
      {
        key: "prepTime",
        value: {
          text: [],
          numbers: [35.0],
        },
      },
    ],
    tags: ["tangy", "spicy", "fish"],
    priceInfo: {
      currencyCode: "INR",
      price: 220.0,
      originalPrice: 250.0,
      cost: 140.0,
      priceEffectiveTime: "2023-07-01T00:00:00Z",
      priceExpireTime: "2023-12-31T23:59:59Z",
    },
    rating: {
      ratingCount: 850,
      averageRating: 4.4,
      ratingHistogram: [20, 25, 70, 300, 435],
    },
    expireTime: null,
    ttl: null,
    availableTime: "2023-07-19T00:00:00Z",
    availability: "IN_STOCK",
    availableQuantity: 70,
    fulfillmentInfo: [
      {
        type: "DELIVERY",
        placeIds: ["restaurant_loc_006"],
      },
    ],
    uri: "https://example.com/menu/fish-curry",
    images: [
      {
        uri: "https://example.com/images/fish-curry.jpg",
        height: 600,
        width: 800,
      },
    ],
    audience: {
      genders: ["MALE", "FEMALE"],
      ageGroups: ["ADULT", "SENIOR"],
    },
    colorInfo: null,
    sizes: [],
    materials: [],
    patterns: [],
    conditions: ["FRESH"],
    retrievableFields: null,
    publishTime: "2023-07-01T00:00:00Z",
    promotions: [
      {
        promotionId: "COASTAL_FIESTA",
      },
    ],
  },
  {
    name: "Palak Paneer",
    id: "dish007",
    type: "PRIMARY",
    primaryProductId: null,
    collectionMemberIds: [],
    gtin: "7890123456789",
    categories: ["Veg", "North Indian"],
    title: "Palak Paneer",
    brands: ["GreenLeaf"],
    description:
      "A healthy and delicious dish made with paneer cooked in a creamy spinach gravy.",
    languageCode: "en",
    attributes: [
      {
        key: "spiceLevel",
        value: {
          text: ["Mild"],
          numbers: [],
        },
      },
      {
        key: "prepTime",
        value: {
          text: [],
          numbers: [30.0],
        },
      },
    ],
    tags: ["healthy", "vegetarian", "green"],
    priceInfo: {
      currencyCode: "INR",
      price: 240.0,
      originalPrice: 260.0,
      cost: 150.0,
      priceEffectiveTime: "2023-07-01T00:00:00Z",
      priceExpireTime: "2023-12-31T23:59:59Z",
    },
    rating: {
      ratingCount: 950,
      averageRating: 4.7,
      ratingHistogram: [15, 20, 40, 300, 575],
    },
    expireTime: null,
    ttl: null,
    availableTime: "2023-07-19T00:00:00Z",
    availability: "IN_STOCK",
    availableQuantity: 80,
    fulfillmentInfo: [
      {
        type: "DELIVERY",
        placeIds: ["restaurant_loc_007"],
      },
    ],
    uri: "https://example.com/menu/palak-paneer",
    images: [
      {
        uri: "https://example.com/images/palak-paneer.jpg",
        height: 600,
        width: 800,
      },
    ],
    audience: {
      genders: ["MALE", "FEMALE"],
      ageGroups: ["ADULT", "SENIOR", "TEEN"],
    },
    colorInfo: null,
    sizes: [],
    materials: [],
    patterns: [],
    conditions: ["FRESH"],
    retrievableFields: null,
    publishTime: "2023-07-01T00:00:00Z",
    promotions: [
      {
        promotionId: "GREEN_SPECIAL",
      },
    ],
  },
  {
    name: "Chicken Tikka Masala",
    id: "dish008",
    type: "PRIMARY",
    primaryProductId: null,
    collectionMemberIds: [],
    gtin: "8901234567890",
    categories: ["Non-Veg", "North Indian"],
    title: "Chicken Tikka Masala",
    brands: ["SpiceGrill"],
    description:
      "A popular Indian dish made with grilled chicken pieces cooked in a creamy tomato-based sauce.",
    languageCode: "en",
    attributes: [
      {
        key: "spiceLevel",
        value: {
          text: ["Medium"],
          numbers: [],
        },
      },
      {
        key: "prepTime",
        value: {
          text: [],
          numbers: [40.0],
        },
      },
    ],
    tags: ["creamy", "grilled", "spicy"],
    priceInfo: {
      currencyCode: "INR",
      price: 280.0,
      originalPrice: 300.0,
      cost: 170.0,
      priceEffectiveTime: "2023-07-01T00:00:00Z",
      priceExpireTime: "2023-12-31T23:59:59Z",
    },
    rating: {
      ratingCount: 1300,
      averageRating: 4.8,
      ratingHistogram: [10, 20, 30, 300, 940],
    },
    expireTime: null,
    ttl: null,
    availableTime: "2023-07-19T00:00:00Z",
    availability: "IN_STOCK",
    availableQuantity: 100,
    fulfillmentInfo: [
      {
        type: "DELIVERY",
        placeIds: ["restaurant_loc_008"],
      },
    ],
    uri: "https://example.com/menu/chicken-tikka-masala",
    images: [
      {
        uri: "https://example.com/images/chicken-tikka-masala.jpg",
        height: 600,
        width: 800,
      },
    ],
    audience: {
      genders: ["MALE", "FEMALE"],
      ageGroups: ["ADULT", "SENIOR"],
    },
    colorInfo: null,
    sizes: [],
    materials: [],
    patterns: [],
    conditions: ["FRESH"],
    retrievableFields: null,
    publishTime: "2023-07-01T00:00:00Z",
    promotions: [
      {
        promotionId: "GRILL_FEST",
      },
    ],
  },
  {
    name: "Chicken Biryani",
    id: "dish009",
    type: "PRIMARY",
    primaryProductId: null,
    collectionMemberIds: [],
    gtin: "5678901234567",
    categories: ["Non-Veg", "North Indian", "Rice"],
    title: "Hyderabadi Chicken Biryani",
    brands: ["Royal Feast"],
    description:
      "Aromatic basmati rice cooked with tender chicken pieces and a blend of spices.",
    languageCode: "en",
    attributes: [
      {
        key: "spiceLevel",
        value: {
          text: ["Medium-Hot"],
          numbers: [],
        },
      },
      {
        key: "servingSize",
        value: {
          text: [],
          numbers: [350],
        },
      },
    ],
    tags: ["chicken", "rice", "aromatic", "lunch", "dinner"],
    priceInfo: {
      currencyCode: "INR",
      price: 299.99,
      originalPrice: 330.0,
      cost: 150.0,
      priceEffectiveTime: "2023-07-01T00:00:00Z",
      priceExpireTime: "2023-12-31T23:59:59Z",
    },
    rating: {
      ratingCount: 2000,
      averageRating: 4.9,
      ratingHistogram: [10, 20, 70, 400, 1500],
    },
    expireTime: null,
    ttl: null,
    availableTime: "2023-07-19T11:00:00Z",
    availability: "IN_STOCK",
    availableQuantity: 100,
    fulfillmentInfo: [
      {
        type: "DELIVERY",
        placeIds: [
          "restaurant_loc_001",
          "restaurant_loc_002",
          "restaurant_loc_003",
        ],
      },
      {
        type: "PICKUP",
        placeIds: ["restaurant_loc_001", "restaurant_loc_002"],
      },
    ],
    uri: "https://example.com/menu/chicken-biryani",
    images: [
      {
        uri: "https://example.com/images/chicken-biryani.jpg",
        height: 600,
        width: 800,
      },
    ],
    audience: {
      genders: ["MALE", "FEMALE"],
      ageGroups: ["TEEN", "ADULT", "SENIOR"],
    },
    colorInfo: null,
    sizes: ["REGULAR", "LARGE", "FAMILY"],
    materials: [],
    patterns: [],
    conditions: ["FRESH"],
    retrievableFields: null,
    publishTime: "2023-07-01T00:00:00Z",
    promotions: [
      {
        promotionId: "BIRYANI_SPECIAL_001",
      },
    ],
  },
  {
    name: "Vegetable Biryani",
    id: "dish010",
    type: "PRIMARY",
    primaryProductId: null,
    collectionMemberIds: [],
    gtin: "2345678901234",
    categories: ["Veg", "North Indian", "Rice"],
    title: "Aromatic Vegetable Biryani",
    brands: ["Spice Garden"],
    description:
      "Fragrant basmati rice cooked with mixed vegetables and aromatic spices.",
    languageCode: "en",
    attributes: [
      {
        key: "spiceLevel",
        value: {
          text: ["Medium"],
          numbers: [],
        },
      },
      {
        key: "servingSize",
        value: {
          text: [],
          numbers: [300],
        },
      },
    ],
    tags: ["vegetarian", "rice", "aromatic", "lunch"],
    priceInfo: {
      currencyCode: "INR",
      price: 249.99,
      originalPrice: 280.0,
      cost: 120.0,
      priceEffectiveTime: "2023-07-01T00:00:00Z",
      priceExpireTime: "2023-12-31T23:59:59Z",
    },
    rating: {
      ratingCount: 980,
      averageRating: 4.5,
      ratingHistogram: [15, 30, 95, 350, 490],
    },
    expireTime: null,
    ttl: null,
    availableTime: "2023-07-19T00:00:00Z",
    availability: "IN_STOCK",
    availableQuantity: 80,
    fulfillmentInfo: [
      {
        type: "DELIVERY",
        placeIds: ["restaurant_loc_001", "restaurant_loc_003"],
      },
      {
        type: "PICKUP",
        placeIds: ["restaurant_loc_001"],
      },
    ],
    uri: "https://example.com/menu/vegetable-biryani",
    images: [
      {
        uri: "https://example.com/images/vegetable-biryani.jpg",
        height: 600,
        width: 800,
      },
    ],
    audience: {
      genders: ["MALE", "FEMALE"],
      ageGroups: ["TEEN", "ADULT", "SENIOR"],
    },
    colorInfo: null,
    sizes: ["REGULAR", "FAMILY"],
    materials: [],
    patterns: [],
    conditions: ["FRESH"],
    retrievableFields: null,
    publishTime: "2023-07-01T00:00:00Z",
    promotions: [
      {
        promotionId: "VEG_SPECIAL_001",
      },
    ],
  },
  {
    name: "Veg Pulao",
    id: "dish011",
    type: "PRIMARY",
    primaryProductId: null,
    collectionMemberIds: [],
    gtin: "1234567890123",
    categories: ["Veg", "North Indian"],
    title: "Veg Pulao",
    brands: ["HealthyBites"],
    description:
      "A fragrant rice dish cooked with mixed vegetables and mild spices.",
    languageCode: "en",
    attributes: [
      {
        key: "spiceLevel",
        value: {
          text: ["Mild"],
          numbers: [],
        },
      },
      {
        key: "prepTime",
        value: {
          text: [],
          numbers: [25.0],
        },
      },
    ],
    tags: ["fragrant", "vegetarian", "rice"],
    priceInfo: {
      currencyCode: "INR",
      price: 180.0,
      originalPrice: 200.0,
      cost: 100.0,
      priceEffectiveTime: "2023-07-01T00:00:00Z",
      priceExpireTime: "2023-12-31T23:59:59Z",
    },
    rating: {
      ratingCount: 700,
      averageRating: 4.4,
      ratingHistogram: [15, 20, 35, 250, 380],
    },
    expireTime: null,
    ttl: null,
    availableTime: "2023-07-19T00:00:00Z",
    availability: "IN_STOCK",
    availableQuantity: 80,
    fulfillmentInfo: [
      {
        type: "DELIVERY",
        placeIds: ["restaurant_loc_011"],
      },
    ],
    uri: "https://example.com/menu/veg-pulao",
    images: [
      {
        uri: "https://example.com/images/veg-pulao.jpg",
        height: 600,
        width: 800,
      },
    ],
    audience: {
      genders: ["MALE", "FEMALE"],
      ageGroups: ["ADULT", "SENIOR", "TEEN"],
    },
    colorInfo: null,
    sizes: [],
    materials: [],
    patterns: [],
    conditions: ["FRESH"],
    retrievableFields: null,
    publishTime: "2023-07-01T00:00:00Z",
    promotions: [
      {
        promotionId: "HEALTHY_TREATS",
      },
    ],
  },
  {
    name: "Mutton Rogan Josh",
    id: "dish012",
    type: "PRIMARY",
    primaryProductId: null,
    collectionMemberIds: [],
    gtin: "2345678901234",
    categories: ["Non-Veg", "North Indian"],
    title: "Mutton Rogan Josh",
    brands: ["SpiceTrail"],
    description:
      "A flavorful mutton curry made with aromatic spices and a rich gravy.",
    languageCode: "en",
    attributes: [
      {
        key: "spiceLevel",
        value: {
          text: ["High"],
          numbers: [],
        },
      },
      {
        key: "prepTime",
        value: {
          text: [],
          numbers: [45.0],
        },
      },
    ],
    tags: ["flavorful", "spicy", "mutton"],
    priceInfo: {
      currencyCode: "INR",
      price: 350.0,
      originalPrice: 400.0,
      cost: 250.0,
      priceEffectiveTime: "2023-07-01T00:00:00Z",
      priceExpireTime: "2023-12-31T23:59:59Z",
    },
    rating: {
      ratingCount: 800,
      averageRating: 4.6,
      ratingHistogram: [20, 25, 50, 250, 455],
    },
    expireTime: null,
    ttl: null,
    availableTime: "2023-07-19T00:00:00Z",
    availability: "IN_STOCK",
    availableQuantity: 70,
    fulfillmentInfo: [
      {
        type: "DELIVERY",
        placeIds: ["restaurant_loc_012"],
      },
    ],
    uri: "https://example.com/menu/mutton-rogan-josh",
    images: [
      {
        uri: "https://example.com/images/mutton-rogan-josh.jpg",
        height: 600,
        width: 800,
      },
    ],
    audience: {
      genders: ["MALE", "FEMALE"],
      ageGroups: ["ADULT", "SENIOR"],
    },
    colorInfo: null,
    sizes: [],
    materials: [],
    patterns: [],
    conditions: ["FRESH"],
    retrievableFields: null,
    publishTime: "2023-07-01T00:00:00Z",
    promotions: [
      {
        promotionId: "SPICE_FEST",
      },
    ],
  },
  {
    name: "Gulab Jamun",
    id: "dish013",
    type: "PRIMARY",
    primaryProductId: null,
    collectionMemberIds: [],
    gtin: "3456789012345",
    categories: ["Dessert", "Indian Sweets"],
    title: "Gulab Jamun",
    brands: ["SweetTooth"],
    description:
      "Soft and spongy deep-fried balls made of khoya, soaked in sugar syrup.",
    languageCode: "en",
    attributes: [
      {
        key: "sweetnessLevel",
        value: {
          text: ["High"],
          numbers: [],
        },
      },
      {
        key: "prepTime",
        value: {
          text: [],
          numbers: [20.0],
        },
      },
    ],
    tags: ["sweet", "dessert", "traditional"],
    priceInfo: {
      currencyCode: "INR",
      price: 120.0,
      originalPrice: 150.0,
      cost: 80.0,
      priceEffectiveTime: "2023-07-01T00:00:00Z",
      priceExpireTime: "2023-12-31T23:59:59Z",
    },
    rating: {
      ratingCount: 600,
      averageRating: 4.9,
      ratingHistogram: [5, 10, 20, 100, 465],
    },
    expireTime: null,
    ttl: null,
    availableTime: "2023-07-19T00:00:00Z",
    availability: "IN_STOCK",
    availableQuantity: 150,
    fulfillmentInfo: [
      {
        type: "DELIVERY",
        placeIds: ["restaurant_loc_013"],
      },
    ],
    uri: "https://example.com/menu/gulab-jamun",
    images: [
      {
        uri: "https://example.com/images/gulab-jamun.jpg",
        height: 600,
        width: 800,
      },
    ],
    audience: {
      genders: ["MALE", "FEMALE"],
      ageGroups: ["ADULT", "SENIOR", "TEEN", "CHILD"],
    },
    colorInfo: null,
    sizes: [],
    materials: [],
    patterns: [],
    conditions: ["FRESH"],
    retrievableFields: null,
    publishTime: "2023-07-01T00:00:00Z",
    promotions: [
      {
        promotionId: "SWEET_TREATS",
      },
    ],
  },
  {
    name: "Dal Makhani",
    id: "dish014",
    type: "PRIMARY",
    primaryProductId: null,
    collectionMemberIds: [],
    gtin: "4567890123456",
    categories: ["Veg", "North Indian"],
    title: "Dal Makhani",
    brands: ["TandooriFlavors"],
    description:
      "A creamy and buttery lentil dish made with black lentils and kidney beans, slow-cooked to perfection.",
    languageCode: "en",
    attributes: [
      {
        key: "spiceLevel",
        value: {
          text: ["Mild"],
          numbers: [],
        },
      },
      {
        key: "prepTime",
        value: {
          text: [],
          numbers: [30.0],
        },
      },
    ],
    tags: ["creamy", "buttery", "vegetarian"],
    priceInfo: {
      currencyCode: "INR",
      price: 220.0,
      originalPrice: 240.0,
      cost: 130.0,
      priceEffectiveTime: "2023-07-01T00:00:00Z",
      priceExpireTime: "2023-12-31T23:59:59Z",
    },
    rating: {
      ratingCount: 900,
      averageRating: 4.7,
      ratingHistogram: [10, 15, 30, 300, 545],
    },
    expireTime: null,
    ttl: null,
    availableTime: "2023-07-19T00:00:00Z",
    availability: "IN_STOCK",
    availableQuantity: 85,
    fulfillmentInfo: [
      {
        type: "DELIVERY",
        placeIds: ["restaurant_loc_014"],
      },
    ],
    uri: "https://example.com/menu/dal-makhani",
    images: [
      {
        uri: "https://example.com/images/dal-makhani.jpg",
        height: 600,
        width: 800,
      },
    ],
    audience: {
      genders: ["MALE", "FEMALE"],
      ageGroups: ["ADULT", "SENIOR", "TEEN"],
    },
    colorInfo: null,
    sizes: [],
    materials: [],
    patterns: [],
    conditions: ["FRESH"],
    retrievableFields: null,
    publishTime: "2023-07-01T00:00:00Z",
    promotions: [
      {
        promotionId: "TANDOORI_DELIGHT",
      },
    ],
  },
  {
    "name": "Veg Kulcha",
    "id": "dish015",
    "type": "PRIMARY",
    "primaryProductId": null,
    "collectionMemberIds": [],
    "gtin": "5678901234567",
    "categories": ["Veg", "Punjabi"],
    "title": "Veg Kulcha",
    "brands": ["KulchaKing"],
    "description": "A soft and fluffy kulcha stuffed with a mix of seasoned vegetables.",
    "languageCode": "en",
    "attributes": [
      {
        "key": "spiceLevel",
        "value": {
          "text": ["Mild"],
          "numbers": []
        }
      },
      {
        "key": "prepTime",
        "value": {
          "text": [],
          "numbers": [15.0]
        }
      }
    ],
    "tags": ["soft", "fluffy", "vegetarian"],
    "priceInfo": {
      "currencyCode": "INR",
      "price": 80.0,
      "originalPrice": 100.0,
      "cost": 50.0,
      "priceEffectiveTime": "2023-07-01T00:00:00Z",
      "priceExpireTime": "2023-12-31T23:59:59Z"
    },
    "rating": {
      "ratingCount": 500,
      "averageRating": 4.5,
      "ratingHistogram": [10, 20, 50, 150, 270]
    },
    "expireTime": null,
    "ttl": null,
    "availableTime": "2023-07-19T00:00:00Z",
    "availability": "IN_STOCK",
    "availableQuantity": 120,
    "fulfillmentInfo": [
      {
        "type": "DELIVERY",
        "placeIds": ["restaurant_loc_015"]
      }
    ],
    "uri": "https://example.com/menu/veg-kulcha",
    "images": [
      {
        "uri": "https://example.com/images/veg-kulcha.jpg",
        "height": 600,
        "width": 800
      }
    ],
    "audience": {
      "genders": ["MALE", "FEMALE"],
      "ageGroups": ["ADULT", "SENIOR", "TEEN"]
    },
    "colorInfo": null,
    "sizes": [],
    "materials": [],
    "patterns": [],
    "conditions": ["FRESH"],
    "retrievableFields": null,
    "publishTime": "2023-07-01T00:00:00Z",
    "promotions": [
      {
        "promotionId": "KULCHA_FEAST"
      }
    ]
  },
  {
    "name": "Veg Mayo Kulcha",
    "id": "dish016",
    "type": "PRIMARY",
    "primaryProductId": null,
    "collectionMemberIds": [],
    "gtin": "6789012345678",
    "categories": ["Veg", "Punjabi"],
    "title": "Veg Mayo Kulcha",
    "brands": ["KulchaKing"],
    "description": "A delightful kulcha filled with a mix of vegetables and creamy mayonnaise.",
    "languageCode": "en",
    "attributes": [
      {
        "key": "spiceLevel",
        "value": {
          "text": ["Mild"],
          "numbers": []
        }
      },
      {
        "key": "prepTime",
        "value": {
          "text": [],
          "numbers": [15.0]
        }
      }
    ],
    "tags": ["creamy", "soft", "vegetarian"],
    "priceInfo": {
      "currencyCode": "INR",
      "price": 90.0,
      "originalPrice": 110.0,
      "cost": 55.0,
      "priceEffectiveTime": "2023-07-01T00:00:00Z",
      "priceExpireTime": "2023-12-31T23:59:59Z"
    },
    "rating": {
      "ratingCount": 450,
      "averageRating": 4.6,
      "ratingHistogram": [5, 10, 35, 150, 250]
    },
    "expireTime": null,
    "ttl": null,
    "availableTime": "2023-07-19T00:00:00Z",
    "availability": "IN_STOCK",
    "availableQuantity": 110,
    "fulfillmentInfo": [
      {
        "type": "DELIVERY",
        "placeIds": ["restaurant_loc_016"]
      }
    ],
    "uri": "https://example.com/menu/veg-mayo-kulcha",
    "images": [
      {
        "uri": "https://example.com/images/veg-mayo-kulcha.jpg",
        "height": 600,
        "width": 800
      }
    ],
    "audience": {
      "genders": ["MALE", "FEMALE"],
      "ageGroups": ["ADULT", "SENIOR", "TEEN"]
    },
    "colorInfo": null,
    "sizes": [],
    "materials": [],
    "patterns": [],
    "conditions": ["FRESH"],
    "retrievableFields": null,
    "publishTime": "2023-07-01T00:00:00Z",
    "promotions": [
      {
        "promotionId": "KULCHA_FEAST"
      }
    ]
  },
  {
    "name": "Masala Kulcha",
    "id": "dish017",
    "type": "PRIMARY",
    "primaryProductId": null,
    "collectionMemberIds": [],
    "gtin": "7890123456789",
    "categories": ["Veg", "Punjabi"],
    "title": "Masala Kulcha",
    "brands": ["KulchaKing"],
    "description": "A flavorful kulcha stuffed with a spicy mix of potatoes and spices.",
    "languageCode": "en",
    "attributes": [
      {
        "key": "spiceLevel",
        "value": {
          "text": ["Medium"],
          "numbers": []
        }
      },
      {
        "key": "prepTime",
        "value": {
          "text": [],
          "numbers": [20.0]
        }
      }
    ],
    "tags": ["flavorful", "spicy", "vegetarian"],
    "priceInfo": {
      "currencyCode": "INR",
      "price": 85.0,
      "originalPrice": 105.0,
      "cost": 50.0,
      "priceEffectiveTime": "2023-07-01T00:00:00Z",
      "priceExpireTime": "2023-12-31T23:59:59Z"
    },
    "rating": {
      "ratingCount": 550,
      "averageRating": 4.4,
      "ratingHistogram": [10, 15, 40, 180, 305]
    },
    "expireTime": null,
    "ttl": null,
    "availableTime": "2023-07-19T00:00:00Z",
    "availability": "IN_STOCK",
    "availableQuantity": 115,
    "fulfillmentInfo": [
      {
        "type": "DELIVERY",
        "placeIds": ["restaurant_loc_017"]
      }
    ],
    "uri": "https://example.com/menu/masala-kulcha",
    "images": [
      {
        "uri": "https://example.com/images/masala-kulcha.jpg",
        "height": 600,
        "width": 800
      }
    ],
    "audience": {
      "genders": ["MALE", "FEMALE"],
      "ageGroups": ["ADULT", "SENIOR", "TEEN"]
    },
    "colorInfo": null,
    "sizes": [],
    "materials": [],
    "patterns": [],
    "conditions": ["FRESH"],
    "retrievableFields": null,
    "publishTime": "2023-07-01T00:00:00Z",
    "promotions": [
      {
        "promotionId": "KULCHA_FEAST"
      }
    ]
  },
  {
    "name": "Paneer Kulcha",
    "id": "dish018",
    "type": "PRIMARY",
    "primaryProductId": null,
    "collectionMemberIds": [],
    "gtin": "8901234567890",
    "categories": ["Veg", "Punjabi"],
    "title": "Paneer Kulcha",
    "brands": ["KulchaKing"],
    "description": "A rich kulcha filled with spiced paneer and herbs.",
    "languageCode": "en",
    "attributes": [
      {
        "key": "spiceLevel",
        "value": {
          "text": ["Medium"],
          "numbers": []
        }
      },
      {
        "key": "prepTime",
        "value": {
          "text": [],
          "numbers": [20.0]
        }
      }
    ],
    "tags": ["rich", "spiced", "paneer"],
    "priceInfo": {
      "currencyCode": "INR",
      "price": 100.0,
      "originalPrice": 120.0,
      "cost": 60.0,
      "priceEffectiveTime": "2023-07-01T00:00:00Z",
      "priceExpireTime": "2023-12-31T23:59:59Z"
    },
    "rating": {
      "ratingCount": 600,
      "averageRating": 4.7,
      "ratingHistogram": [5, 10, 30, 200, 355]
    },
    "expireTime": null,
    "ttl": null,
    "availableTime": "2023-07-19T00:00:00Z",
    "availability": "IN_STOCK",
    "availableQuantity": 105,
    "fulfillmentInfo": [
      {
        "type": "DELIVERY",
        "placeIds": ["restaurant_loc_018"]
      }
    ],
    "uri": "https://example.com/menu/paneer-kulcha",
    "images": [
      {
        "uri": "https://example.com/images/paneer-kulcha.jpg",
        "height": 600,
        "width": 800
      }
    ],
    "audience": {
      "genders": ["MALE", "FEMALE"],
      "ageGroups": ["ADULT", "SENIOR", "TEEN"]
    },
    "colorInfo": null,
    "sizes": [],
    "materials": [],
    "patterns": [],
    "conditions": ["FRESH"],
    "retrievableFields": null,
    "publishTime": "2023-07-01T00:00:00Z",
    "promotions": [
      {
        "promotionId": "KULCHA_FEAST"
      }
    ]
  },
  {
    "name": "Makhni Kulcha",
    "id": "dish019",
    "type": "PRIMARY",
    "primaryProductId": null,
    "collectionMemberIds": [],
    "gtin": "9012345678901",
    "categories": ["Veg", "Punjabi"],
    "title": "Makhni Kulcha",
    "brands": ["KulchaKing"],
    "description": "A buttery kulcha filled with a rich and creamy spiced mixture.",
    "languageCode": "en",
    "attributes": [
      {
        "key": "spiceLevel",
        "value": {
          "text": ["Medium"],
          "numbers": []
        }
      },
      {
        "key": "prepTime",
        "value": {
          "text": [],
          "numbers": [20.0]
        }
      }
    ],
    "tags": ["buttery", "rich", "spiced"],
    "priceInfo": {
      "currencyCode": "INR",
      "price": 95.0,
      "originalPrice": 115.0,
      "cost": 55.0,
      "priceEffectiveTime": "2023-07-01T00:00:00Z",
      "priceExpireTime": "2023-12-31T23:59:59Z"
    },
    "rating": {
      "ratingCount": 650,
      "averageRating": 4.6,
      "ratingHistogram": [5, 15, 35, 150, 445]
    },
    "expireTime": null,
    "ttl": null,
    "availableTime": "2023-07-19T00:00:00Z",
    "availability": "IN_STOCK",
    "availableQuantity": 100,
    "fulfillmentInfo": [
      {
        "type": "DELIVERY",
        "placeIds": ["restaurant_loc_019"]
      }
    ],
    "uri": "https://example.com/menu/makhni-kulcha",
    "images": [
      {
        "uri": "https://example.com/images/makhni-kulcha.jpg",
        "height": 600,
        "width": 800
      }
    ],
    "audience": {
      "genders": ["MALE", "FEMALE"],
      "ageGroups": ["ADULT", "SENIOR", "TEEN"]
    },
    "colorInfo": null,
    "sizes": [],
    "materials": [],
    "patterns": [],
    "conditions": ["FRESH"],
    "retrievableFields": null,
    "publishTime": "2023-07-01T00:00:00Z",
    "promotions": [
      {
        "promotionId": "KULCHA_FEAST"
      }
    ]
  },
  {
    "name": "Pav Bhaji",
    "id": "dish020",
    "type": "PRIMARY",
    "primaryProductId": null,
    "collectionMemberIds": [],
    "gtin": "9123456789012",
    "categories": ["Veg", "Mumbai Street Food"],
    "title": "Pav Bhaji",
    "brands": ["StreetEats"],
    "description": "A spicy blend of vegetables mashed together and served with buttery pav bread.",
    "languageCode": "en",
    "attributes": [
      {
        "key": "spiceLevel",
        "value": {
          "text": ["High"],
          "numbers": []
        }
      },
      {
        "key": "prepTime",
        "value": {
          "text": [],
          "numbers": [25.0]
        }
      }
    ],
    "tags": ["spicy", "street food", "vegetarian"],
    "priceInfo": {
      "currencyCode": "INR",
      "price": 150.0,
      "originalPrice": 170.0,
      "cost": 90.0,
      "priceEffectiveTime": "2023-07-01T00:00:00Z",
      "priceExpireTime": "2023-12-31T23:59:59Z"
    },
    "rating": {
      "ratingCount": 850,
      "averageRating": 4.6,
      "ratingHistogram": [10, 15, 30, 250, 545]
    },
    "expireTime": null,
    "ttl": null,
    "availableTime": "2023-07-19T00:00:00Z",
    "availability": "IN_STOCK",
    "availableQuantity": 100,
    "fulfillmentInfo": [
      {
        "type": "DELIVERY",
        "placeIds": ["restaurant_loc_020"]
      }
    ],
    "uri": "https://example.com/menu/pav-bhaji",
    "images": [
      {
        "uri": "https://example.com/images/pav-bhaji.jpg",
        "height": 600,
        "width": 800
      }
    ],
    "audience": {
      "genders": ["MALE", "FEMALE"],
      "ageGroups": ["ADULT", "SENIOR", "TEEN"]
    },
    "colorInfo": null,
    "sizes": [],
    "materials": [],
    "patterns": [],
    "conditions": ["FRESH"],
    "retrievableFields": null,
    "publishTime": "2023-07-01T00:00:00Z",
    "promotions": [
      {
        "promotionId": "STREET_SPECIAL"
      }
    ]
  }
  

 
];


import * as fs from 'fs';

function saveJsonObjectToFile(filePath: string, jsonObject: any): void {
    try {
        // Convert the object to a JSON string
        const jsonString = JSON.stringify(jsonObject, null, 2); // The third argument adds indentation for readability

        // Write the JSON string to the file
        fs.writeFileSync(filePath, jsonString);

        console.log(`JSON object saved to ${filePath}`);
    } catch (error:any) {
        console.error(`Error saving JSON object: ${error.message}`);
    }
}

// Example usage

const filePath = './myData.json';
saveJsonObjectToFile(filePath, catalog);
