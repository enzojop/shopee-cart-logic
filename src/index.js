// Module esm
import { createItem } from "./services/item.js";
import * as cartServices from "./services/cart.js";

const user = 'Enzo'; // usuário
const cart = []; // carrinho do usuário
// const myFavoriteItems = []; // Itens favoritos do usuário

// criando itens
const item1 = await createItem('Produto A', 10.0, 1);
const item2 = await createItem('Produto B', 20.0, 5);
const item3 = await createItem('Produto C', 30.0, 1);
const item4 = await createItem('Produto D', 40.0, 1);
const item5 = await createItem('Produto E', 50.0, 1);

// adicionando itens ao carrinho
await cartServices.addItemToCart(cart, item1);
await cartServices.addItemToCart(cart, item2);
await cartServices.addItemToCart(cart, item3);
await cartServices.addItemToCart(cart, item4);
await cartServices.addItemToCart(cart, item5);

// removendo item por completo do carrinho | exemplo:
await cartServices.removeItemFromCart(cart, item2);

// removendo um item do carrinho | exemplo:
await cartServices.removeOneItemFromCart(cart, item3);

// calculando o valor total do carrinho
const total = await cartServices.calculateTotalCartValue(cart);


// exibindo o conteúdo do carrinho e o valor total
console.log("---------------------------------------------------------------");
console.log(`Olá ${user}, os itens do seu carrinho são:`);
cart.forEach(item => { console.log(`- ${item.name}: R$ ${item.price.toFixed(2)} (Quantidade: ${item.quantity})`); });
console.log(`Valor total do carrinho é: R$ ${total.toFixed(2)}`);
console.log("---------------------------------------------------------------");
