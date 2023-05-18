// 实现内置的 Parameters 类型
// https://github.com/type-challenges/type-challenges/blob/main/questions/03312-easy-parameters/README.zh-CN.md

const foo = (arg1: string, arg2: number): void => {}

type MyParameters<T extends (...args: any) => any> = T extends (...args: infer R) => any ? R : never  

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]