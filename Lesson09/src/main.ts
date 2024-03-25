// Utility Types

// Partial

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean,
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return {...assign, ...propsToUpdate}
}

const assign1: Assignment = {
    studentId: 'josrei01',
    title: 'Final Project',
    grade: 0,
}


console.log(updateAssignment(assign1, { grade: 95 }))

const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 })


// Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to database etc 
    return assign
}

const assignVerified: Readonly<Assignment> = {
    ...assignGraded, verified: true
}


recordAssignment({...assignGraded, verified: true})

//Record
const hexColorMap: Record<string, string> = {
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff',
}

type Students = "Laura" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
    Laura: "A",
    Kelly: "U",
}


interface Grades {
    assign1: number,
    assign2: number,
}

const gradeData: Record<Students, Grades> = {
    Laura: { assign1: 95, assign2: 90 },
    Kelly: { assign1: 76, assign2: 15 },
}


// Pick and Omit

type AssignResult = Pick<Assignment, 'studentId' | 'grade'>

const score: AssignResult = {
    studentId: 'josrei01',
    grade: 95,
}

type AssignPreview = Omit<Assignment, 'grade' | 'verified'>

const preview: AssignPreview = {
    studentId: 'josrei01',
    title: 'Final Project',
}


// Exclude and Extract

type adjustedGrade = Exclude<LetterGrades, "U">

type highGrades = Extract<LetterGrades, "A" | "B">

// NonNullable

type AllPosibleGrades = "Josef" | "erica" | "Jamie" | null | undefined

type NamesOnly = NonNullable<AllPosibleGrades>

// ReturnType 

// type newAssign = { title: string, points: number }

const createNewAssign = (title: string, points: number) => {
    return { title, points }
}

type newAssign = ReturnType<typeof createNewAssign>


// Parameters

type AssignParams = Parameters<typeof createNewAssign> 

const assignArgs: AssignParams = ['generics', 100]

const tsAssign2: newAssign = createNewAssign(...assignArgs)
console.log(tsAssign2)

// Awaited - helps us with the returnType of a promise

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}

const fetchUsers = async (): Promise<User[]> => {

    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
        console.log(res)
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}

type FetchUsersReturnType = ReturnType<typeof fetchUsers >

fetchUsers().then(users => console.log(users))
