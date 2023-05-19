// https://github.com/type-challenges/type-challenges/blob/main/questions/00119-medium-replaceall/README.zh-CN.md
// 实现 ReplaceAll<S, From, To> 将一个字符串 S 中的所有子字符串 From 替换为 To。


type ReplaceAll<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer R1}${From}${infer R2}`
  ? `${R1}${To}${ReplaceAll<R2, From, To>}`
  : S

type replaced = ReplaceAll<'t y p e s', ' ', ''> // 期望是 'types'


