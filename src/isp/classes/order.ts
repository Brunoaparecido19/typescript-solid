import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { ShoppingCart } from './shopping-cart';
import { Persistency } from '../services/persistency';

export class Order {
  constructor(
    private readonly cart: ShoppingCart,
    private readonly message: Messaging,
    private readonly persistency: Persistency,
  ) {}
  private _orderStatus: OrderStatus = 'open';

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }
    this._orderStatus = 'closed';
    this.message.sendMenssage(
      `Seu pedido de ${this.cart.totalWithDicount()} foi realizado com sucesso`,
    );
    this.persistency.saveOrder();
    this.cart.clearCart();
  }
}
