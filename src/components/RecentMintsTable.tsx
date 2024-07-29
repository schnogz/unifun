import { Typography, Table } from '@mui/joy'

import { truncateAddress } from '@/utils/address'

const mockResponse = {
  ownedNfts: [
    {
      acquiredAt: {
        blockNumber: null,
        blockTimestamp: null,
      },
      balance: '1',
      collection: null,
      contract: {
        address: '0xc3D8457B3d0996E3210E518A9744c17277663d2F',
        contractDeployer: '0x3bAD7aA9dE2baAf2Bf6974F60E3Ff09255b70e1d',
        deployedBlockNumber: 4863976,
        isSpam: null,
        name: 'UniFun',
        openSeaMetadata: {
          bannerImageUrl: null,
          collectionName: null,
          collectionSlug: null,
          description: null,
          discordUrl: null,
          externalUrl: null,
          floorPrice: null,
          imageUrl: null,
          lastIngestedAt: null,
          safelistRequestStatus: null,
          twitterUsername: null,
        },
        spamClassifications: [],
        symbol: 'UNIFUN',
        tokenType: 'ERC721',
        totalSupply: null,
      },
      description: 'Uniswap, Unifun!',
      image: {
        cachedUrl: 'https://ipfs.io/ipfs/QmdVHTDaxXEdDYr5aUCLJaQNY37qyajFAXrJFFTEpLuzvz',
        contentType: null,
        originalUrl: 'https://ipfs.io/ipfs/QmdVHTDaxXEdDYr5aUCLJaQNY37qyajFAXrJFFTEpLuzvz',
        pngUrl: null,
        size: null,
        thumbnailUrl: null,
      },
      mint: {
        blockNumber: 5846310,
        mintAddress: '0xc3d8457b3d0996e3210e518a9744c17277663d2f',
        timestamp: '2024-05-06T04:43:48Z',
        transactionHash: '0x3a2f9588847b8683e0929f74d6d5867b5166304671fd58734a8337d221c1d5aa',
      },
      name: 'Unifun',
      owners: null,
      raw: {
        error: null,
        metadata: {
          attributes: [
            {
              trait_type: 'Fun',
              value: 'Yes',
            },
          ],
          description: 'Uniswap, Unifun!',
          image: 'https://gateway.pinata.cloud/ipfs/QmdVHTDaxXEdDYr5aUCLJaQNY37qyajFAXrJFFTEpLuzvz',
          name: 'Unifun',
        },
        tokenUri:
          'https://gateway.pinata.cloud/ipfs/QmNuScBxB2efPASax26pTk7B6UK1U3aejbLJCq3kiQexkc',
      },
      timeLastUpdated: '2024-07-28T23:36:41.232Z',
      tokenId: '1489',
      tokenType: 'ERC721',
      tokenUri: 'https://ipfs.io/ipfs/QmNuScBxB2efPASax26pTk7B6UK1U3aejbLJCq3kiQexkc',
    },
    {
      acquiredAt: {
        blockNumber: null,
        blockTimestamp: null,
      },
      balance: '1',
      collection: null,
      contract: {
        address: '0xc3D8457B3d0996E3210E518A9744c17277663d2F',
        contractDeployer: '0x3bAD7aA9dE2baAf2Bf6974F60E3Ff09255b70e1d',
        deployedBlockNumber: 4863976,
        isSpam: null,
        name: 'UniFun',
        openSeaMetadata: {
          bannerImageUrl: null,
          collectionName: null,
          collectionSlug: null,
          description: null,
          discordUrl: null,
          externalUrl: null,
          floorPrice: null,
          imageUrl: null,
          lastIngestedAt: null,
          safelistRequestStatus: null,
          twitterUsername: null,
        },
        spamClassifications: [],
        symbol: 'UNIFUN',
        tokenType: 'ERC721',
        totalSupply: null,
      },
      description: 'Uniswap, Unifun!',
      image: {
        cachedUrl: 'https://ipfs.io/ipfs/QmdVHTDaxXEdDYr5aUCLJaQNY37qyajFAXrJFFTEpLuzvz',
        contentType: null,
        originalUrl: 'https://ipfs.io/ipfs/QmdVHTDaxXEdDYr5aUCLJaQNY37qyajFAXrJFFTEpLuzvz',
        pngUrl: null,
        size: null,
        thumbnailUrl: null,
      },
      mint: {
        blockNumber: 5846388,
        mintAddress: '0xc3d8457b3d0996e3210e518a9744c17277663d2f',
        timestamp: '2024-05-06T05:00:36Z',
        transactionHash: '0x850ce5cc3cf26fe872aeb32552e1f6e7fa7c69c140672d292390ac2c6c3da43a',
      },
      name: 'Unifun',
      owners: null,
      raw: {
        error: null,
        metadata: {
          attributes: [
            {
              trait_type: 'Fun',
              value: 'Yes',
            },
          ],
          description: 'Uniswap, Unifun!',
          image: 'https://gateway.pinata.cloud/ipfs/QmdVHTDaxXEdDYr5aUCLJaQNY37qyajFAXrJFFTEpLuzvz',
          name: 'Unifun',
        },
        tokenUri:
          'https://gateway.pinata.cloud/ipfs/QmNuScBxB2efPASax26pTk7B6UK1U3aejbLJCq3kiQexkc',
      },
      timeLastUpdated: '2024-07-28T23:36:41.174Z',
      tokenId: '1490',
      tokenType: 'ERC721',
      tokenUri: 'https://ipfs.io/ipfs/QmNuScBxB2efPASax26pTk7B6UK1U3aejbLJCq3kiQexkc',
    },
    {
      acquiredAt: {
        blockNumber: null,
        blockTimestamp: null,
      },
      balance: '1',
      collection: null,
      contract: {
        address: '0xc3D8457B3d0996E3210E518A9744c17277663d2F',
        contractDeployer: '0x3bAD7aA9dE2baAf2Bf6974F60E3Ff09255b70e1d',
        deployedBlockNumber: 4863976,
        isSpam: null,
        name: 'UniFun',
        openSeaMetadata: {
          bannerImageUrl: null,
          collectionName: null,
          collectionSlug: null,
          description: null,
          discordUrl: null,
          externalUrl: null,
          floorPrice: null,
          imageUrl: null,
          lastIngestedAt: null,
          safelistRequestStatus: null,
          twitterUsername: null,
        },
        spamClassifications: [],
        symbol: 'UNIFUN',
        tokenType: 'ERC721',
        totalSupply: null,
      },
      description: 'Uniswap, Unifun!',
      image: {
        cachedUrl: 'https://ipfs.io/ipfs/QmdVHTDaxXEdDYr5aUCLJaQNY37qyajFAXrJFFTEpLuzvz',
        contentType: null,
        originalUrl: 'https://ipfs.io/ipfs/QmdVHTDaxXEdDYr5aUCLJaQNY37qyajFAXrJFFTEpLuzvz',
        pngUrl: null,
        size: null,
        thumbnailUrl: null,
      },
      mint: {
        blockNumber: 5846401,
        mintAddress: '0xc3d8457b3d0996e3210e518a9744c17277663d2f',
        timestamp: '2024-05-06T05:03:36Z',
        transactionHash: '0x50994c73fcd338e46bd8e71f055869069a2f9b71a74672aaa5f6c78c4badde78',
      },
      name: 'Unifun',
      owners: null,
      raw: {
        error: null,
        metadata: {
          attributes: [
            {
              trait_type: 'Fun',
              value: 'Yes',
            },
          ],
          description: 'Uniswap, Unifun!',
          image: 'https://gateway.pinata.cloud/ipfs/QmdVHTDaxXEdDYr5aUCLJaQNY37qyajFAXrJFFTEpLuzvz',
          name: 'Unifun',
        },
        tokenUri:
          'https://gateway.pinata.cloud/ipfs/QmNuScBxB2efPASax26pTk7B6UK1U3aejbLJCq3kiQexkc',
      },
      timeLastUpdated: '2024-07-28T23:36:41.206Z',
      tokenId: '1491',
      tokenType: 'ERC721',
      tokenUri: 'https://ipfs.io/ipfs/QmNuScBxB2efPASax26pTk7B6UK1U3aejbLJCq3kiQexkc',
    },
    {
      acquiredAt: {
        blockNumber: null,
        blockTimestamp: null,
      },
      balance: '1',
      collection: null,
      contract: {
        address: '0xc3D8457B3d0996E3210E518A9744c17277663d2F',
        contractDeployer: '0x3bAD7aA9dE2baAf2Bf6974F60E3Ff09255b70e1d',
        deployedBlockNumber: 4863976,
        isSpam: null,
        name: 'UniFun',
        openSeaMetadata: {
          bannerImageUrl: null,
          collectionName: null,
          collectionSlug: null,
          description: null,
          discordUrl: null,
          externalUrl: null,
          floorPrice: null,
          imageUrl: null,
          lastIngestedAt: null,
          safelistRequestStatus: null,
          twitterUsername: null,
        },
        spamClassifications: [],
        symbol: 'UNIFUN',
        tokenType: 'ERC721',
        totalSupply: null,
      },
      description: 'Uniswap, Unifun!',
      image: {
        cachedUrl: 'https://ipfs.io/ipfs/QmdVHTDaxXEdDYr5aUCLJaQNY37qyajFAXrJFFTEpLuzvz',
        contentType: null,
        originalUrl: 'https://ipfs.io/ipfs/QmdVHTDaxXEdDYr5aUCLJaQNY37qyajFAXrJFFTEpLuzvz',
        pngUrl: null,
        size: null,
        thumbnailUrl: null,
      },
      mint: {
        blockNumber: 5846409,
        mintAddress: '0xc3d8457b3d0996e3210e518a9744c17277663d2f',
        timestamp: '2024-05-06T05:05:24Z',
        transactionHash: '0x1e6e7f0b76e673b87f9ae241d19529c7142bcf4ac1ab23da1437e48392fc46b3',
      },
      name: 'Unifun',
      owners: null,
      raw: {
        error: null,
        metadata: {
          attributes: [
            {
              trait_type: 'Fun',
              value: 'Yes',
            },
          ],
          description: 'Uniswap, Unifun!',
          image: 'https://gateway.pinata.cloud/ipfs/QmdVHTDaxXEdDYr5aUCLJaQNY37qyajFAXrJFFTEpLuzvz',
          name: 'Unifun',
        },
        tokenUri:
          'https://gateway.pinata.cloud/ipfs/QmNuScBxB2efPASax26pTk7B6UK1U3aejbLJCq3kiQexkc',
      },
      timeLastUpdated: '2024-07-28T23:36:41.204Z',
      tokenId: '1492',
      tokenType: 'ERC721',
      tokenUri: 'https://ipfs.io/ipfs/QmNuScBxB2efPASax26pTk7B6UK1U3aejbLJCq3kiQexkc',
    },
    {
      acquiredAt: {
        blockNumber: null,
        blockTimestamp: null,
      },
      balance: '1',
      collection: null,
      contract: {
        address: '0xc3D8457B3d0996E3210E518A9744c17277663d2F',
        contractDeployer: '0x3bAD7aA9dE2baAf2Bf6974F60E3Ff09255b70e1d',
        deployedBlockNumber: 4863976,
        isSpam: null,
        name: 'UniFun',
        openSeaMetadata: {
          bannerImageUrl: null,
          collectionName: null,
          collectionSlug: null,
          description: null,
          discordUrl: null,
          externalUrl: null,
          floorPrice: null,
          imageUrl: null,
          lastIngestedAt: null,
          safelistRequestStatus: null,
          twitterUsername: null,
        },
        spamClassifications: [],
        symbol: 'UNIFUN',
        tokenType: 'ERC721',
        totalSupply: null,
      },
      description: 'Uniswap, Unifun!',
      image: {
        cachedUrl: 'https://ipfs.io/ipfs/QmdVHTDaxXEdDYr5aUCLJaQNY37qyajFAXrJFFTEpLuzvz',
        contentType: null,
        originalUrl: 'https://ipfs.io/ipfs/QmdVHTDaxXEdDYr5aUCLJaQNY37qyajFAXrJFFTEpLuzvz',
        pngUrl: null,
        size: null,
        thumbnailUrl: null,
      },
      mint: {
        blockNumber: 5846417,
        mintAddress: '0xc3d8457b3d0996e3210e518a9744c17277663d2f',
        timestamp: '2024-05-06T05:07:12Z',
        transactionHash: '0xf06f15bb309c36d8161ba986cd2405446eee8ef468e35172982ed61361cfdcc6',
      },
      name: 'Unifun',
      owners: null,
      raw: {
        error: null,
        metadata: {
          attributes: [
            {
              trait_type: 'Fun',
              value: 'Yes',
            },
          ],
          description: 'Uniswap, Unifun!',
          image: 'https://gateway.pinata.cloud/ipfs/QmdVHTDaxXEdDYr5aUCLJaQNY37qyajFAXrJFFTEpLuzvz',
          name: 'Unifun',
        },
        tokenUri:
          'https://gateway.pinata.cloud/ipfs/QmNuScBxB2efPASax26pTk7B6UK1U3aejbLJCq3kiQexkc',
      },
      timeLastUpdated: '2024-07-27T16:34:43.118Z',
      tokenId: '1493',
      tokenType: 'ERC721',
      tokenUri: 'https://ipfs.io/ipfs/QmNuScBxB2efPASax26pTk7B6UK1U3aejbLJCq3kiQexkc',
    },
    {
      acquiredAt: {
        blockNumber: null,
        blockTimestamp: null,
      },
      balance: '1',
      collection: null,
      contract: {
        address: '0xc3D8457B3d0996E3210E518A9744c17277663d2F',
        contractDeployer: '0x3bAD7aA9dE2baAf2Bf6974F60E3Ff09255b70e1d',
        deployedBlockNumber: 4863976,
        isSpam: null,
        name: 'UniFun',
        openSeaMetadata: {
          bannerImageUrl: null,
          collectionName: null,
          collectionSlug: null,
          description: null,
          discordUrl: null,
          externalUrl: null,
          floorPrice: null,
          imageUrl: null,
          lastIngestedAt: null,
          safelistRequestStatus: null,
          twitterUsername: null,
        },
        spamClassifications: [],
        symbol: 'UNIFUN',
        tokenType: 'ERC721',
        totalSupply: null,
      },
      description: 'Uniswap, Unifun!',
      image: {
        cachedUrl: 'https://ipfs.io/ipfs/QmdVHTDaxXEdDYr5aUCLJaQNY37qyajFAXrJFFTEpLuzvz',
        contentType: null,
        originalUrl: 'https://ipfs.io/ipfs/QmdVHTDaxXEdDYr5aUCLJaQNY37qyajFAXrJFFTEpLuzvz',
        pngUrl: null,
        size: null,
        thumbnailUrl: null,
      },
      mint: {
        blockNumber: 5846419,
        mintAddress: '0xc3d8457b3d0996e3210e518a9744c17277663d2f',
        timestamp: '2024-05-06T05:07:36Z',
        transactionHash: '0xa7727edb4b26394bc9017f984b4980751188e465731224bf1cb61ebdf9341f9a',
      },
      name: 'Unifun',
      owners: null,
      raw: {
        error: null,
        metadata: {
          attributes: [
            {
              trait_type: 'Fun',
              value: 'Yes',
            },
          ],
          description: 'Uniswap, Unifun!',
          image: 'https://gateway.pinata.cloud/ipfs/QmdVHTDaxXEdDYr5aUCLJaQNY37qyajFAXrJFFTEpLuzvz',
          name: 'Unifun',
        },
        tokenUri:
          'https://gateway.pinata.cloud/ipfs/QmNuScBxB2efPASax26pTk7B6UK1U3aejbLJCq3kiQexkc',
      },
      timeLastUpdated: '2024-07-28T23:36:41.128Z',
      tokenId: '1494',
      tokenType: 'ERC721',
      tokenUri: 'https://ipfs.io/ipfs/QmNuScBxB2efPASax26pTk7B6UK1U3aejbLJCq3kiQexkc',
    },
    {
      acquiredAt: {
        blockNumber: null,
        blockTimestamp: null,
      },
      balance: '1',
      collection: null,
      contract: {
        address: '0xc3D8457B3d0996E3210E518A9744c17277663d2F',
        contractDeployer: '0x3bAD7aA9dE2baAf2Bf6974F60E3Ff09255b70e1d',
        deployedBlockNumber: 4863976,
        isSpam: null,
        name: 'UniFun',
        openSeaMetadata: {
          bannerImageUrl: null,
          collectionName: null,
          collectionSlug: null,
          description: null,
          discordUrl: null,
          externalUrl: null,
          floorPrice: null,
          imageUrl: null,
          lastIngestedAt: null,
          safelistRequestStatus: null,
          twitterUsername: null,
        },
        spamClassifications: [],
        symbol: 'UNIFUN',
        tokenType: 'ERC721',
        totalSupply: null,
      },
      description: 'Uniswap, Unifun!',
      image: {
        cachedUrl: 'https://ipfs.io/ipfs/QmdVHTDaxXEdDYr5aUCLJaQNY37qyajFAXrJFFTEpLuzvz',
        contentType: null,
        originalUrl: 'https://ipfs.io/ipfs/QmdVHTDaxXEdDYr5aUCLJaQNY37qyajFAXrJFFTEpLuzvz',
        pngUrl: null,
        size: null,
        thumbnailUrl: null,
      },
      mint: {
        blockNumber: 5846422,
        mintAddress: '0xc3d8457b3d0996e3210e518a9744c17277663d2f',
        timestamp: '2024-05-06T05:08:12Z',
        transactionHash: '0xc797bc381c12db6b5c31d0e60210206aee7c443101ef55c269dcd04c9899ee17',
      },
      name: 'Unifun',
      owners: null,
      raw: {
        error: null,
        metadata: {
          attributes: [
            {
              trait_type: 'Fun',
              value: 'Yes',
            },
          ],
          description: 'Uniswap, Unifun!',
          image: 'https://gateway.pinata.cloud/ipfs/QmdVHTDaxXEdDYr5aUCLJaQNY37qyajFAXrJFFTEpLuzvz',
          name: 'Unifun',
        },
        tokenUri:
          'https://gateway.pinata.cloud/ipfs/QmNuScBxB2efPASax26pTk7B6UK1U3aejbLJCq3kiQexkc',
      },
      timeLastUpdated: '2024-07-27T00:39:25.400Z',
      tokenId: '1495',
      tokenType: 'ERC721',
      tokenUri: 'https://ipfs.io/ipfs/QmNuScBxB2efPASax26pTk7B6UK1U3aejbLJCq3kiQexkc',
    },
    {
      acquiredAt: {
        blockNumber: null,
        blockTimestamp: null,
      },
      balance: '1',
      collection: null,
      contract: {
        address: '0xc3D8457B3d0996E3210E518A9744c17277663d2F',
        contractDeployer: '0x3bAD7aA9dE2baAf2Bf6974F60E3Ff09255b70e1d',
        deployedBlockNumber: 4863976,
        isSpam: null,
        name: 'UniFun',
        openSeaMetadata: {
          bannerImageUrl: null,
          collectionName: null,
          collectionSlug: null,
          description: null,
          discordUrl: null,
          externalUrl: null,
          floorPrice: null,
          imageUrl: null,
          lastIngestedAt: null,
          safelistRequestStatus: null,
          twitterUsername: null,
        },
        spamClassifications: [],
        symbol: 'UNIFUN',
        tokenType: 'ERC721',
        totalSupply: null,
      },
      description: 'Uniswap, Unifun!',
      image: {
        cachedUrl: 'https://ipfs.io/ipfs/QmdVHTDaxXEdDYr5aUCLJaQNY37qyajFAXrJFFTEpLuzvz',
        contentType: null,
        originalUrl: 'https://ipfs.io/ipfs/QmdVHTDaxXEdDYr5aUCLJaQNY37qyajFAXrJFFTEpLuzvz',
        pngUrl: null,
        size: null,
        thumbnailUrl: null,
      },
      mint: {
        blockNumber: 5846440,
        mintAddress: '0xc3d8457b3d0996e3210e518a9744c17277663d2f',
        timestamp: '2024-05-06T05:12:00Z',
        transactionHash: '0x3af186a786ae525d391af1468fe62302b3da9873fed1377e739c85fe0ccfca80',
      },
      name: 'Unifun',
      owners: null,
      raw: {
        error: null,
        metadata: {
          attributes: [
            {
              trait_type: 'Fun',
              value: 'Yes',
            },
          ],
          description: 'Uniswap, Unifun!',
          image: 'https://gateway.pinata.cloud/ipfs/QmdVHTDaxXEdDYr5aUCLJaQNY37qyajFAXrJFFTEpLuzvz',
          name: 'Unifun',
        },
        tokenUri:
          'https://gateway.pinata.cloud/ipfs/QmNuScBxB2efPASax26pTk7B6UK1U3aejbLJCq3kiQexkc',
      },
      timeLastUpdated: '2024-07-27T00:39:25.362Z',
      tokenId: '1496',
      tokenType: 'ERC721',
      tokenUri: 'https://ipfs.io/ipfs/QmNuScBxB2efPASax26pTk7B6UK1U3aejbLJCq3kiQexkc',
    },
    {
      acquiredAt: {
        blockNumber: null,
        blockTimestamp: null,
      },
      balance: '1',
      collection: null,
      contract: {
        address: '0xc3D8457B3d0996E3210E518A9744c17277663d2F',
        contractDeployer: '0x3bAD7aA9dE2baAf2Bf6974F60E3Ff09255b70e1d',
        deployedBlockNumber: 4863976,
        isSpam: null,
        name: 'UniFun',
        openSeaMetadata: {
          bannerImageUrl: null,
          collectionName: null,
          collectionSlug: null,
          description: null,
          discordUrl: null,
          externalUrl: null,
          floorPrice: null,
          imageUrl: null,
          lastIngestedAt: null,
          safelistRequestStatus: null,
          twitterUsername: null,
        },
        spamClassifications: [],
        symbol: 'UNIFUN',
        tokenType: 'ERC721',
        totalSupply: null,
      },
      description: 'Uniswap, Unifun!',
      image: {
        cachedUrl: 'https://ipfs.io/ipfs/QmdVHTDaxXEdDYr5aUCLJaQNY37qyajFAXrJFFTEpLuzvz',
        contentType: null,
        originalUrl: 'https://ipfs.io/ipfs/QmdVHTDaxXEdDYr5aUCLJaQNY37qyajFAXrJFFTEpLuzvz',
        pngUrl: null,
        size: null,
        thumbnailUrl: null,
      },
      mint: {
        blockNumber: 5846443,
        mintAddress: '0xc3d8457b3d0996e3210e518a9744c17277663d2f',
        timestamp: '2024-05-06T05:12:48Z',
        transactionHash: '0xa56dad7e5b6d9ea391d4d6c3d9f4b1057626e86bd4b47732dcbcb951b453c234',
      },
      name: 'Unifun',
      owners: null,
      raw: {
        error: null,
        metadata: {
          attributes: [
            {
              trait_type: 'Fun',
              value: 'Yes',
            },
          ],
          description: 'Uniswap, Unifun!',
          image: 'https://gateway.pinata.cloud/ipfs/QmdVHTDaxXEdDYr5aUCLJaQNY37qyajFAXrJFFTEpLuzvz',
          name: 'Unifun',
        },
        tokenUri:
          'https://gateway.pinata.cloud/ipfs/QmNuScBxB2efPASax26pTk7B6UK1U3aejbLJCq3kiQexkc',
      },
      timeLastUpdated: '2024-07-27T00:39:25.366Z',
      tokenId: '1497',
      tokenType: 'ERC721',
      tokenUri: 'https://ipfs.io/ipfs/QmNuScBxB2efPASax26pTk7B6UK1U3aejbLJCq3kiQexkc',
    },
    {
      acquiredAt: {
        blockNumber: null,
        blockTimestamp: null,
      },
      balance: '1',
      collection: null,
      contract: {
        address: '0xc3D8457B3d0996E3210E518A9744c17277663d2F',
        contractDeployer: '0x3bAD7aA9dE2baAf2Bf6974F60E3Ff09255b70e1d',
        deployedBlockNumber: 4863976,
        isSpam: null,
        name: 'UniFun',
        openSeaMetadata: {
          bannerImageUrl: null,
          collectionName: null,
          collectionSlug: null,
          description: null,
          discordUrl: null,
          externalUrl: null,
          floorPrice: null,
          imageUrl: null,
          lastIngestedAt: null,
          safelistRequestStatus: null,
          twitterUsername: null,
        },
        spamClassifications: [],
        symbol: 'UNIFUN',
        tokenType: 'ERC721',
        totalSupply: null,
      },
      description: 'Uniswap, Unifun!',
      image: {
        cachedUrl: 'https://ipfs.io/ipfs/QmdVHTDaxXEdDYr5aUCLJaQNY37qyajFAXrJFFTEpLuzvz',
        contentType: null,
        originalUrl: 'https://ipfs.io/ipfs/QmdVHTDaxXEdDYr5aUCLJaQNY37qyajFAXrJFFTEpLuzvz',
        pngUrl: null,
        size: null,
        thumbnailUrl: null,
      },
      mint: {
        blockNumber: 5846449,
        mintAddress: '0xc3d8457b3d0996e3210e518a9744c17277663d2f',
        timestamp: '2024-05-06T05:14:00Z',
        transactionHash: '0x25a3a1f2177f186f07c2cbc714459efb6cb560b8f773ea6ccd26977077bfed17',
      },
      name: 'Unifun',
      owners: null,
      raw: {
        error: null,
        metadata: {
          attributes: [
            {
              trait_type: 'Fun',
              value: 'Yes',
            },
          ],
          description: 'Uniswap, Unifun!',
          image: 'https://gateway.pinata.cloud/ipfs/QmdVHTDaxXEdDYr5aUCLJaQNY37qyajFAXrJFFTEpLuzvz',
          name: 'Unifun',
        },
        tokenUri:
          'https://gateway.pinata.cloud/ipfs/QmNuScBxB2efPASax26pTk7B6UK1U3aejbLJCq3kiQexkc',
      },
      timeLastUpdated: '2024-07-28T23:36:41.156Z',
      tokenId: '1498',
      tokenType: 'ERC721',
      tokenUri: 'https://ipfs.io/ipfs/QmNuScBxB2efPASax26pTk7B6UK1U3aejbLJCq3kiQexkc',
    },
  ],
  pageKey:
    'MHhjM2Q4NDU3YjNkMDk5NmUzMjEwZTUxOGE5NzQ0YzE3Mjc3NjYzZDJmOjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDVkYTpmYWxzZQ==',
  totalCount: 124,
  validAt: {
    blockHash: '0xf82ecb6b880a063b3b669d660576ca43a4063a3995e47b3a9f61c165c3170587',
    blockNumber: 6394162,
    blockTimestamp: '2024-07-28T23:36:24Z',
  },
}

export default function RecentMintsTable() {
  return (
    <Table
      // hoverRow
      size='sm'
      borderAxis='xBetween'
      variant='outlined'
      sx={{
        '--TableCell-paddingX': '1rem',
        '--TableCell-paddingY': '1rem',
        borderRadius: 2,
      }}
    >
      <thead>
        <tr>
          <th>
            <Typography level='title-sm' fontWeight='bolder'>
              Token ID
            </Typography>
          </th>
          <th>
            <Typography level='title-sm' fontWeight='bolder'>
              Owner
            </Typography>
          </th>
          <th>
            <Typography level='title-sm' fontWeight='bolder'>
              Transaction
            </Typography>
          </th>
          <th>
            <Typography level='title-sm' fontWeight='bolder'>
              Date of Mint
            </Typography>
          </th>
        </tr>
      </thead>
      <tbody>
        {mockResponse.ownedNfts.map((nft) => {
          return (
            <tr key={nft.tokenId}>
              <td>
                <Typography level='title-sm' sx={{ alignItems: 'flex-start' }}>
                  #{nft.tokenId}
                </Typography>
              </td>
              <td>
                <Typography level='body-sm'>{truncateAddress(nft.mint.mintAddress, 8)}</Typography>
              </td>
              <td>
                <Typography level='body-sm'>
                  {truncateAddress(nft.mint.transactionHash, 8)}
                </Typography>
              </td>
              <td>
                <Typography level='body-sm'>{nft.mint.timestamp}</Typography>
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}
