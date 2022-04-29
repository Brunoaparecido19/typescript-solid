import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camisa', 50));
shoppingCart.addItem(new Product('Caderno', 15.98));
shoppingCart.addItem(new Product('Calça', 28.5));

console.log(shoppingCart.items);
order.checkout();
shoppingCart.clearCart();
console.log(order.orderStatus);
