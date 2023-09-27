let xAxisData = [
  {},
  {
    name: "فروردین",
    sale: 112_000,
  },
  {
    name: "اردیبهشت",
    sale: 99_000,
  },
  {
    name: "خرداد",
    sale: 12_000,
  },
  {
    name: "تیر",
    sale: 99_000,
  },
  {
    name: "مرداد",
    sale: 112_000,
  },
  {
    name: "شهریور",
    sale: 85_000,
  },
  {
    name: "مهر",
    sale: 34_000,
  },
  {
    name: "آبان",
    sale: 18_000,
  },
  {
    name: "آذر",
    sale: 0,
  },
  {
    name: "دی",
    sale: 73_078,
  },
  {
    name: "بهمن",
    sale: 12_000,
  },
  {
    name: "اسفند",
    sale: 97_000,
  },
  {},
];

let newMembers = [
  {
    id: 1,
    username: "Ali Panahi",
    title: "Programmer",
    img: "/images/profile1.jpg",
  },
  {
    id: 2,
    username: "Mohammad Amin",
    title: "Web Developer",
    img: "/images/profile2.jpg",
  },
  {
    id: 3,
    username: "Milad Joodi",
    title: "Student",
    img: "/images/profile3.jpg",
  },
  {
    id: 4,
    username: "Ali Mizani",
    title: "Crypto",
    img: "/images/profile2.jpg",
  },
];

let transactions = [
  {
    id: 1,
    customer: "علیرضا محمدی",
    date: "4 مهر 1402",
    amount: 475000,
    status: "موفق",
    img: '/images/profile1.jpg'
  },
  {
    id: 2,
    customer: "نسرین طباطبایی",
    date: "30 شهریور 1402",
    amount: 1_198000,
    status: "کنسل",
    img: '/images/profile2.jpg'
  },
  {
    id: 3,
    customer: "مهدسه برومند",
    date: "12 تیر 1402",
    amount: 980000,
    status: "انتظار",
    img: '/images/profile1.jpg'

  },
  {
    id: 4,
    customer: "سینا احمدی",
    date: "15 فرودین 1402",
    amount: 18000,
    status: "موفق",
    img: 'images/Steve-Jobs.jpg'
  },
];
let userRows = [
    {
        id: 1,
        username: 'علی رضا پناهی',
        avatar: 'images/profile3.jpg',
        status: 'active',
        transaction: '129,000',
        email: 'amin@gmail.com'
    },
    {
        id: 2,
        username: 'جواد رضایی',
        avatar: 'images/profile4.jpg',
        status: 'non-active',
        transaction: '192,000',
        email: 'javadi.reza@yahoo.com'
    },
    {
        id: 3,
        username: 'علی احمدی',
        avatar: 'images/profile5.jpg',
        status: 'active',
        transaction: '378,000',
        email: 'ahmadi.word@gmail.com'
    },
    {
        id: 4,
        username: 'زهرا حسینی',
        avatar: 'images/profile6.jpg',
        status: 'active',
        transaction: '0',
        email: 'zahra.hosseini7570@gmail.com'
    },
    {
        id: 5,
        username: 'معصومه اصغری',
        avatar: 'images/profile7.jpg',
        status: 'active',
        transaction: '237,000',
        email: 'masome.fg@gmail.com'
    }
]
let products = [
  {
      id: 1,
      title: 'Asus',
      avatar: 'images/asus.jpeg',
      price: 890
  },
  {
      id: 2,
      title: 'Acer',
      avatar: 'images/acer.jpg',
      price: 890
  },
  {
      id: 3,
      title: 'HP',
      avatar: 'images/hp.jpg',
      price: 890
  },
  {
      id: 4,
      title: 'Dell',
      avatar: 'images/dell.jpg',
      price: 890
  },
]

const productsData = [
  {
      name: 'فروردین',
      sales: 4000,
  },
  {
      name: 'اردیبهشت',
      sales: 3000,
  },
  {
      name: 'خرداد',
      sales: 5000,
  },
]

export { xAxisData, newMembers, transactions, userRows, products, productsData }