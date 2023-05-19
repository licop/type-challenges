// https://github.com/type-challenges/type-challenges/blob/main/questions/00110-medium-capitalize/README.zh-CN.md
// 实现 Capitalize<T> 它将字符串的第一个字母转换为大写，其余字母保持原样。


type MyCapitalize<S extends string> = S extends `${infer x}${infer tail}` ? `${Uppercase<x>}${tail}` : S;

type capitalized = MyCapitalize<'hello world'> // expected to be 'Hello world'

