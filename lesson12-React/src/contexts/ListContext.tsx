import { createContext, ReactNode } from 'react';

export interface ListContextType<T> {
    items: T[];
    render: (item: T) => ReactNode;
}


const ListContext = createContext<ListContextType<any>>({
    items: [],
    render: () => null,
});

export default ListContext;


