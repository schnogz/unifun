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

`Wagmi` - The 🐐. The hooks allowed me to easily interact with contract functions and not have to implement a central state manager.

`RainbowKit` - Never used this before as last time I worked in Web3 space we rolled our own wallet connectors by hand. 
That was a nightmare and this worked out of the box and extremely well with Wagmi.

`React-Query` - The best fetch library on the planet.  Makes updating state, caching and re-fetching data easy!

### Alchemy RPC
Public RPCs are too unreliable when listening for contract events and/or querying historical chain data.
Alchemy exposes some nice NFT APIs that I used to fetch NFT metadata. I used a personal key for the API access.

I noticed some oddities when querying for new chain data from Alchemy (i.e. re-fetching collection after mint).
The shape of the data returned for the new transactions was not what was stated in their types. I'm assuming this is 
something with their chain data ingestion system and DB.  

### SVG Animations
This was probably the most challenging part for me personally. I used a mix of CSS stylesheets and inline svg properties
to complete all the animations.  I'm sure there were probably better and more concise ways of completing this but overall 
I'm content with how it turned out.

I could not for the life of me get the minting SVG animation to start and end in the top center of the SVG path as per 
the designs. I will probably give it another attempt before I submit the project but wanted to leave this here regardless.

## If I had more time...
### Multi-Chain/Contract Scaling
The app is not positioned at all to scale to more chains and other types of contracts.  There are hard-codings of ABI's, 
contract addresses, chain data, etc. throughout the app.  Ideally this would not be the case in a full-blown NFT app.

### Minting Process
This is hobbled together with various hooks and imperfect ways of updating status. It is also responsible for popping 
the Confetti upon completion which it should have no business of doing.  Ideally this would be refactored to be more DRY 
and scalable with other contracts.

### Lack of State Management
I think potentially many things could be improved upon (e.g. code duplication, over tight coupling, non-DRY code) if 
there were a central state manager (Context, Redux, etc.) within the app. A few examples:
1. The minting process and reporting of status to various components is a mess and overly coupled. 
2. Re-fetching recent mint transactions are overly coupled with mint success in component that should not have to manage that interaction
3. Modals and Alerts are not implemented in a scalable fashion

### Pixel Peeping
There are a few parts of the app that do not respond well to small screen sizes (e.g. the recent mints table).
There are also a few issues with the minting animations such as the progress bar outline not exactly lining up with the 
border of the nft image.

### More Tests
Many parts of the app are left untested.  There should be unit/integration tests for anything critical within the app.

### App Secrets
API keys and other sensitive data should be injected by a build system and not checked into repo.