// https://github.com/type-challenges/type-challenges/blob/main/questions/00296-medium-permutation/README.zh-CN.md
// 实现联合类型的全排列，将联合类型转换成所有可能的全排列数组的联合类型。

// 参考别人的答案
type Permutation<T, K=T> =
    [T] extends [never]
      ? []
      : K extends K
        ? [K, ...Permutation<Exclude<T, K>>]
        : never

type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']


// 希望基于 A 再构造一个类型 B，值为 A 中每一项对应的元组，也就是 [1] | [2] | [3]
type A = 1 | 2 | 3
// 用于遍历联合类型的固定模式
// 构造一个泛型类型作为中间映射函数（因为分布式条件类型只有在泛型 + 条件判断时才生效）
type MyMap<T> = T extends T ? [T] : never

type B = MyMap<A> // [1] | [2] | [3]


export {}

// 代码解析参考 https://juejin.cn/post/7165170011282079751#heading-15
