import { createContext, ReactElement, useState, useEffect } from "react"

export type ProductType = {
    sku: number
    name: string
    price: number
} 

const initState: ProductType[] = []

// const initState: ProductType[] = [
//     {
//         "sku": 1,
//         "name": "Product 1",
//         "price": 100
//     },
//     {
//         "sku": 2,
//         "name": "Product 2",
//         "price": 200
//     },
//     {
//         "sku": 3,
//         "name": "Product 3",
//         "price": 300
//     }
// ]

export type UseProductsContextType = { products: ProductType[] }

const initContextState: UseProductsContextType = { products: [] }

const ProductsContext = createContext<UseProductsContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const ProductsProvider = ({ children }: ChildrenType): ReactElement =>  {
    const [products, setProducts] = useState<ProductType[]>(initState)

    useEffect(() => {
        const fetchProducts = async (): Promise<ProductType[]> => {
            const data = await fetch('https://localhost:3000/products')
            .then(response => {
                return response.json()
            }).catch(error => {
                if (error instanceof Error) console.error(error.message)
            })
            return data
        }

        fetchProducts().then(products => setProducts(products)) 
    },[])

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContext
