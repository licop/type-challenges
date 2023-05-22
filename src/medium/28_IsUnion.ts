// 判断是否为联合类型

type case1 = IsUnion<string> // false
type case2 = IsUnion<string | number> // true
type case3 = IsUnion<[string | number]> // false

// 判断 T, K 之间是否存在交集，如果存在交集则是联合类型
type IsUnion<T, K = T> = [T] extends [never] ? false : T extends K ? ([K] extends [T] ? false : true) : never
 