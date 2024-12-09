// given array 
const products = [
    {
      title: "Smartphone",
      description: "Latest model with 128GB storage and 5G connectivity.",
      year: 2022,
      price: 899.99,
      image: "https://example.com/images/smartphone.jpg",
      isDiscounted: false,
      isRefurbished: true,
      discount: {
        discountAvailable: "0%"
      },
      quantity: 20
    },
    {
      title: "Gaming Laptop",
      description: "High-performance laptop with RTX 3060 GPU and 16GB RAM.",
      year: 2023,
      price: 1299.99,
      image: "https://example.com/images/laptop.jpg",
      isDiscounted: true,
      isRefurbished: false,
      discount: {
        discountAvailable: "15%"
      },
      quantity: 10
    },
    {
      title: "Mechanical Keyboard",
      description: "RGB backlit mechanical keyboard with customizable keys.",
      year: 2021,
      price: 89.99,
      image: "https://example.com/images/keyboard.jpg",
      isDiscounted: false,
      isRefurbished: false,
      discount: {
        discountAvailable: "0%"
      },
      quantity: 100
    },
    {
      title: "Smartwatch",
      description: "Water-resistant smartwatch with heart-rate monitor and GPS.",
      year: 2022,
      price: 249.99,
      image: "https://example.com/images/smartwatch.jpg",
      isDiscounted: true,
      isRefurbished: true,
      discount: {
        discountAvailable: "5%"
      },
      quantity: 30
    },
    {
      title: "Bluetooth Speaker",
      description: "Portable speaker with 20W output and 12-hour battery life.",
      year: 2024,
      price: 49.99,
      image: "https://example.com/images/speaker.jpg",
      isDiscounted: false,
      isRefurbished: false,
      discount: {
        discountAvailable: "0%"
      },
      quantity: 200
    },
    {
      title: "4K Monitor",
      description: "Ultra HD monitor with 144Hz refresh rate and HDR support.",
      year: 2023,
      price: 399.99,
      image: "https://example.com/images/monitor.jpg",
      isDiscounted: true,
      isRefurbished: false,
      discount: {
        discountAvailable: "20%"
      },
      quantity: 25
    },
    {
      title: "Fitness Tracker",
      description: "Lightweight tracker with step count, calorie burn, and sleep monitoring.",
      year: 2021,
      price: 69.99,
      image: "https://example.com/images/fitness-tracker.jpg",
      isDiscounted: false,
      isRefurbished: true,
      discount: {
        discountAvailable: "0%"
      },
      quantity: 150
    },
    {
      title: "Drone",
      description: "Camera drone with 4K video and 30-minute flight time.",
      year: 2024,
      price: 999.99,
      image: "https://example.com/images/drone.jpg",
      isDiscounted: true,
      isRefurbished: false,
      discount: {
        discountAvailable: "25%"
      },
      quantity: 15
    },
    {
      title: "Electric Scooter",
      description: "Foldable scooter with a top speed of 25 mph and 30-mile range.",
      year: 2022,
      price: 499.99,
      image: "https://example.com/images/scooter.jpg",
      isDiscounted: false,
      isRefurbished: true,
      discount: {
        discountAvailable: "0%"
      },
      quantity: 40
    }
  ];
  
  // {
  //   title: "Smartphone",
  //   description: "Latest model with 128GB storage and 5G connectivity.",
  //   year: 2022,
  //   price: 899.99,
  //   image: "https://example.com/images/smartphone.jpg",
  //   isDiscounted: false,
  //   isRefurbished: true,
  //   discount: {
  //     discountAvailable: "0%"
  //   },
  //   quantity: 20
  // }
  // 1. Console Log All Products
  console.log(`All Products:`);
  products.forEach(product => console.log(` - ${product.title} - $${product.price}`));
  // 2. Filter Products with Long Descriptions
  console.log(`Products with Long Descriptions:`);
  const longDescriptions = products.filter(product => product.description.length > 55);
  longDescriptions.forEach((product, index) => console.log(` - ${index + 1}. ${product.title}`));
  // 3. Filter Products by Price Range
  console.log(`Products by Price Range:`);
  const priceRange = products.filter(product => product.price >= 200 && product.price <= 500);
  priceRange.forEach((product, index) => console.log(` - ${index + 1}. ${product.title} - $${product.price}`));
  // 4. Filter Discounted Products
  console.log(`Discounted Products:`);
  const discountedProducts = products.filter(product => product.isDiscounted === true);
  discountedProducts.forEach((product, index) => console.log(` - ${index + 1}. ${product.title} - $${product.price}`));
  // 5. Filter Products with 15% or More Discount
  console.log(`Products with 15% or More Discount:`);
  const discountAvailableProducts = products.filter(product => parseInt(product.discount.discountAvailable) >= 15);
  discountAvailableProducts.forEach((product, index) => console.log(` - ${index + 1}. ${product.title}: ${product.discount.discountAvailable}`));
  // 6. Filter New Products
  console.log(`New Products:`);
  const newProducts = products.filter(product => product.year === 2024);
  newProducts.forEach((product, index) => console.log(` - ${index + 1}. ${product.title}: ${product.year}`));
  

// write code here