// https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.zh-CN.md
// 在 TypeScript 中，Awaited<T> 是一个内置的类型别名，用于获取一个 Promise 类型的值的 resolved 值的类型。

type ExampleType = Promise<string>

type MyAwaited<T> = T extends Promise<infer R> ? R : T;

type Result = MyAwaited<ExampleType> // string


// Awaited使用案例
function fetchData(): Promise<{ name: string }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: 'Alice' });
    }, 1000);
  });
}

type PromiseResult = Awaited<ReturnType<typeof fetchData>> // { name: string }

export {}