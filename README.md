# Panda v2 issue repros

`@pandacss/dev` 2.2.0, TypeScript 7.0.2 (`tsc`) and 5.9.3 (`ts59`), ESLint 9.39.1.

```sh
pnpm install
pnpm codegen
```

| Issue | Commands | File |
|---|---|---|
| `forwardProps` TS2590 | `pnpm issue1`, `pnpm issue1:ts59` | `src/issue1.tsx` |
| Recipe-context types can't be named in `.d.ts` | `pnpm issue2`, `pnpm issue2:ts59` | `src/issue2.tsx` |
| `no-invalid-token-paths` skips style values | `pnpm issue3`, `pnpm issue3:css` | `src/issue3.jsx` |
