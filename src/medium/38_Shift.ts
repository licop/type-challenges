// 实现Array.shift

type Result = Shift<[3, 2, 1]> // [2, 1]


type Shift<T extends any[]> = T extends [infer R, ...infer U] ? [...U] : never

export {}
