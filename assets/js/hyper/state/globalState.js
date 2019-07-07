var companyInfo = {
  title: 'ATLANTA BISTRO RESTAURANT',
  phone: '(404) 512 - 0978',
  location: 'Atlanta, Georgia',

}

var menuInfo = [
  {
    title: 'Super BBQ Grill No Smoke',
    description: 'Fried eggs, fried bacon, soft bun, and soy sauce.',
    price: '17'
  },
  {
    title: 'Midtown Atlanta Chicken Grill',
    description: 'Spicy grilled chicken marinated in a honey glaze.',
    price: '21'
  },
  {
    title: 'Quinoa and Apple Cider Dumplins',
    description: 'Tasty quinoa sauteed in delicious sweet applie cider.',
    price: '15'
  },
]

var reviewsInfo = [
  {
    company: 'The Food Network',
    review: 'The Atlanta Bistro exemplifies amazing service and good quality. We inspected the quality of the menu and the cleanliness of the kitchen. The chef seems to make sure that the dishes offered are of the highest quality. The dining area is sleek and modern, perfect for the Atlanta scene.',
    author: 'Joe Bastiachi',
    authorInfo: 'Winner Of The Chef Masterclass',
    highlight: '"Best Restaurant in the Atlanta area!"'
  },
  {
    company: 'Gayot',
    review: 'The Atlanta Bistro exemplifies amazing service and good quality. We inspected the quality of the menu and the cleanliness of the kitchen. The chef seems to make sure that the dishes offered are of the highest quality. The dining area is sleek and modern, perfect for the Atlanta scene.',
    author: 'Robert Sietsema',
    authorInfo: 'Winner Of The Chef Masterclass',
    highlight: '"High quality food and modern decor!"'
  },
  {
    company: 'Roadfood',
    review: 'The Atlanta Bistro exemplifies amazing service and good quality. We inspected the quality of the menu and the cleanliness of the kitchen. The chef seems to make sure that the dishes offered are of the highest quality. The dining area is sleek and modern, perfect for the Atlanta scene.',
    author: 'Josh Ozersky',
    authorInfo: 'Winner Of The Chef Masterclass',
    highlight: '"Top notch service and food!"'
  },
  {
    company: 'BlackboardEats',
    review: 'The Atlanta Bistro exemplifies amazing service and good quality. We inspected the quality of the menu and the cleanliness of the kitchen. The chef seems to make sure that the dishes offered are of the highest quality. The dining area is sleek and modern, perfect for the Atlanta scene.',
    author: 'Kenji Lopez-Alt',
    authorInfo: 'Winner Of The Chef Masterclass',
    highlight: '"Luxury Bistro dining with a twist!"'
  },
  {
    company: 'HBO',
    review: 'The Atlanta Bistro exemplifies amazing service and good quality. We inspected the quality of the menu and the cleanliness of the kitchen. The chef seems to make sure that the dishes offered are of the highest quality. The dining area is sleek and modern, perfect for the Atlanta scene.',
    author: 'Ben Leventhal',
    authorInfo: 'Winner Of Atlanta Best Chef',
    highlight: '"Amazing Dining experience for all!"'
  },
]


var quoteInfo = [
  {
    author: 'Henry',
    quote: '"Food Has The Power To Bring Everyone Together. No Matter What Culture, People Get Together To Eat."'
  },
  {
    author: 'Amanda',
    quote: '"Life is uncertain. Eat dessert first."'
  },
  {
    author: 'David',
    quote: '"In wine there is wisdom, in beer there is strength, in water there is bacteria."'
  },
  {
    author: 'Beth',
    quote: '"You don’t need a silver fork to eat good food."'
  },
  {
    author: 'Julia',
    quote: '"The only time to eat diet food is while you’re waiting for the steak to cook."'
  }
]


export const globalState = {
  count: 0, 
  companyInfo,
  menuInfo,
  quoteInfo,
  reviewsInfo,
  reviewStatus: {
    currentReview: 0,
  }
}
