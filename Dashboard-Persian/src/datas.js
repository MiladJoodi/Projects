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
        username: 'Qadir Yolme',
        avatar: 'images/profile.jfif',
        status: 'active',
        transaction: '$129.52',
        email: 'amin@gmail.com'
    },
    {
        id: 2,
        username: 'Amin Saeedi',
        avatar: 'images/profile.jfif',
        status: 'non-active',
        transaction: '$110',
        email: 'amin@gmail.com'
    },
    {
        id: 3,
        username: 'Sasan Moq',
        avatar: 'images/profile.jfif',
        status: 'active',
        transaction: '$98',
        email: 'amin@gmail.com'
    },
    {
        id: 4,
        username: 'Zahra Agayi',
        avatar: 'images/profile.jfif',
        status: 'active',
        transaction: '$0',
        email: 'amin@gmail.com'
    },
    {
        id: 5,
        username: 'Hamze mohammadi',
        avatar: 'images/profile.jfif',
        status: 'active',
        transaction: '$55.98',
        email: 'amin@gmail.com'
    }
]

export { xAxisData, newMembers, transactions, userRows }