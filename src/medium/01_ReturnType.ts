// https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.zh-CN.md
// 获取函数返回类型

const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never

type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"