interface article {
  id: number;
  content: string;
  createdAt: string;
  image: {
    mobile: string;
    desktop: string;
  };
}

export const articles: article[] = [
  {
    id: 1,
    content:
      'Unlocking the Power of Cloud Computing:A Guide to Scalable Solutions',
    createdAt: 'November 12, 2024',
    image: {
      mobile: '/images/photo_1.png',
      desktop: '/images/photo_1@2x.png',
    },
  },{
    id: 2,
    content:
      'The Future of AI:How Machine Learning is Revolutionizing Industries',
    createdAt: 'November 12, 2024',
    image: {
      mobile: '/images/photo_2.png',
      desktop: '/images/photo_2@2x.png',
    },
  },{
    id: 3,
    content:
      'The Impact of 5G on Business:How Faster Networks are Transforming the Way We Work',
    createdAt: 'November 12, 2024',
    image: {
      mobile: '/images/photo_3.png',
      desktop: '/images/photo_3@2x.png',
    },
  },
];
