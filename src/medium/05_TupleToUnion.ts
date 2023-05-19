// https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.zh-CN.md
// 实现泛型TupleToUnion<T>，它返回元组所有值的合集。

type Arr = ['1', '2', '3']

// type TupleToUnion<T extends any[]> = T[number]
type TupleToUnion<T extends any[]> = T extends Array<infer R> ? R : never

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'

export {}