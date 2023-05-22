// 从字符串中剔除指定字符

type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'

type DropChar<S, C> = S extends `${infer R}${infer U}` ? `${R extends C ? '' : R}${DropChar<U, C>}` : S
