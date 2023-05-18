// 在类型系统里实现通用的 Array.push 。
// https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.zh-CN.md

type Push<T extends any[], U> = [...T, U]

type Result = Push<[1, 2], '3'> // [1, 2, '3']

export {}
