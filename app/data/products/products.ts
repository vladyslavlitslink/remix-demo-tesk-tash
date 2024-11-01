export interface Product {
  id: number;
  title: string;
  image: string;
  status: string;
  price: number;
  salePrice: number;
  dateCreated: string;
  dateUpdated: string;
}

export const products: Product[] = Array.from({length: 150}, (_, index) => {
  const id = index + 1;

  return {
    id,
    title: `Product ${id}`,
    image: `https://picsum.photos/seed/${id}/200/300`,
    status: id % 2 === 0 ? 'Available' : 'Out of Stock',
    price: Math.floor(Math.random() * 1000) + 100,
    salePrice: Math.floor(Math.random() * 800) + 50,
    dateCreated: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString(),
    dateUpdated: new Date().toISOString(),
  };
});
