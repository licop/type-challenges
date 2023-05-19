// https://github.com/type-challenges/type-challenges/blob/main/questions/00020-medium-promise-all/README.zh-CN.md
// 键入函数PromiseAll，它接受PromiseLike对象数组，返回值应为Promise<T>，其中T是解析的结果数组。

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

// declare function PromiseAll<T extends any[]>(values: readonly [...T]):
//   Promise<{ [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K]}> ;

type Awaited<T> = T extends Promise<infer R> ? Awaited<R> : T

declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
  [P in keyof T]: Awaited<T[P]>
}>

// expected to be `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const)

export {}