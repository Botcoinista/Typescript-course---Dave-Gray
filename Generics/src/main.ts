function getFirstElement<ElementType>(array: ElementType[]) {
    return array[0]
}

const numbers = [1, 2, 3]
const firstNumber = getFirstElement<number>(numbers)

const strings = ['hello', 'world']
const firstString = getFirstElement(strings)

console.log(firstNumber)


const input = document.querySelector<HTMLInputElement>("input")

input?.value



const a = [1, 2, 3]

a.map(() => {
    return "Hej"
})

const map = new Map<string, number >([["a", 1]])
map.set("a", 1)




type ApiResponse<Data extends object = { status: number }> = {
    data: Data
    isError: boolean
}

type UserResponse = ApiResponse<{ name: string; age: number }> 
type BlogResponse = ApiResponse<{ title: string }> 

const response: ApiResponse = {
    data: {
        status: 200,
        },
    isError: false
}

// const blogresponse: BlogResponse = {
//     data: {
//       title: "My first blog post"
//     },
//     isError: false
// }

// console.log(response.data.name, response.data.age)
// console.log(blogresponse.data.title)