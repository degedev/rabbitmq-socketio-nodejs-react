import { Product } from "./product";


class ProductItem {
    product: Product;
    quantity: number;
    subtotal: number;

    constructor(product: Product, quantity: number) {
        this.product = product;
        this.quantity = quantity;
        this.subtotal = quantity * product.price;
    }
}

export { ProductItem };