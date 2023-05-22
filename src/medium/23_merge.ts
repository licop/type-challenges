// https://github.com/type-challenges/type-challenges/blob/main/questions/00599-medium-merge/README.zh-CN.md
// 将两个类型合并成一个类型，第二个类型的键会覆盖第一个类型的键。

type foo = {
  name: string;
  age: string;
}

type coo = {
  age: number;
  sex: string
}

type Merge<T, U> = {
  [K in keyof T | keyof U]: K extends keyof T ? T[K]
    : K extends keyof U ? U[K] : never
     
}


type Result = Merge<foo,coo>; // expected to be {name: string, age: number, sex: string}


export {}