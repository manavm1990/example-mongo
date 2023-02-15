export default [
  // Using embedded documents instead of references
  {
    department: "floral",
    promotions: [
      {
        sale: "discount on red flowers",
        percentage_discount: 50,
      },
    ],
  },
  {
    department: "frozen",
    promotions: [
      {
        sale: "discount frozen treats",
        percentage_discount: 20,
      },
    ],
  },

  {
    department: "snacks",
    promotions: [
      {
        sale: "free granola bar",
        percentage_discount: 50,
      },
    ],
  },

  // Using denormalization and embedding to create a one-to-many relationship
  {
    department: "produce",
    promotions: [
      {
        promotion_id: "Monday",
        sale: "discount on bananas",
        percentage_discount: 25,
      },
      {
        promotion_id: "Tuesday",
        sale: "half-price apples",
        percentage_discount: 50,
      },
      {
        promotion_id: "Wednesday",
        sale: "discount on cherries",
        percentage_discount: 10,
      },
      {
        promotion_id: "Thursday",
        sale: "free grapes",
        percentage_discount: 100,
      },
      {
        promotion_id: "Friday",
        sale: "5% off berries",
        percentage_discount: 5,
      },
      {
        promotion_id: "Saturday",
        sale: "discount on all fruit",
        percentage_discount: 30,
      },
      {
        promotion_id: "Sunday",
        sale: "discount on all fruit",
        percentage_discount: 12,
      },
    ],
  },
];
