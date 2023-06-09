// https://github.com/type-challenges/type-challenges/blob/main/questions/00016-medium-pop/README.zh-CN.md
// 实现一个通用Pop<T>，它接受一个数组T，并返回一个由数组T的前length-1项以相同的顺序组成的数组。

type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

type Pop<T extends any[]> = T extends [...infer R, infer _] ? R : never

type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2> // expected to be [3, 2]

export {}
