export interface Product {
    id: number;
    name: string;
    quantity: number;
    price: number;
    color: string;
    imageSrc: string;
}
export const products: Product[] =[
    {
      id: 1,
      name:'iPhone 12 Pro',
      quantity: 1,
      price: 999,
      color:'Golden',
      imageSrc:'/public/Gold@2x.png'
    },{
      id: 2,
      name:'Apple Watch',
      quantity: 1,
      price: 399,
      color:'Blue',
      imageSrc:'/public/Blue@2x.png'
    },{
      id: 3,
      name:'iMac',
      quantity: 1,
      price: 1199,
      color:'Green',
      imageSrc:'/public/iMac=Front 1@2x.png'
    }
  ]