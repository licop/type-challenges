// 根据给定值对数组执行 Flatten 操作，默认 Flatten 一层

type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1

type needFlatten<T extends any[]> = T extends [infer U, ...infer R] ? (U extends any[] ? true : needFlatten<R>) : false

type Flatten<T extends any[]> = T extends [infer U, ...infer R] ? (U extends any[] ? [...U, ...Flatten<R>] : [U, ...Flatten<R>]) : []

type FlattenDepth<T extends any[], U extends number = 1, arr extends any[] = []> = needFlatten<T> extends false
  ? T
  : arr['length'] extends U
  ? T
  : FlattenDepth<Flatten<T>, U, [...arr, any]>

  export {}