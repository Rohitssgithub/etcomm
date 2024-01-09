const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let { id, color, amount, product } = action.payload;
        console.log(state.cart)

        let existingProduct = state.cart.find((ele) => {
            return ele.id === id + color
        })
        // console.log('existingProduct', existingProduct)
        if (existingProduct) {
            let updateitem = state.cart.map((curele) => {
                console.log(curele)
                if (curele.id === id + color) {
                    console.log(curele)
                    let newAmount = curele.amount + amount
                    return {
                        ...curele,
                        amount: newAmount
                    }
                }
                else {
                    return curele
                }
            })
            return {
                ...state,
                cart: updateitem
            }
        }
        else {
            let cartProduct = {
                id: id + color,
                name: product.name,
                color,
                amount,
                image: product.image[0].url,
                price: product.price,
                max: product.stock,
            };
            return {
                ...state,
                cart: [...state.cart, cartProduct],

            };

        }

    }

    if (action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter((ele) => {
            return ele.id !== action.payload
        })
        console.log(updatedCart)

        return {
            ...state,
            cart: updatedCart
        }
    }
    if (action.type === "SET_DECREMENT") {
        let updatedProductamout = state.cart.map((curElem) => {
            if (curElem.id === action.payload) {
                let decamount = curElem.amount - 1

                if (decamount <= 1) {
                    decamount = 1
                }

                return {
                    ...curElem,
                    amount: decamount
                }
            }
            else {
                return curElem;
            }
        })
        return {
            ...state,
            cart: updatedProductamout
        }
    }

    if (action.type === "SET_INCREMENT") {
        console.log('action.payload', action.payload)
        let updatedProduct = state.cart.map((curElem) => {
            console.log(curElem)
            if (curElem.id === action.payload) {
                let incAmount = curElem.amount + 1;
                if (incAmount >= curElem.max) {
                    incAmount = curElem.max;
                }

                return {
                    ...curElem,
                    amount: incAmount,
                };
            }
            else {
                return curElem;
            }
        });
        console.log('updatedProduct', updatedProduct)
        return { ...state, cart: updatedProduct };
    }

    if (action.type === 'ADD_ITEM_TOTAL') {
        console.log(state.cart)
        let { total_item, total_price } = state.cart.reduce((accum, curElem) => {
            console.log(curElem)
            let { amount, price } = curElem
            accum.total_item += amount;
            accum.total_price += amount * price;
            return accum
        }, {
            total_price: 0,
            total_item: 0
        })
        return {
            ...state,
            total_item: total_item,
            total_price: total_price
        }
    }
    if (action.type === 'CLEAR_CART') {
        return {
            ...state,
            cart: []
        }
    }
    return state
}
export default cartReducer