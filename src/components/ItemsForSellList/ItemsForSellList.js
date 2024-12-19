import ItemForSell from "./ItemForSell";

const ItemsForSellList = () => {
  const products = [
    {
      id: '1',
      name: 'Toyota Corolla 2020',
      category: 'car',
      location: 'New York, NY',
      pics: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
      ],
      description:
        'Well-maintained Toyota Corolla with 15,000 miles. Ready for a new owner.',
      price: 18000,
      attributes: {
        condition: 'Used',
        mileage: '15,000 miles',
      },
    },
    {
      id: '2',
      name: 'Professional Paint Brush Set',
      category: 'art-tools',
      location: 'Los Angeles, CA',
      pics: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
      ],
      description: 'Not needed and therefore selling',
      price: 15,
      attributes: {
        condition: 'New',
      },
    },
    {
      id: '3',
      name: 'Mountain Bike',
      category: 'bike',
      location: 'Denver, CO',
      pics: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
      ],
      description:
        'A like-new mountain bike, only ridden twice. Perfect for trails.',
      price: 400,
      attributes: {
        condition: 'Used',
        brand: 'Trailblazer',
      },
    },
    {
      id: '4',
      name: 'PlayStation 5',
      category: 'gaming',
      location: 'Chicago, IL',
      pics: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
      ],
      description:
        'Barely used PlayStation 5. Comes with one controller and all original cables.',
      price: 350,
      attributes: {
        condition: 'Used',
        accessories: ['Controller'],
      },
    },
    {
      id: '5',
      name: 'Men’s Leather Jacket',
      category: 'clothes',
      location: 'San Francisco, CA',
      pics: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
      ],
      description:
        'Brand-new leather jacket, size L. Unworn and tags still attached.',
      price: 120,
      attributes: {
        size: 'L',
        condition: 'New',
      },
    },
    {
      id: '6',
      name: 'Samsung 55" Smart TV',
      category: 'tv',
      location: 'Houston, TX',
      pics: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
      ],
      description:
        'Used Samsung Smart TV, in excellent condition. No scratches or dead pixels.',
      price: 400,
      attributes: {
        condition: 'Used',
        brand: 'Samsung',
      },
    },
    {
      id: '7',
      name: 'DeWalt Power Drill',
      category: 'tools',
      location: 'Phoenix, AZ',
      pics: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
      ],
      description:
        'Lightly used cordless DeWalt power drill. Includes charger.',
      price: 90,
      attributes: {
        brand: 'DeWalt',
        condition: 'Used',
      },
    },
    {
      id: '8',
      name: 'iPhone 14 Pro',
      category: 'phone',
      location: 'Miami, FL',
      pics: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
      ],
      description: 'Brand-new iPhone 14 Pro, 256GB in space black. Unopened.',
      price: 1200,
      attributes: {
        condition: 'New',
        brand: 'Apple',
      },
    },
    {
      id: '9',
      name: 'Dell XPS 13 Laptop',
      category: 'laptop',
      location: 'Seattle, WA',
      pics: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
      ],
      description:
        'Well-maintained Dell XPS 13 laptop, recently factory reset.',
      price: 900,
      attributes: {
        brand: 'Dell',
        condition: 'Used',
      },
    },
    {
      id: '10',
      name: 'LEGO Star Wars Set',
      category: 'toys',
      location: 'Orlando, FL',
      pics: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
      ],
      description: 'Brand-new LEGO Star Wars spaceship set, sealed box.',
      price: 70,
      attributes: {
        condition: 'New',
      },
    },
    {
      id: '11',
      name: 'Coleman Camping Tent',
      category: 'outdoor',
      location: 'Austin, TX',
      pics: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
      ],
      description:
        'Used camping tent for 4 people. No tears, cleaned after last use.',
      price: 80,
      attributes: {
        brand: 'Coleman',
        condition: 'Used',
      },
    },
    {
      id: '12',
      name: 'Vintage Camera',
      category: 'others',
      location: 'San Diego, CA',
      pics: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
      ],
      description:
        'Vintage camera replica in pristine condition. Great for collectors.',
      price: 150,
      attributes: {
        condition: 'Used',
      },
    },
  ];


  return (
    <>
      <div className="md:hidden mx-4 mt-2 grid grid-cols-2 gap-4">
        {products.map((product) => (
          <ItemForSell key={product.id} {...product} />
        ))}
      </div>
      <div className="hidden md:grid lg:hidden mx-4 mt-2  grid-cols-3 gap-4">
        {products.map((product) => (
          <ItemForSell key={product.id} {...product} />
        ))}
      </div>
      <div className="hidden lg:grid mx-4 mt-2  grid-cols-4 gap-4">
        {products.map((product) => (
          <ItemForSell key={product.id} {...product} />
        ))}
      </div>
    </>
  );

}

export default ItemsForSellList;