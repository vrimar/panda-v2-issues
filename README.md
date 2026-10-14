# Panda v2 issue repros

`@pandacss/dev` 2.2.0 with `@pandacss/preset-base` and `@pandacss/preset-panda`, TypeScript 7.0.2 (and 5.9.3, installed as `ts59`), ESLint 9.39.1.

```sh
pnpm install
pnpm exec panda codegen
```

| Issue | Command | File |
|---|---|---|
| `forwardProps` TS2590 | `pnpm exec tsc -p tsconfig.issue1.json` | `src/issue1.tsx` |
| Recipe-context types can't be named in `.d.ts` | `pnpm exec tsc -p tsconfig.issue2.json` | `src/issue2.tsx` |
| `no-invalid-token-paths` skips style values | `pnpm exec eslint src/issue3.jsx` and `pnpm exec panda cssgen --outfile out.css` | `src/issue3.jsx` |

For TypeScript 5.9.3, run `node node_modules/ts59/bin/tsc` in place of `pnpm exec tsc`.
