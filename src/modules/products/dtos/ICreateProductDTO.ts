export default interface ICreateProductDTO {
  name: string;
  price: number;
  quantity: number;
  barcode: string;
  description: string;
  expirationDate: Date;
}
