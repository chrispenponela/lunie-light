export default {
  id: 'cosmos-hub-testnet',
  name: 'Cosmos Stargate',
  description: 'Akash is a peer-to-peer cloud computing marketplace',
  logo: `logo.svg`,
  website: 'https://akash.network',
  apiURL: 'http://127.0.0.1:1317', // use `npx lcp --proxyUrl http://34.123.30.100:1317`
  rpcURL: 'ws://rpc.v.boz.sh:26657',
  stakingDenom: 'AKT',
  coinLookup: [
    {
      viewDenom: 'AKT',
      chainDenom: 'uakt',
      chainToViewConversionFactor: 1e-6,
      icon: `currencies/muon.png`,
    },
  ],
  addressPrefix: 'akash',
  validatorAddressPrefix: 'akashvaloper',
  validatorConsensusaddressPrefix: 'akashvalcons', // needed to map validators from staking queries to the validator set
  HDPath: `m/44'/118'/0'/0/0`,
  lockUpPeriod: `3 days`,
  fees: {
    default: {
      gasEstimate: 350000,
      feeOptions: [
        {
          denom: 'AKASH',
          amount: 0.001,
        },
      ],
    },
  },
  icon: `https://lunie.fra1.digitaloceanspaces.com/network-icons/akash.png`,
  // This is only to be used as a developer tool and for testing purposes
  // NEVER ENABLE LOCALSIGNING IN PRODUCTION OR FOR MAINNETS
  localSigning: false,
}
