// https://github.com/type-challenges/type-challenges/blob/main/questions/00191-medium-append-argument/README.zh-CN.md
// 实现一个泛型 AppendArgument<Fn, A>，对于给定的函数类型 Fn，以及一个任意类型 A，返回一个新的函数 G。
// G 拥有 Fn 的所有参数并在末尾追加类型为 A 的参数。

type Fn = (a: number, b: string) => number

// type AppendArgument<Fn extends (...args: any) => any, A> = Fn extends (...arg: infer P) => infer R ? (...arg: [...P, A]) => R : never

type AppendArgument<Fn extends (...args: any) => any, Type> = (...args: [...Parameters<Fn>, Type]) => ReturnType<Fn>


type Result = AppendArgument<Fn, boolean> 
// 期望是 (a: number, b: string, x: boolean) => number

export {}
