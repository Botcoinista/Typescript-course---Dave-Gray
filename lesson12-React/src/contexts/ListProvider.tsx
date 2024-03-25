import React, { ReactNode } from 'react';
import ListContext  from './ListContext';

interface ListProviderProps<T> {
    children: ReactNode;
    items: T[];
    render: (item: T) => ReactNode;
}

export const ListProvider: React.FC<ListProviderProps<any>> = ({ children, items, render }) => {
    return <ListContext.Provider value={{ items, render }}>{children}</ListContext.Provider>;
};
