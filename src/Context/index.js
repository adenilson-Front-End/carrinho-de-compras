import { createContext, useState } from "react";

export const CardContext = createContext();

export default function CardProvaider({ children }) {

    const [ cart, setCart ] = useState([]);
    const [ total, setTotal ] = useState(0);


    function addItemCart(newItem) {
        const indexItem = cart.findIndex(item => item.id === newItem.id);
        if (indexItem !== -1) {
            // quer dizer que o item já existe no carrinho entao e so adicionar a quantidade
            let cartList = cart;

            cartList[ indexItem ].amount = cartList[ indexItem ].amount + 1;
            cartList[ indexItem ].total = cartList[ indexItem ].amount * newItem.price;

            setCart(cartList);
            return;

        }

        const data =
        {
            ...newItem,
            amount: 1,
            total: newItem.price,
        }

        setCart(products => [ ...products, data ]);
        console.log([ ...cart, data ])
    }

    function deleteItemCart(id) {
        const deleteItem = cart.filter(item => item.id !== id);
        setCart(deleteItem);
    }
    return (
        <CardContext.Provider value={{ cart, addItemCart, deleteItemCart, total, setTotal }}>
            {children}
        </CardContext.Provider>
    )
}