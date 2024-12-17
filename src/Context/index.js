import { createContext, useEffect, useState } from 'react';

export const CardContext = createContext();

export default function CardProvaider({ children }) {
    const [ cart, setCart ] = useState([]);
    const [ total, setTotal ] = useState(0);

    function addItemCart(newItem) {
        const indexItem = cart.findIndex((item) => item.id === newItem.id);

        if (indexItem === 0) {
            // se o item já estiver no carrinho, entao so adiciona na quantidade.
            const listItem = cart;
            listItem[ indexItem ].amount = listItem[ indexItem ].amount + 1;
            listItem[ indexItem ].total = listItem[ indexItem ].amount * newItem.price;

            setCart(listItem);
            return;
        }

        // se o item nao estiver no carrinho, entao adiciona o item no carrinho
        const data = {
            ...newItem,
            amount: 1,
            total: newItem.price,
        };

        setCart((products) => [ ...products, data ]);
        setTotal(...cart, data);
    }

    // função para remover um item do carrinho
    function removeItemCart(products) {
        // irei verificar se existe o item no carrinho, caso exista irei remover
        const indexItem = cart.findIndex((item) => item.id === products.id);

        if (cart[ indexItem ].amount > 1) {
            let itemCart = cart;
            itemCart[ indexItem ].amount = itemCart[ indexItem ].amount - 1;
            itemCart[ indexItem ].total = itemCart[ indexItem ].total - products.price;

            setCart(itemCart);
            return;
            //
        }

        const filterItem = cart.filter((item) => item.id !== products.id);

        setCart(filterItem);
    }

    return (
        <CardContext.Provider value={{ cart, total, addItemCart, removeItemCart }}>
            {children}
        </CardContext.Provider>
    );
}
