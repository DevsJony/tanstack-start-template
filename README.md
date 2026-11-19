# TanStack Start template

[TanStack Start](https://tanstack.com/start) + Tailwind CSS 4 + shadcn/ui + React Compiler, deployed to Cloudflare Workers.

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm type-check   # tsc + eslint
pnpm deploy       # build + wrangler deploy
```

Remember to change `name` in `wrangler.jsonc` and run `pnpm cf-typegen` after editing bindings.
