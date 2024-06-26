import { createContext, ReactElement, useMemo, useReducer } from "react"

export type CartItemType = {
    sku: number
    name: string
    price: number
    quantity: number
}


type CartStateType = { 
    cart: CartItemType[] 
    totalPrice?: number
    shippingInfo?: {
        address: string
        city: string
        country: string
    }
}

const initCartState: CartStateType = { cart: [], }

const REDUCER_ACTION_TYPE = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    QUANTITY: "QUANTITY",
    SUBMIT: "SUBMIT",
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE

// Payload is the items to be added to the cart, removed from the cart, or updated in the cart
export type ReducerAction = {
    type: string,
    payload?: CartItemType,
}

const reducer = (state: CartStateType, action: ReducerAction): CartStateType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.ADD: {
            if (!action.payload) {
                throw new Error("action.payload missing in ADD action")
            }
            const { sku, name, price } = action.payload

            const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku)

            const itemExists: CartItemType | undefined = state.cart.find(item => item.sku === sku)

            const quantity: number = itemExists ? itemExists.quantity + 1 : 1
            return { ...state, cart: [ ...filteredCart, { sku, name, price, quantity }]
            }
        }
        case REDUCER_ACTION_TYPE.QUANTITY: {
            if (!action.payload) {
                throw new Error("action.payload missing in QUANTITY action")
            }

            const { sku, quantity } = action.payload

            const itemExists: CartItemType | undefined = state.cart.find(item => item.sku === sku)
            
            if (!itemExists) {
                throw new Error("Item does not exist in cart")
            }

            const updatedItem: CartItemType = { ...itemExists, quantity }
            
            const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku)
          
            return { ...state, cart: [ ...filteredCart, updatedItem ] }
        }
        case REDUCER_ACTION_TYPE.REMOVE: {
            if (!action.payload) {
                throw new Error("action.payload missing in REMOVE action")
            }
            const { sku } = action.payload

            const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku)

            return { ...state, cart: [...filteredCart] }
        }
        case REDUCER_ACTION_TYPE.SUBMIT: {
            return { ...state, cart: [] }
            break
        }
        default :
        throw new Error("Unidentified reducer action type")
    }
}

const useCartContext = (initCartState: CartStateType) =>  {
    const [state, dispatch] = useReducer(reducer, initCartState)

    const REDUCER_ACTIONS = useMemo(() => {
        return REDUCER_ACTION_TYPE
        }, [])

        const totalItems: number = state.cart.reduce((previousValue, cartItem) => {
            return previousValue + cartItem.quantity
        }, 0)

        const totalPrice = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(state.cart.reduce((previousValue, cartItem) => {
            return previousValue + (cartItem.price * cartItem.quantity)
        }, 0))

        const cart = state.cart.sort((a, b) => {
            const itemA = Number(a.sku)
            const itemB = Number(b.sku)
            return itemA - itemB
        })

        return { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart}
}

export type UseCartContextType = ReturnType<typeof useCartContext>

const initCartContextState: UseCartContextType = {
    dispatch: () => {},
    REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
    totalItems: 0,
    totalPrice: '',
    cart: [],
}

export const CartContext = createContext<UseCartContextType>(initCartContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
    return (
        <CartContext.Provider value={useCartContext(initCartState)}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext