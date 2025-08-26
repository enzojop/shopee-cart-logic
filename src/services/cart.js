// quais ações meu carrinho pode fazer?

//adicionar item
export async function addItemToCart(userCart, item) {
    userCart.push(item);
    return userCart;
}; 

//excluir item do carrinho
export function removeItemFromCart(userCart, item) {
    const indice = userCart.indexOf(item); // indexOf retorna o índice do item no array
    if (indice > -1) {
        userCart.splice(indice, 1); // 'splice(indice, 1)' significa: a partir do índice 'indice', remova '1' elemento.

    }
    return userCart;
};


//remover 1 item do carrinho
export async function removeOneItemFromCart(userCart, item) {
    const index = userCart.indexOf(item);
    if (index > -1) {
        userCart.splice(index, 1);
    }
    return userCart;
};

//calcular o  valor total
export async function calculateTotalCartValue(userCart) {
    return userCart.reduce((total, item) => total + item.subtotal, 0);
};
