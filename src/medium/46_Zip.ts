// 合并两个数组，将两个数组都具有的项合并到同一项，其他的不要

type a = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]
type b = Zip<[1, 2, 3], ['1', '2']> //  [[1, '1'], [2, '2']]

type Zip<T extends any[], U extends any[]> = T extends [infer Pt, ...infer Rt]
  ? U extends [infer Pu, ...infer Ru]
    ? [[Pt, Pu], ...Zip<Rt, Ru>]
    : []
  : []

export {}
