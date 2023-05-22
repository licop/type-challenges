// 返回一个反转了参数的函数类型

type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>
// (arg0: boolean, arg1: number, arg2: string) => void

type Reverse<T extends any[]> = T extends [...infer R, infer U] ? [U, ...Reverse<R>] : T


type FlipArguments<T extends (...arg: any[]) => any> = T extends (...arg: infer R) => infer S ? (...arg: Reverse<R>) => S : T
