/*
Liskov substitution principle(Princípio da substituição de Liskov)
Se(x)éuma propriedade demonstrável dos objetosxde tipo T. Então(y)
deve ser verdadeiro para objetosyde tipo5ondeSéum subtipo de T.

Mais simples:Subtipos precisam ser substituíveis por seus tipos de base.

Mais simples ainda:Se meu programa espera um Animal,algo do tipo
Dog(que herda de Animal)deve servir como qualquer outro Animal.
 */
import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { NoDiscount /* , TemPercentDiscount */ } from './classes/discount';

// const temPercentDiscount = new TemPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camisa', 50));
shoppingCart.addItem(new Product('Caderno', 15.98));
shoppingCart.addItem(new Product('Calça', 28.5));

console.log(shoppingCart.totalWithDicount());
console.log(shoppingCart.items);
order.checkout();
console.log(order.orderStatus);
