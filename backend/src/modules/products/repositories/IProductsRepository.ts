import { Product } from "../model/product";


interface IProductsRepository {
    findById(id: string): Product | undefined;
}

export { IProductsRepository };