import { useContext } from 'react';
import ListContext, { ListContextType } from '../contexts/ListContext';

const List = <T,>() => {
    // Consume the context using useContext hook
    const { items, render } = useContext<ListContextType<T>>(ListContext); 

    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {render(item)}
                </li>
            ))}
        </ul>
    );
};


export default List;
