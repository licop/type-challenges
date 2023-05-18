// https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.zh-CN.md
// 在类型系统里实现 JavaScript 的 Array.includes 方法，这个类型接受两个参数，返回的类型要么是 true 要么是 false。

type Includes<T extends any[], U> = {[P in T[number]] : true}[U] extends true ? true : false

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
