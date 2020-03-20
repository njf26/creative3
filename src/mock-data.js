let mock = [{
    id: 1,
    name: "McDonalds",
    rating: 5,
    price: "low",
    tags: ["American","Fast Food","Burger"]
  },
  {
      id: 2,
      name: "Brick Oven",
      rating: 3,
      price: "medium",
      tags: ["Pizza","Sit down"]
  },
  {
      id: 3,
      name: "Panda Express",
      rating: 3,
      price: "low",
      tags: ["Chinese","Fast Food"]
  },
  {
      id: 4,
      name: "Noodles and Company",
      rating: 2,
      price: "medium",
      tags: ["Noodles","Fast Food","Pasta"]
  },
  {
      id: 5,
      name: "Pei Wei Asian Diner",
      rating: 2,
      price: "medium",
      tags: ["Asian","Sit down"]
  },
  {
      id: 6,
      name: "Auntie Anne's",
      rating: 4,
      price: "low",
      tags: ["Bakery","Dessert","Snack","Fast Food"]
  },
  {
      id: 7,
      name: "Cinnabon",
      rating: 4,
      price: "low",
      tags: ["Bakery","Dessert","Snack","Fast Food"]
  },
  {
      id: 8,
      name: "Einstein Bros. Bagels",
      rating: 4,
      price: "medium",
      tags: ["Bakery","Breakfast","Snack","Fast Food"]
  },
  {
      id: 9,
      name: "Great American Cookies",
      rating: 4,
      price: "medium",
      tags: ["Bakery","Dessert","Snack"]
  },
  {
      id: 10,
      name: "Great Harvest Bread Company",
      rating: 3,
      price: "medium",
      tags: ["Bakery","Snack"]
  },
  {
      id: 11,
      name: "Insomnia Cookies",
      rating: 3,
      price: "medium",
      tags: ["Bakery","Snack","Dessert"]
  },
  {
      id: 12,
      name: "Krispy Kreme",
      rating: 4,
      price: "low",
      tags: ["Bakery","Snack","Dessert","Breakfast"]
  },
  {
      id: 13,
      name: "Shipley Do-Nuts",
      rating: 3,
      price: "low",
      tags: ["Bakery","Snack","Dessert","Breakfast"]
  },
  {
      id: 14,
      name: "Shane's Rib Shack",
      rating: 3,
      price: "medium",
      tags: ["Bbq","Grill","American"]
  },
  {
      id: 15,
      name: "Jamba Juice",
      rating: 4,
      price: "medium",
      tags: ["Beverage","Juice","Snack","Smoothie"]
  },
  {
      id: 16,
      name: "Orange Julius",
      rating: 3,
      price: "medium",
      tags: ["Beverage","Juice","Snack","Smoothie"]
  },
  {
      id: 17,
      name: "Tropical Smoothie Cafe",
      rating: 2,
      price: "low",
      tags: ["Beverage","Smoothie","Snack"]
  },
  {
      id: 18,
      name: "Boston Market",
      rating: 2,
      price: "low",
      tags: ["Chicken","American"]
  },
  {
      id: 19,
      name: "Chick-fil-A",
      rating: 5,
      price: "low",
      tags: ["Chicken","American","Fast Food"]
  },
  {
      id: 20,
      name: "Chicken Express",
      rating: 4,
      price: "low",
      tags: ["Chicken","American","Fast Food"]
  },
  {
      id: 21,
      name: "El Pollo Loco",
      rating: 4,
      price: "low",
      tags: ["Chicken","Mexican","Fast Food"]
  },
  {
      id: 22,
      name: "KFC",
      rating: 3,
      price: "low",
      tags: ["Chicken","American","Fast Food"]
  },
  {
      id: 23,
      name: "Louisiana Famous Fried Chicken",
      rating: 4,
      price: "low",
      tags: ["Chicken","American","Fast Food","Southern"]
  },
  {
      id: 24,
      name: "Popeyes",
      rating: 3,
      price: "low",
      tags: ["Chicken","American","Fast Food","Southern"]
  },
  {
      id: 25,
      name: "Wingstop",
      rating: 4,
      price: "low",
      tags: ["Chicken","American","Fast Food","Southern"]
  },
  {
      id: 26,
      name: "Baskin-Robbins",
      rating: 4,
      price: "low",
      tags: ["Icecream","Dessert"]
  },
  {
      id: 27,
      name: "Ben & Jerry's",
      rating: 5,
      price: "medium",
      tags: ["Icecream","Dessert"]
  },
  {
      id: 28,
      name: "Braum's",
      rating: 4,
      price: "medium",
      tags: ["Icecream","Dessert"]
  },
  {
      id: 29,
      name: "Cold Stone Creamery",
      rating: 4,
      price: "medium",
      tags: ["Icecream","Dessert"]
  },
  {
      id: 30,
      name: "Dairy Queen",
      rating: 3,
      price: "low",
      tags: ["Icecream","Dessert"]
  },
  {
      id: 31,
      name: "Dippin' Dots",
      rating: 5,
      price: "medium",
      tags: ["Icecream","Dessert"]
  },
  {
      id: 32,
      name: "Haagen-Dazs",
      rating: 4,
      price: "medium",
      tags: ["Icecream","Dessert"]
  },
  {
      id: 33,
      name: "Rita's Italian Ice",
      rating: 4,
      price: "medium",
      tags: ["Ice","Dessert"]
  },
  {
      id: 34,
      name: "Sweet Frog",
      rating: 4,
      price: "medium",
      tags: ["Frozen Yogurt","Dessert"]
  },
  {
      id: 35,
      name: "Yogen Fruz",
      rating: 5,
      price: "medium",
      tags: ["Frozen Yogurt","Dessert"]
  },
  {
      id: 36,
      name: "Menchie's Frozen Yogurt",
      rating: 3,
      price: "medium",
      tags: ["Frozen Yogurt","Dessert"]
  },
  {
      id: 37,
      name: "Yogurtland",
      rating: 4,
      price: "medium",
      tags: ["Frozen Yogurt","Dessert"]
  },
  {
      id: 38,
      name: "Burger King",
      rating: 2,
      price: "low",
      tags: ["American","Burger","Fast Food"]
  },
  {
      id: 39,
      name: "Carl's Jr. Hardee's",
      rating: 1,
      price: "low",
      tags: ["American","Burger","Fast Food"]
  },
  {
      id: 40,
      name: "Five Guys",
      rating: 5,
      price: "medium",
      tags: ["American","Burger"]
  },
  {
      id: 41,
      name: "Fatburger",
      rating: 3,
      price: "medium",
      tags: ["American","Burger"]
  },
  {
      id: 42,
      name: "In-N-Out Burger",
      rating: 4,
      price: "medium",
      tags: ["American","Burger","Fast Food"]
  },
  {
      id: 43,
      name: "Jack in the Box",
      rating: 2,
      price: "low",
      tags: ["American","Burger","Fast Food"]
  },
  {
      id: 44,
      name: "Shake Shack",
      rating: 3,
      price: "low",
      tags: ["American","Burger","Fast Food","Smoothie"]
  },
  {
      id: 45,
      name: "Smashburger",
      rating: 4,
      price: "low",
      tags: ["American","Burger","Fast Food"]
  },
  {
      id: 46,
      name: "Sonic Drive-In",
      rating: 2,
      price: "low",
      tags: ["American","Burger","Fast Food","Drive-in"]
  },
  {
      id: 47,
      name: "Steak 'n Shake",
      rating: 4,
      price: "low",
      tags: ["American","Burger","Fast Food","Smoothie"]
  },
  {
      id: 48,
      name: "Wendy's",
      rating: 3,
      price: "low",
      tags: ["American","Burger","Fast Food"]
  },
  {
      id: 49,
      name: "Whataburger",
      rating: 3,
      price: "low",
      tags: ["American","Burger","Fast Food"]
  },
  {
      id: 50,
      name: "White Castle",
      rating: 2,
      price: "low",
      tags: ["American","Burger","Fast Food"]
  },
  {
      id: 51,
      name: "Zip's Drive-in",
      rating: 3,
      price: "low",
      tags: ["American","Burger","Fast Food","Drive-in"]
  },
  {
      id: 52,
      name: "Baja Fresh",
      rating: 3,
      price: "low",
      tags: ["Mexican","Fast Food"]
  },
  {
      id: 53,
      name: "Cafe Rio",
      rating: 3,
      price: "medium",
      tags: ["Mexican"]
  },
  {
      id: 54,
      name: "Chipotle Mexican Grill",
      rating: 5,
      price: "medium",
      tags: ["Mexican","Fast Food"]
  },
  {
      id: 55,
      name: "Del Taco",
      rating: 2,
      price: "low",
      tags: ["Mexican","Fast Food"]
  },
  {
      id: 56,
      name: "Moe's Southwest Grill",
      rating: 3,
      price: "medium",
      tags: ["Mexican","Grill"]
  },
  {
      id: 57,
      name: "Taco Bell",
      rating: 1,
      price: "low",
      tags: ["Mexican","Fast Food"]
  },
  {
      id: 58,
      name: "Domino's",
      rating: 5,
      price: "medium",
      tags: ["Pizza","Delivery"]
  },
  {
      id: 59,
      name: "Blaze Pizza",
      rating: 4,
      price: "medium",
      tags: ["Pizza","Delivery"]
  },
  {
      id: 60,
      name: "Little Caesars",
      rating: 1,
      price: "low",
      tags: ["Pizza","Fast Food"]
  },
  {
      id: 61,
      name: "Papa John's Pizza",
      rating: 3,
      price: "medium",
      tags: ["Pizza","Delivery"]
  },
  {
      id: 62,
      name: "Papa Murphy's",
      rating: 3,
      price: "medium",
      tags: ["Pizza"]
  },
  {
      id: 63,
      name: "Pizza Hut",
      rating: 3,
      price: "low",
      tags: ["Pizza","Delivery"]
  },
  {
      id: 64,
      name: "Arby's",
      rating: 1,
      price: "low",
      tags: ["Sandwich","Grill","Fast Food"]
  },
  {
      id: 65,
      name: "Jersey Mike's Subs",
      rating: 3,
      price: "medium",
      tags: ["Sandwich"]
  },
  {
      id: 66,
      name: "Jimmy John's",
      rating: 3,
      price: "low",
      tags: ["Sandwich","Fast Food"]
  },
  {
      id: 67,
      name: "Panera Bread",
      rating: 5,
      price: "medium",
      tags: ["Sandwich","Bakery","Dessert","Snack"]
  },
  {
      id: 68,
      name: "Pita Pit",
      rating: 3,
      price: "medium",
      tags: ["Sandwich","Greek"]
  },
  {
      id: 69,
      name: "Quiznos",
      rating: 3,
      price: "medium",
      tags: ["Sandwich","Fast Food"]
  },
  {
      id: 70,
      name: "Schlotzsky's",
      rating: 1,
      price: "low",
      tags: ["Sandwich","Fast Food"]
  },
  {
      id: 71,
      name: "Subway",
      rating: 4,
      price: "low",
      tags: ["Sandwich","Fast Food"]
  },
  {
      id: 72,
      name: "Long John Silver's",
      rating: 3,
      price: "low",
      tags: ["Seafood","Fast Food"]
  },
  {
      id: 73,
      name: "Applebee's",
      rating: 1,
      price: "low",
      tags: ["Sit down","American"]
  },
  {
      id: 74,
      name: "BJ's Restaurant",
      rating: 3,
      price: "low",
      tags: ["Sit down","American"]
  },
  {
      id: 75,
      name: "The Cheesecake Factory",
      rating: 4,
      price: "medium",
      tags: ["Sit down","American","Dessert"]
  },
  {
      id: 76,
      name: "Hard Rock Cafe",
      rating: 3,
      price: "medium",
      tags: ["Sit down","American"]
  },
  {
      id: 77,
      name: "Hooters",
      rating: 3,
      price: "low",
      tags: ["Sit down","American"]
  },
  {
      id: 78,
      name: "HomeTown Buffet",
      rating: 1,
      price: "low",
      tags: ["Sit down","American","Buffet"]
  },
  {
      id: 79,
      name: "Rainforest Cafe",
      rating: 3,
      price: "low",
      tags: ["Sit down","American"]
  },
  {
      id: 80,
      name: "P.F. Chang's China Bistro",
      rating: 3,
      price: "medium",
      tags: ["Sit down","Chinese"]
  },
  {
      id: 81,
      name: "Denny's",
      rating: 2,
      price: "low",
      tags: ["Sit down","American","Breakfast"]
  },
  {
      id: 82,
      name: "IHOP",
      rating: 3,
      price: "low",
      tags: ["Sit down","American","Breakfast"]
  },
  {
      id: 83,
      name: "Waffle House",
      rating: 4,
      price: "low",
      tags: ["Sit down","American","Breakfast"]
  },
  {
      id: 84,
      name: "Buffalo Wild Wings",
      rating: 3,
      price: "low",
      tags: ["American","Grill","Chicken"]
  },
  {
      id: 85,
      name: "The Melting Pot",
      rating: 4,
      price: "medium",
      tags: ["European"]
  },
  {
      id: 86,
      name: "Chevys Fresh Mex",
      rating: 2,
      price: "low",
      tags: ["American","Mexican"]
  },
  {
      id: 87,
      name: "Chili's",
      rating: 3,
      price: "low",
      tags: ["American","Mexican"]
  },
  {
      id: 88,
      name: "California Pizza Kitchen",
      rating: 4,
      price: "medium",
      tags: ["Pizza"]
  },
  {
      id: 89,
      name: "Olive Garden",
      rating: 3,
      price: "medium",
      tags: ["Italian"]
  },
  {
      id: 90,
      name: "Carrabba's Italian Grill",
      rating: 4,
      price: "medium",
      tags: ["Italian"]
  },
  {
      id: 91,
      name: "Red Lobster",
      rating: 3,
      price: "medium",
      tags: ["Seafood","Fast Food","American"]
  },
  {
      id: 92,
      name: "Bubba Gump Shrimp Company",
      rating: 4,
      price: "medium",
      tags: ["Seafood","American"]
  },
  {
      id: 93,
      name: "Joe's Crab Shack",
      rating: 3,
      price: "medium",
      tags: ["Seafood","American"]
  },
  {
      id: 94,
      name: "Cracker Barrel",
      rating: 3,
      price: "low",
      tags: ["Southern","Grill","American","Sit down"]
  },
  {
      id: 95,
      name: "Outback Steakhouse",
      rating: 3,
      price: "medium",
      tags: ["Grill","American","Sit down"]
  }
]

export default mock;
