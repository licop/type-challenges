// https://github.com/type-challenges/type-challenges/blob/main/questions/00527-medium-append-to-object/README.zh-CN.md
// 实现一个为接口添加一个新字段的类型。该类型接收三个参数，返回带有新字段的接口类型。

type Test = { id: '1' }

type AppendToObject<T extends Record<string, any>, U extends string, V extends any> = {
  [K in keyof T | U]: K extends keyof T ? T[K] : U
} 

type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }


export {}