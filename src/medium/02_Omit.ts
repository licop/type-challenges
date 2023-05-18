// https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.zh-CN.md
// 实现Omit

interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyOmit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P]
}

type TodoPreview = Omit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}


export {}