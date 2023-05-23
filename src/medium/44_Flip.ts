// 反转对象的 key 和 value

type Flip<T extends {[key: PropertyKey]: any}> = {
  [P in keyof T as `${T[P]}`]: P
}

type flip1 = Flip<{ a: "x", b: "y", c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
type flip2 = Flip<{ a: 1, b: 2, c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
type flip3 = Flip<{ a: false, b: true }>; // {false: 'a', true: 'b'}


export {}
