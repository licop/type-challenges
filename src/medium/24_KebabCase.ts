// FooBarBaz -> foo-bar-baz

type a = 'forBarBaz'

type KebabCase<S> = S extends `${infer R}${infer U}` ? `${Lowercase<R>}${U extends Uncapitalize<U> ? KebabCase<U> : `-${KebabCase<U>}`}` : S

type b = KebabCase<a> // for-bar-baz

export {}

