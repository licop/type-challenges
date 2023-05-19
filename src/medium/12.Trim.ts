// https://github.com/type-challenges/type-challenges/blob/main/questions/00108-medium-trim/README.zh-CN.md
// 实现Trim<T>，它是一个字符串类型，并返回一个新字符串，其中两端的空白符都已被删除。


type Space = ' ' | '\n' | '\t'
type Trim<T extends string> = T extends `${Space}${infer R}` | `${infer R}${Space}` ? Trim<R> : T

type trimed = Trim<' Hello World  '> // expected to be 'Hello World'

export {}

