# Problem

This repository is a minimal example using `typescript` and `styled-components` which generates the below error during compilation.
The error doesn't occur when downgrading to version below `3.9.0-dev.20200229`.

```
src/index.tsx:9:4 - error TS2745: This JSX tag's 'children' prop expects type 'never' which requires multiple children, but only a single child was provided.

9   <Item2>
     ~~~~~

src/index.tsx:9:4 - error TS2769: No overload matches this call.
  This JSX tag's 'children' prop expects type 'never' which requires multiple children, but only a single child was provided.
  This JSX tag's 'children' prop expects type 'never' which requires multiple children, but only a single child was provided.

9   <Item2>
     ~~~~~



Found 2 errors.
```

# Steps to reproduce

`npm install && npm run build`
