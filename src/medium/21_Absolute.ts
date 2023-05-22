// https://github.com/type-challenges/type-challenges/blob/main/questions/00529-medium-absolute/README.zh-CN.md
// 实现一个接收string,number或bigInt类型参数的Absolute类型,返回一个正数字符串。

type Test = -100;

type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer U}` ? U : `${T}`

type Result = Absolute<Test>; // expected to be "100"

export {}