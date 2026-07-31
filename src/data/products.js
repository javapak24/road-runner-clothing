import placeholderImage from '../assets/product-placeholder.svg';
import blackshorts from '../assets/blackshorts.JPG';
import blacksilkshorts from '../assets/blacksilkshorts.JPG';
import cvshortsblue1 from '../assets/cvshortsblue1.JPG';
import cvshortsblue2 from '../assets/cvshortsblue2.JPG';
import indianshirt from '../assets/indianshirt.JPG';
import pinkonblackshorts from '../assets/pinkonblackshorts.JPG';
import redonblackshorts from '../assets/redonblackshorts.JPG';
import tanonblackshorts from '../assets/tanonblackshorts.JPG';
import whiteredshirt from '../assets/whiteredshirt.JPG';
import blackhandsshirt from '../assets/blackhandsshirt.JPG';

import rrblocklogo from '../assets/rrblocklogo.JPG';
import rrcarshirt from '../assets/rrcarshirt.JPG';
import rrsilkshorts from '../assets/rrsilkshorts.JPG';
import rrlogo from '../assets/rrlogo.JPG';

/*
 * This array is the website's product database for now.
 *
 * Each object contains the information needed by one ProductCard.
 * This works naturally with .map(), which turns every object into a card.
 *
 * To add a product:
 * 1. Copy an existing object.
 * 2. Give it a new unique id.
 * 3. Update the values.
 * 4. Import the real image at the top of this file.
 * 5. Replace placeholderImage with the imported image variable.
 */
const products = [
  {
    id: 1,
    name: 'Fast Break Tee',
    category: 'T-Shirts',
    color: 'Black / White',
    price: 35,
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    image: blackhandsshirt,
    featured: true,
    status: 'Available',
    description: 'Heavyweight everyday tee with a clean athletic fit.',
  },
  {
    id: 2,
    name: 'Full Court Hoodie',
    category: 'Hoodies',
    color: 'Charcoal',
    price: 68,
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    image: blackshorts,
    featured: true,
    status: 'Available',
    description:
      'Premium streetwear hoodie built for cool nights and late runs.',
  },
  {
    id: 3,
    name: 'Runner Mesh Shorts',
    category: 'Shorts',
    color: 'Black / Red',
    price: 45,
    sizes: ['S', 'M', 'L', 'XL'],
    image: blacksilkshorts,
    featured: false,
    status: 'Available',
    description: 'Breathable mesh shorts inspired by basketball uniforms.',
  },
  {
    id: 4,
    name: 'Baseline Sweatpants',
    category: 'Sweatpants',
    color: 'Heather Gray',
    price: 58,
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    image: redonblackshorts,
    featured: false,
    status: 'Coming Soon',
    description:
      'Relaxed heavyweight sweats designed for movement and comfort.',
  },
  {
    id: 5,
    name: 'Road Runner Snapback',
    category: 'Accessories',
    color: 'Black',
    price: 30,
    sizes: ['One Size'],
    image: pinkonblackshorts,
    featured: false,
    status: 'Available',
    description:
      'Structured snapback with an adjustable fit and signature logo.',
  },
  {
    id: 6,
    name: 'Fourth Quarter Crewneck',
    category: 'Crewnecks',
    color: 'Cream',
    price: 60,
    sizes: ['S', 'M', 'L', 'XL'],
    image: tanonblackshorts,
    featured: false,
    status: 'Coming Soon',
    description: 'A heavyweight layer for work, travel, and everyday wear.',
  },
  {
    id: 6,
    name: 'Fourth Quarter Crewneck',
    category: 'Crewnecks',
    color: 'Cream',
    price: 60,
    sizes: ['S', 'M', 'L', 'XL'],
    image: whiteredshirt,
    featured: false,
    status: 'Coming Soon',
    description: 'A heavyweight layer for work, travel, and everyday wear.',
  },
  {
    id: 6,
    name: 'Fourth Quarter Crewneck',
    category: 'Crewnecks',
    color: 'Cream',
    price: 60,
    sizes: ['S', 'M', 'L', 'XL'],
    image: blackhandsshirt,
    featured: false,
    status: 'Coming Soon',
    description: 'A heavyweight layer for work, travel, and everyday wear.',
  },
  {
    id: 6,
    name: 'Fourth Quarter Crewneck',
    category: 'Crewnecks',
    color: 'Cream',
    price: 60,
    sizes: ['S', 'M', 'L', 'XL'],
    image: cvshortsblue1,
    featured: false,
    status: 'Coming Soon',
    description: 'A heavyweight layer for work, travel, and everyday wear.',
  },
  {
    id: 6,
    name: 'Fourth Quarter Crewneck',
    category: 'Crewnecks',
    color: 'Cream',
    price: 60,
    sizes: ['S', 'M', 'L', 'XL'],
    image: cvshortsblue2,
    featured: false,
    status: 'Coming Soon',
    description: 'A heavyweight layer for work, travel, and everyday wear.',
  },
  {
    id: 6,
    name: 'Fourth Quarter Crewneck',
    category: 'Crewnecks',
    color: 'Cream',
    price: 60,
    sizes: ['S', 'M', 'L', 'XL'],
    image: indianshirt,
    featured: false,
    status: 'Coming Soon',
    description: 'A heavyweight layer for work, travel, and everyday wear.',
  },
];

export default products;
