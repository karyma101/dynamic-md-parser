# Typescript

Typescript is a superset of Javascript that compiles to plain javascript.

```
  tsc --init
  // Generates a typescript config file
```

## Basic Types

```typescript
any
void

boolean
string
number

null
undefined

// Arrays
number[]
Array<nunber>

// Tuple
[string, number]

string | null | undefined // Union

never
```

## Declarations

```TS
let isDone: boolean
let isDone: boolean = false
function add (a: number, b: number): number {
  return a + b
}

// Return type is optional
function add (a: number, b: number) { ... }
```
