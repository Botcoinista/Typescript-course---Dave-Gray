import { useState, useEffect, useCallback, MouseEvent, KeyboardEvent, useMemo, useRef } from "react"

interface User {
  id: number
  username: string
}

type fibFunc = (n: number) => number 

const fib: fibFunc = (n) => {
  if (n < 2) return n
  return fib(n - 1) + fib(n - 2)
}

const myNum: number = 37

const App = () => {
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User[] | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  console.log(inputRef?.current)
  console.log(inputRef?.current?.value)

  // useEffect is a hook that allows you to perform side effects in function components
  // In this case we use it when users changes
  useEffect(() => {
   console.log("mounting")
   console.log("users", users)

   return () => {
      console.log("unmounting")
    }
  }, [users])

  // Be sure to add the event type to the function! Otherwise, TypeScript will throw an error and its type will be inferred as any
  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => {
    setCount(prev => prev + 2)
  }
  , [])

  const result = useMemo(() => fib(myNum), [myNum])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>{result}</h2>
      <input ref={inputRef} type="text" />
    </div>
  )
}

export default App