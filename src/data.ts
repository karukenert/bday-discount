// enum Criteria {
//   LOYALITY_CARD = 'Kliendikaart',
//   ID_CARD = 'ID-kaart',
// }

enum Category {
  FOOD = 'Söök',
  DRINK = 'Jook',
  CLOTHES = 'Riided',
  BOOKS = 'Raamatud',
  COSMETICS = 'Kosmeetika',
  OTHER = 'Muu',
}

interface Discount {
  companyName: string;
  discountName: string;
  category?: (Category | string)[];
  // extraCriteria?: (Criteria | string)[];
  // discountPercentage?: number;
  discountDescription: string;
}

// interface PercentageDiscount extends Discount {
// discountPercentage: number;
// }

// interface NonPercentageDiscount extends Discount {
// discountDescription: string;
// };

export const data: Discount[] = [
  { companyName: 'Boost', discountName: 'Tasuta jook', discountDescription: 'Tasuta jook sünnipäeva päeval', category: [Category.DRINK] },
  { companyName: 'Coffe in', discountName: 'Soodushinnaga jook', discountDescription: 'Soodushind -10% sünnipäevanädalal 1x kleindikaardi olemasolul', category: [Category.DRINK] },
  { companyName: 'Hesburger', discountName: 'Jäätis tasuta', discountDescription: 'Tasuta jäätis sünnipäeva päeval', category: [Category.FOOD] },
  { companyName: 'Rahva raamat', discountName: 'Allahindlus', discountDescription: 'Soodushind sünnipäeva päeval -25%', category: [Category.BOOKS] },

  //   { companyName: 'Parnerkaart', discountName: "Lisasoodustus", discountDescription: "Kaubamajas, I.L.U. ja L’Occitane’i ilupoodides soodustuse suuruseks 10%."
  // , extraCriteria: [
  //   "Kehtib Sinu sünnipäeval ning sellele eelneval ja järgneval 5 päeval "
  // ]

  //    },
  // { companyName: 'Boost', discountName: "Tasuta jook" },
  // { companyName: 'Coop kaart', discountName: "Lisasoodustus" },
  // { companyName: 'Monton', discountName: "Lisasoodustus" },
  // { companyName: 'Rahva raamat', discountName: "Lisasoodustus" },
  // { companyName: 'Apollo', discountName: "Lisasoodustus" },
  // { companyName: 'Jazz pesula', discountName: "Lisasoodustus" },
  // { companyName: 'Rimi', discountPercentage: 5, discountName: "Lisasoodustus" },
  // { companyName: 'Peetri pizza', discountName: "osta 3, saad 4. tasuta" },
  // { companyName: 'Juustukuningad', discountPercentage: 5, discountName: "Lisasoodustus" },
  // { companyName: 'Sokisahtel', discountPercentage: 30, discountName: "Lisasoodustus" },
  // { companyName: 'Bodyshop', discountPercentage: 30, discountName: "Lisasoodustus" },
];
