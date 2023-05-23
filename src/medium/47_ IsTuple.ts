type case1 = IsTuple<[number]> // true
type case2 = IsTuple<readonly [number]> // true
type case3 = IsTuple<number[]> // false


type IsTuple<T> = [T] extends [never] ? false : T extends [any] | [] | readonly [any] ? true : false


export {}