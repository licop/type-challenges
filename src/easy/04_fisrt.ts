// 实现一个通用First<T>，它接受一个数组T并返回它的第一个元素的类型。
// https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.zh-CN.md


type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]
type arr3 = []

// type First<T extends any[]> = T extends [] ? never : T[0]
// type First<T extends any[]> = T extends [infer R, ...infer rest] ? R : never
type First<T extends any[]> = T['length'] extends 0 ? never : T[0] 

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
type head3 = First<arr3> // never

export {}