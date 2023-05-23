type exp1 = Chunk<[1, 2, 3], 2> // expected to be [[1, 2], [3]]
type exp2 = Chunk<[1, 2, 3], 4> // expected to be [[1, 2, 3]]
type exp3 = Chunk<[1, 2, 3], 1> // expected to be [[1], [2], [3]]


type Chunk<T extends any[], N extends number, U extends any[] = []> = T extends [infer P, ...infer R]
  ? U['length'] extends N
    ? [U, ...Chunk<T, N>]
    : Chunk<R, N, [...U, P]>
  : U extends []
  ? []
  : [U]

export {}