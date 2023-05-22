// https://github.com/type-challenges/type-challenges/blob/main/questions/00298-medium-length-of-string/README.zh-CN.md
// 计算字符串的长度，类似于 String#length 。

type LengthOfString<
  S extends string,
  T extends string[] = []
> = S extends `${infer F}${infer R}`
  ? LengthOfString<R, [...T, F]>
  : T['length'];

  type length = LengthOfString<'licop'>

  export {}
  