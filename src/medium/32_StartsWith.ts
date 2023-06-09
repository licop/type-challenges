// 实现StartsWith<T, U>,接收两个 string 类型参数,然后判断T是否以U开头,根据结果返回true或false

type a = StartsWith<'abc', 'ac'> // expected to be false
type b = StartsWith<'abc', 'ab'> // expected to be true
type c = StartsWith<'abc', 'abcd'> // expected to be false

type StartsWith<T extends string, U extends string> = T extends `${U}${infer R}` ? true : false

type EndsWith<T extends string, U extends string> = T extends `${infer R}${U}` ? true : false

export {}