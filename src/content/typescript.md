# Typescript

```
  tsc --init
  // Generates a typescript config file
```

## Basic Types

```Typescript
any
void

boolean
string
number

null
undefined

string[] // Array<string>
[string, number] // Tuple

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
