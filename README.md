# mehdi-dehghani.ir

Personal research site of **Mehdi Dehghani Firoozabadi**.

- Site: [http://mehdi-dehghani.ir](http://mehdi-dehghani.ir) (HTTPS on the origin; public HTTPS after Arvan edge SSL)
- Alias: `mehdeh.ir` → 301 to the canonical domain
- Stack: Next.js 15 + TypeScript + Tailwind v4 + next-intl (no backend)
- Plan: [`PLAN.md`](./PLAN.md)

## Develop

```bash
cd /home/mehdi/repos/mehdi-dehghani.ir
npm install
npm run dev
```

App: `http://127.0.0.1:3002` — English at `/en`, Persian at `/fa`.

Content lives in `content/`. UI chrome strings live in `messages/`.

## Deploy

```bash
bash deploy/deploy.sh
```

Production path: `/home/mehdi/sites/mehdi-dehghani.ir/`  
systemd: `mehdi-dehghani-next` on `127.0.0.1:3002`

## GitHub

```
git@github.com:mehdeh/mehdi-dehghani.ir.git
```
