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
import ceoshorts from '../assets/ceosuedeshorts.JPG';
import cvshirt from '../assets/cvshirt.JPG';
import gtashirt from '../assets/gtashirt.JPG';
import medicinewheelshorts from '../assets/medicinewheelsuedeshorts.JPG';
import nativequeen from '../assets/nativequeen.JPG';
import shpeeblockshorts from '../assets/shpeeblockshorts.JPG';
import tribalchief from '../assets/tribalchief.JPG';

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
    name: 'ICEMAN Shirt',
    category: 'Shirts',
    color: 'Black/White',
    price: 60,
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    image: blackhandsshirt,
    featured: true,
    status: 'Available',
    description: 'High Quality Shirt for work, travel, and everyday wear.',
  },
  {
    id: 2,
    name: 'Medicine Wheel Suede Shorts',
    category: 'Shorts',
    color: 'Black',
    price: 60,
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    image: medicinewheelshorts,
    featured: false,
    status: 'Coming Soon',
    description: 'High Quality Shorts for work, travel, and everyday wear.',
  },

  {
    id: 3,
    name: 'CEO Suede Shorts',
    category: 'Shorts',
    color: 'Black',
    price: 60,
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    image: ceoshorts,
    featured: false,
    status: 'Coming Soon',
    description: 'High Quality Shorts for work, travel, and everyday wear.',
  },

  {
    id: 4,
    name: 'Red Tribal Shorts',
    category: 'Shorts',
    color: 'Red',
    price: 60,
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    image: redonblackshorts,
    featured: false,
    status: 'Coming Soon',
    description: 'High Quality Shorts for work, travel, and everyday wear.',
  },

  {
    id: 5,
    name: 'Pink Tribal Shorts',
    category: 'Shorts',
    color: 'Pink',
    price: 60,
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    image: pinkonblackshorts,
    featured: false,
    status: 'Available',
    description: 'High Quality Shorts for work, travel, and everyday wear.',
  },

  {
    id: 6,
    name: 'Tan Tribal Shorts',
    category: 'Shorts',
    color: 'Tan',
    price: 60,
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    image: tanonblackshorts,
    featured: false,
    status: 'Coming Soon',
    description: 'High Quality Shorts for work, travel, and everyday wear.',
  },

  {
    id: 7,
    name: 'Native Queen Shirt',
    category: 'Shirts',
    color: 'White/Red',
    price: 60,
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    image: nativequeen,
    featured: false,
    status: 'Coming Soon',
    description: 'High Quality Shirt for work, travel, and everyday wear.',
  },
  {
    id: 8,
    name: 'Cape Verde Shorts 1',
    category: 'Shorts',
    color: 'Blue/White',
    price: 60,
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    image: cvshortsblue1,
    featured: false,
    status: 'Coming Soon',
    description: 'High Quality Shorts for work, travel, and everyday wear.',
  },

  {
    id: 9,
    name: 'Cape Verde Shorts 2',
    category: 'Shorts',
    color: 'White/Blue',
    price: 60,
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    image: cvshortsblue2,
    featured: false,
    status: 'Coming Soon',
    description: 'High Quality Shorts for work, travel, and everyday wear.',
  },
  {
    id: 10,
    name: 'Tribal Chief Shirt',
    category: 'Shirts',
    color: 'Black',
    price: 60,
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    image: tribalchief,
    featured: false,
    status: 'Coming Soon',
    description: 'High Quality Shirt for work, travel, and everyday wear.',
  },

  {
    id: 11,
    name: 'Cape Verde Shirt',
    category: 'Shirts',
    color: 'White/Blue',
    price: 60,
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    image: cvshirt,
    featured: false,
    status: 'Coming Soon',
    description: 'High Quality Shirt for work, travel, and everyday wear.',
  },
  {
    id: 12,
    name: 'GTA Shirt',
    category: 'Shirts',
    color: 'Black',
    price: 60,
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    image: gtashirt,
    featured: true,
    status: 'Coming Soon',
    description: 'High Quality Shirt for work, travel, and everyday wear.',
  },
  {
    id: 13,
    name: '$hpee Block Shorts',
    category: 'Shorts',
    color: 'Black',
    price: 60,
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    image: shpeeblockshorts,
    featured: true,
    status: 'Coming Soon',
    description: 'High Quality Shorts for work, travel, and everyday wear.',
  },
];

export default products;
