import { useContext } from 'react';
import ListContext from '../contexts/ListContext';

export const useListContext = () => useContext(ListContext);

export const useCounter = () => {
    const context = useContext(CounterContext);
    if (!context) {
        throw new Error('useCounter must be used within a CounterProvider');
    }
    return context;
};