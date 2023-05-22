// 实现Array.reverse

type a = Reverse<['a', 'b']> // ['b', 'a']
type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']

type Reverse<T extends any[]> = T extends [...infer R, infer U] ? [U, ...Reverse<R>] : T

export {}