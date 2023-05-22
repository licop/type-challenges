// 根据指定值筛选出符合的字段。

type OnlyBoolean = PickByType<
  {
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
  },
  boolean
> // { isReadonly: boolean; isEnable: boolean; }

// 映射类型的语法 [P in keyof T as ...]
// as 关键字表示在遍历过程中进行类型转换
// 例如，在 [P in keyof Person as "new_" + P] 中，as "new_" + P 表示在遍历过程中将属性名 P 转换为 "new_" + P 的形式，生成一个新的属性名。
type PickByType<T, U> = {
 [P in keyof T as T[P] extends U ? P : never]: T[P] 
}