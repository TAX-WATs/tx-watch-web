# stellar-txwatch-web

Web dashboard for Stellar TxWatch — register contracts and manage real-time alert rules.

Part of the [Tx-wat](https://github.com/Tx-wat) GitHub org.

## What it does

- **Register** Soroban contracts on Mainnet, Testnet, or Futurenet
- **Configure** alert rules: large transfers, function calls, admin actions, failed transactions
- **Receive** instant webhook payloads when rules fire
- **Monitor** delivery history and alert logs per contract

## Tech stack

| | |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Wallet | Freighter (Stellar identity) |
| Blockchain | `@stellar/stellar-sdk` + Horizon API |

## Getting started

```bash
git clone https://github.com/Tx-wat/stellar-txwatch-web
cd stellar-txwatch-web
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Install the [Freighter wallet extension](https://www.freighter.app/) to enable contract registration.

## Project structure

```
app/
  page.tsx                  # Landing page
  dashboard/page.tsx        # Stats + contract grid
  contracts/
    page.tsx                # Contract list
    new/page.tsx            # Add contract form
    [id]/page.tsx           # Contract detail + alert history
components/
  ContractCard.tsx          # Contract summary card
  RuleBuilder.tsx           # Alert rule configuration UI
  WebhookLog.tsx            # Webhook delivery history table
  NetworkBadge.tsx          # Mainnet/Testnet/Futurenet badge
  AlertRuleBadge.tsx        # Rule type display badge
  FreighterConnect.tsx      # Wallet connection button
  EmptyState.tsx            # Empty list placeholder
lib/
  stellar.ts                # Horizon + Soroban RPC helpers
  storage.ts                # localStorage contract registry
  api.ts                    # Fetch wrapper + test webhook
types/
  index.ts                  # Shared types (mirrors core Rust structs)
```

## Environment variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_API_URL` | Base URL of the txwatch-core API (optional) |

## Sister repos

- [stellar-txwatch-core](https://github.com/Tx-wat/stellar-txwatch-core) — Rust monitoring engine
- [stellar-txwatch-contracts](https://github.com/Tx-wat/stellar-txwatch-contracts) — Soroban smart contracts

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

MIT
