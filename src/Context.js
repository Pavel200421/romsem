import React, {createContext, useState} from 'react'
export const CustomContext = createContext();

export const Context = (props) => {
    const [cart, setCart] = useState([]);


    const addItem = (item) => {
        let idx = cart.findIndex((el) => el.title === item.title);
        if (idx >= 0) {
            cart[idx].count++;
            setCart([...cart])
        } else {
            setCart([...cart, {
                ...item, count: 1
            }])
        }
    };
    const plusOne = (item) => {

        let idx = cart.findIndex((el) => el.title === item.title);
            if (idx >= 0){
                setCart(cart.map((el)=> {
                    if (item.title === el.title){
                        return {...el, count : el.count + 1}
                    } else {
                        return el
                    }
                }))
            }else {
                setCart([...cart, {
                    ...item, count: 1
                }])
            }

    };
    const minOne = (item) => {
        if (item.count > 1){
            setCart(cart.map((el)=> {
                if (item.title === el.title){
                    return {...el, count : el.count - 1}
                }else {
                    return el
                }
            }))
        }else {
            setCart(cart.filter((el)=> {
                return el.title !== item.title
            }))

        }

    };
    const deleteItem = (item) => {
        setCart(cart.filter((el)=> {
            return el.title !== item.title
        }))
    };
    const value = {
      cart, addItem, plusOne, minOne, deleteItem

    };
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
};



