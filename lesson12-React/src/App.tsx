import Heading from './components/Heading'
import Section  from './components/Section'
import Counter from './components/Counter'
import List from './components/List'
import { ListProvider } from './contexts/ListProvider'

import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState<number>(1)
  
  return (
    <ListProvider items={["Coffe", "Tacos", "Code"]} render={(item: string) => <span className='gold'>{item}</span>}>
    <Heading title={"Hello"} />
     <Section title={"Different Title"}>This is my Section.</Section>
     <Counter setCount={setCount}>Count is {count}</Counter>
     <List />
    </ListProvider>
  )
}

export default App