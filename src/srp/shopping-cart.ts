type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._items.reduce((prev, curr) => prev + curr.price, 0).toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }
    this._orderStatus = 'closed';
    this.sendMenssage(
      `Seu pedido de ${this.total()} foi realizado com sucesso`,
    );
    this.saveOrder();
    this.clearCart();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMenssage(msg: string): void {
    console.log('Mensagem Enviada:', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }

  clearCart(): void {
    this._items.length = 0;
    console.log('Carrinho limpo');
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'Camiseta', price: 50 });
shoppingCart.addItem({ name: 'Caderno', price: 15.98 });
shoppingCart.addItem({ name: 'Calça', price: 28.5 });

console.log(shoppingCart.items);
shoppingCart.checkout();
shoppingCart.clearCart();
console.log(shoppingCart.orderStatus);
