// https://github.com/type-challenges/type-challenges/blob/main/questions/00531-medium-string-to-union/README.zh-CN.md
// 实现一个将接收到的String参数转换为一个字母Union的类型。

type Test = '123';

type StringToUnion<T extends string> = T extends `${infer L}${infer Rest}` ? L |  StringToUnion<Rest> : never

type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"

export {}