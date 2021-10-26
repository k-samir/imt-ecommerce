export class Product {
  constructor(
    public title: string,
    public photo: string,
    public description: string,
    public price: number,
    public stock: number
  ) {}

  public isInStock(): Boolean {
    return this.stock == 0;
  }

  public isLast(): Boolean{
      return this.stock == 1;
  }
}
