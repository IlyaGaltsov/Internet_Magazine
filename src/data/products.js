import Product1 from '../assets/images/products/1.png';
import Product2 from '../assets/images/products/2.png';
import Product3 from '../assets/images/products/3.png';
import Product4 from '../assets/images/products/4.png';
import Product5 from '../assets/images/products/5.png';
import Product6 from '../assets/images/products/6.png';
import Product7 from '../assets/images/products/7.png';
import Product8 from '../assets/images/products/8.png';

import Product91 from '../assets/images/pdp-images/image1.png';
import Product92 from '../assets/images/pdp-images/image5.png';
import Product93 from '../assets/images/pdp-images/image6.png';

export const products = [
  {
    id: 1,
    title: 'T-shirt with Tape Details',
    description: '',
    thumb: Product1,
    price: 120,
    rating: 4,
    images: [''],
    colors: [''],
    sizes: [''],
    count: 1,
    isNew: true,
    isSale: false,
  },
  {
    id: 2,
    title: 'Skinny Fit Jeans',
    description: '',
    thumb: Product2,
    price: 240,
    originalPrice: 260,
    discount: 20,
    rating: 3,
    images: [''],
    colors: [''],
    sizes: [''],
    count: 1,
    isNew: true,
  },
  {
    id: 3,
    title: 'Checkered Shirt',
    description: '',
    thumb: Product3,
    price: 180,
    rating: 4,
    images: [''],
    colors: [''],
    sizes: [''],
    count: 1,
    isNew: true,
  },
  {
    id: 4,
    title: 'Sleeve Striped T-shirt',
    description: '',
    thumb: Product4,
    price: 130,
    originalPrice: 160,
    discount: 30,
    rating: 4,
    images: [''],
    colors: [''],
    sizes: [''],
    count: 1,
    isNew: true,
  },
  {
    id: 5,
    title: 'Vertical Striped Shirt',
    description: '',
    thumb: Product5,
    url: '#',
    price: 212,
    originalPrice: 232,
    discount: 20,
    rating: 5,
    images: [''],
    colors: [''],
    sizes: [''],
    count: 1,
  },
  {
    id: 6,
    title: 'Courage Graphic T-shirt',
    description: '',
    thumb: Product6,
    url: '#',
    price: 145,
    rating: 4,
    images: [''],
    colors: [''],
    sizes: [''],
    count: 1,
  },
  {
    id: 7,
    title: 'Loose Fit Bermuda Shorts',
    description: '',
    thumb: Product7,
    url: '#',
    price: 80,
    rating: 3,
    images: [''],
    colors: ['orange', 'purple'],
    sizes: ['Small', 'Large', 'X-Large'],
    count: 1,
  },
  // {
  //   id: 8,
  //   title: 'Faded Skinny Jeans',
  //   description: 'Test text for faded skinny jeans',
  //   thumb: Product8,
  //   url: '#',
  //   price: 210,
  //   rating: 4,
  //   images: [''],
  //   colors: [''],
  //   sizes: [''],
  //   count: 1,
  // },
  {
    id: 8,
    title: 'Faded Skinny Jeans',
    description:
      'This fluid V-neck blouse will skim and float over your body. Elegant and tailored with the ease of a tee, it was constructed with comfortable stretch from an extra special, washable crepe de chine. We love the soft volume that flows down from the pleats at the neck and the elegant trim finishes.',
    thumb: Product8,
    url: '#',
    price: 200,
    discountedPrice: 0,
    rating: 4,
    images: [Product8, Product92, Product93],
    colors: ['black', 'brown', 'yellow'],
    sizes: ['S', 'M', 'L'],
    count: 1,
    reviews: [
      {
        id: 1,
        name: 'QA Test',
        rating: 3.5,
        review:
          '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
        date: 'August 14 2023',
      },
      {
        id: 1,
        name: 'QA Test',
        rating: 3.5,
        review:
          '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
        date: 'August 14 2023',
      },
      {
        id: 1,
        name: 'QA Test',
        rating: 3.5,
        review:
          '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
        date: 'August 14 2023',
      },
      {
        id: 1,
        name: 'QA Test',
        rating: 3.5,
        review:
          '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
        date: 'August 14 2023',
      },
      {
        id: 1,
        name: 'QA Test',
        rating: 3.5,
        review:
          '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
        date: 'August 14 2023',
      },
    ],
  },
  {
    id: 9,
    title: 'One Life Graphic T-shirt',
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    thumb: Product91,
    price: 300,
    discountedPrice: 260,
    rating: 4.5,
    images: [Product91, Product92, Product93],
    colors: ['#4F4631', '#314F4A', '#31344F'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    count: 1,
    reviews: [
      {
        id: 1,
        name: 'QA Test',
        rating: 3.5,
        review:
          '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
        date: 'August 14 2023',
      },
      {
        id: 1,
        name: 'QA Test',
        rating: 3.5,
        review:
          '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
        date: 'August 14 2023',
      },
      {
        id: 1,
        name: 'QA Test',
        rating: 3.5,
        review:
          '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
        date: 'August 14 2023',
      },
      {
        id: 1,
        name: 'QA Test',
        rating: 3.5,
        review:
          '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
        date: 'August 14 2023',
      },
      {
        id: 1,
        name: 'QA Test',
        rating: 3.5,
        review:
          '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
        date: 'August 14 2023',
      },
    ],
  },
];
