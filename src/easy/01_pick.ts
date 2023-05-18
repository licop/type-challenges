// 实现pick
// https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.zh-CN.md

interface Todo {
  title: string
  description: string
  completed: boolean
}

// keyof: 取interface的键后保存为联合类型
// in: 取联合类型的值，主要用于数组和对象的构建
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}

export {}