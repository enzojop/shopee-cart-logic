// casos de uso dos itens.

//criar item com subtotal certo.
export const createItem = (name, price, quantity) => {
    const item = {
        name,
        price,
        quantity,
        subtotal: price * quantity // Calcula o subtotal com base no preço e na quantidade
    };
    return item;
}
