// https://github.com/type-challenges/type-challenges/blob/main/questions/00009-medium-deep-readonly/README.zh-CN.md
// 实现一个通用的DeepReadonly<T>，它将对象的每个参数及其子对象递归地设为只读。

type X = { 
  x: { 
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Expected = { 
  readonly x: { 
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey' 
}

// 如何T不是对象就停止递归
type DeepReadonly<T> = keyof T extends never
  ? T
  : { readonly [k in keyof T]: DeepReadonly<T[k]> };

type Todo = DeepReadonly<X> // should be same as `Expected`

export {}