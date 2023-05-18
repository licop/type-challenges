// https://github.com/type-challenges/type-challenges/blob/main/questions/00008-medium-readonly-2/README.zh-CN.md

// 实现一个通用MyReadonly<T, K>, 则应使所有属性都变为只读，就像普通的Readonly<T>一样。

interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyReadonly<T,K extends keyof T> = {
  readonly [P in K]: T[P]
} & Omit<T, K>

const todo: MyReadonly<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

// / todo.title = "Hello" // Error: cannot reassign a readonly property
// / todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK