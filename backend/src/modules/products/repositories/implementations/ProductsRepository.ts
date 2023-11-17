import { productsMock } from "../../../../mocks/products";
import { Product } from "../../model/product";
import { IProductsRepository } from "../IProductsRepository";


class ProductsRepository implements IProductsRepository {
    private products: Product[] = productsMock;

    private static INSTANCE: ProductsRepository;

    public static getInstance(): ProductsRepository {
      if (!ProductsRepository.INSTANCE) {
        ProductsRepository.INSTANCE = new ProductsRepository();
      }

      return ProductsRepository.INSTANCE;
    }

    findById(id: string): Product | undefined {
      return this.products.find(product => product.id === id);
    }
}

export { ProductsRepository };