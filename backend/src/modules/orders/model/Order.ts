import { ProductItem } from "../../products/model/ProductItem";
import { User } from "../../users/model/User";

class Order {
    id: string;
    items: ProductItem[];
    user: User;
    total: number;
    status: 'pendente' | 'confirmado' | 'enviado' | 'recebido';

    constructor(items: ProductItem[], user: User) {
        this.id = new Date().getTime().toString();
        this.items = items;
        this.total = items.reduce((total, item) => total + item.subtotal, 0);
        this.status = 'pendente';
        this.user = user;
    }
}

export { Order };