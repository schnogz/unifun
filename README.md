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

`MUI Joy` - An intuitive component library that I find nicer to use than infinite length classlists you get with something like Tailwind.

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

### Wallet Guard HOC
I decided to wrap "authenticated" routes with a Higher Order Component that requires a wallet to be connected before 
continuing to most pages.  This is not the greatest idea in terms of drawing the user into the application and getting them 
to mint an NFT. However, given the time constraints, this made development easier and the code a bit cleaner as I could
always assume I have a connected wallet.

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

### Overall Design/Screen Responsiveness
I'm not a designer and many things within the app could be done better such as the sidebar, wallet connection status, 
NFT displays, etc. There are some mobile responsive issues as well, especially with tables.

### App Secrets
API keys and other sensitive data should be injected by a build system and not checked into repo.

## Feedback
I understand the reasoning for vague requirements, but I was sort of unsure on how close I was supposed to follow the 
Figma designs vs improvise and show creativity.  The instructions sort of wobble between which of those is the top priority
depending on which part of the instructions you are reading. 

That being said, I usually opted for uniqueness and creativity in many cases and I hope that does not adversely affect 
my overall grade.