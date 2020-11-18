const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Packages' },
    { name: 'Add-on Products' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'ESSENTIAL PACKAGE',
      description:
        '2 Months Supply <br> Under Eye Bags/Puffiness <br> Immediate Effects 2 <br> INSTANT $30 Coupon APPLIED AT CHECKOUT',
      image: 'Essential-Package.png',
      category: categories[0]._id,
      price: 127.00,
      quantity: 500,
      savings: "55% SAVINGS",
      msrp: 267
    },
    {
      name: 'BEST SELLER!',
      description:
        '2 Months Supply <br> Essentials Package Plus: <br> Droopy Eyelids <br> Microdermabrasion <br> Detox Masque <br><br> INSTANT $30 Coupon APPLIED AT CHECKOUT <br> 1 Complimentary Gift of choice below <br> FREE UPGRADE to RUSH SHIPPING',
      image: 'Popular_Package.png',
      category: categories[0]._id,
      price: 154.00,
      quantity: 500,
      savings: "70% SAVINGS",
      msrp: 583
    },
    {
      name: 'COMPLETE PACKAGE',
      category: categories[0]._id,
      description:
        '2 Months Supply <br> Most Popular Package Plus: <br> Dark Spot Corrector <br> Cleanser Toner <br><br> INSTANT $30 Coupon APPLIED AT CHECKOUT <br> 2 Complimentary Gifts below <br> FREE UPGRADE to RUSH SHIPPING <br> Maximum Results - Guaranteed!',
      image: 'Complete-Package.png',
      price: 220.00,
      quantity: 200,
      savings: "75% SAVINGS",
      msrp: 878
    },
    {
      name: 'New! Zotique Deep Correcting Serum',
      category: categories[0]._id,
      description:
        "Nobody misses those days when acne was a daily battle. So being able to get rid of reminders like acne scars, dark spots, and even new blemishes would be awesome. That's why we have formulated Zotique!",
      image: 'Zotique.png',
      price: 0.00,
      quantity: 250,
      msrp: 109
    },
    {
      name: 'New! Genucel Ultra Retinol',
      category: categories[0]._id,
      description:
        'This revitalizing and restorative créme is infused with Bakuchiol®, the natural alternative to retinol, to dramatically reduce the appearance of redness on your skin and so much more.',
      image: 'Genucel-Ultra-Retinol.png',
      price: 0.00,
      quantity: 200,
      msrp: 110
    },
    {
      name: 'Genucel Dark Circle Treatment',
      category: categories[1]._id,
      description:
        'Helps to fade the appearance of unsightly dark circles in just a few days!',
      image: 'Dark-Circle-Treatment.png',
      price: 19.95,
      quantity: 250,
      msrp: 99
    },
    {
      name: 'Revitalizing Face Créme',
      category: categories[1]._id,
      description:
        'Perfect for enhancing the appearance of healthy, vibrant, youthful-looking skin',
      image: 'Revitalizing_Face_Creme.png',
      price: 19.95,
      quantity: 200,
      msrp: 99
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
