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
### Major Dependencies & Reasoning
`NextJs` - No real reason as most benefits of Next were not used.  However, it made the live demo deploy easy.

`MUI Joy` - An intuitive component library that I personally find nicer to use than libraries like Tailwind.

`Wagmi/Viem` - The 🐐's. The hooks allowed me to easily interact with contract functions, see gas prices, etc. and therefore
not have to implement a central state manager.

`RainbowKit` - Never used this before as last time I worked in Web3 space we rolled our own wallet connectors by hand. 
That was a nightmare and this worked out of the box and extremely well with Wagmi.

`React-Query` - The best fetch library on the planet.  Makes updating state, caching and re-fetching data easy!

### Alchemy RPC
Public RPCs are too unreliable when listening for contract events and/or querying historical chain data.
Alchemy exposes some nice NFT APIs that I used to fetch NFT metadata. I used a personal key for the API access.

I noticed some oddities when querying for new chain data from Alchemy (i.e. re-fetching collection after mint).
The shape of the data returned for the new transactions was not what was stated in the TS types. I'm assuming this is 
something with the way their chain data ingestion system works.

Due to limitation of API calls allowed for a free account, I had to also disable some nice auto re-fetching that react-query 
provides to ensure I did not burn all of my credits during development.

### SVG Animations
This was probably the most challenging part for me personally. I used a mix of CSS stylesheets and inline svg properties
to complete all the animations.  I'm sure there were probably better and more concise ways of completing this but overall 
I'm content with how it turned out.

I could not for the life of me get the minting SVG animation to start and end in the top center of the SVG path as per 
the designs. I will probably give it another attempt before I submit the project but wanted to leave this here regardless.

### NFT Transferring
I added the ability to transfer NFTs that a wallet owns to another address.  I was also going to add a 'Burn' option but 
ran out of time.

## If I had more time...
### Multi-Chain/Contract Scaling
The app is not positioned at all to scale to more chains and other types of contracts.  There are hard-codings of ABI's, 
contract addresses, chain data, etc. throughout the app.  Ideally this would not be the case in a full-blown NFT app.

### Minting Process
This is hobbled together with various hooks and imperfect ways of updating status. There are also side effects that upon 
mint completion results in multiple re-fetching of other data that could be done better.  Ideally this would be refactored 
not only be more DRY but also scalable with other contracts and scenarios.

### Lack of State Management
I think potentially many things could be improved upon (e.g. code duplication, overly tight coupling, non-DRY code) if 
there were a central state manager (Context, Redux, etc.) within the app. A few examples:
1. The minting process and reporting of status to various components is a bit messy and overly coupled. 
2. Fetching recent mint transactions is not great. It only updates when a mint occurs within the app (and is coupled too 
tightly with that process).  If I had better state management and more API calls, I would auto update that on an interval
using react-query built-ins, as well as re-fetching after a successful mint within the app.
3. Modals and Alerts are not implemented in a scalable fashion

### Pixel Peeping
There are a few parts of the app that do not respond well to small screen sizes (e.g. the recent mints table).
There are also a few issues with the minting animations such as the progress bar outline not exactly lining up with the 
border of the nft image as well as some ghost box shadows around the nft if you look really closely.

### More Tests
The most important parts of the app are very well tested. However, there is a lot of logic in the templates and layouts 
that is currently untested. There should be unit/integration tests for critical template logic within the app.

### App Secrets
API keys and other sensitive data should be injected by a build system and not checked into repo.