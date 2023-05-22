// https://github.com/type-challenges/type-challenges/blob/main/questions/00459-medium-flatten/README.zh-CN.md
// 在这个挑战中，你需要写一个接受数组的类型，并且返回扁平化的数组类型。

type Flatten<S extends any[], T extends any[] = []> =  S extends [infer X, ...infer Y] ? X extends any[] ?
  Flatten<[...X, ...Y], T> : Flatten<[...Y], [...T, X]> 
  : T

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
