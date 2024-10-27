# UniFun App

## Live Demo
[https://unifun.vercel.app/](https://unifun.vercel.app/)

## Getting Started

1. Install dependencies
```bash
npm install
# or
yarn
```

2. Start the development server

```bash
npm run dev
# or
yarn dev
```
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

HMR is enabled, so editing any file will cause the page to auto-update.


## Testing
Tests are written using [Jest](https://jestjs.io/). Test files must end in `*.spec.{js,jsx,ts,tsx}`.

```bash
npm run test
# or
yarn test
```

Test coverage can be viewed by running the tests and then viewing `./coverage/index.html`.

## App Overview
### Major Dependencies
`NextJs`, `MUI Joy`, `Wagmi`, `Viem`, `RainbowKit`, `React-Query`

### Alchemy RPC
Public RPCs are too unreliable when listening for contract events and/or querying historical chain data.
Alchemy exposes some nice NFT APIs that I used to fetch NFT metadata. I used a personal key for the API access.

### NFT Minting/Transferring
This app is able to both mint and transfer Uniswap's ERC721 NFT on the Sepolia testnet.
