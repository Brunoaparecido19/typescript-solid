/*
Open/closed principle
Entidades devem estar abertas para extensão, mas fechadas para modificação.
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
