// 实现Object.entries

interface Model {
  name: string
  age: number
  locations: string[] | null
}

type ObjectEntries<T, K extends keyof T = keyof T> = K extends keyof T
  ? [K, T[K] extends undefined ? undefined : Exclude<T[K], undefined>]
  : never

type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];


