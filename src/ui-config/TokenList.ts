import { API_ETH_MOCK_ADDRESS } from '@aave/contract-helpers';

type ExtensionValue = string | number | boolean | null | undefined;

export interface TokenInfo {
  readonly chainId: number;
  readonly address: string;
  readonly name: string;
  readonly decimals: number;
  readonly symbol: string;
  readonly logoURI?: string;
  readonly tags?: string[];
  readonly extensions?: {
    readonly [key: string]:
      | {
          [key: string]:
            | {
                [key: string]: ExtensionValue;
              }
            | ExtensionValue;
        }
      | ExtensionValue;
  };
}

export interface Version {
  readonly major: number;
  readonly minor: number;
  readonly patch: number;
}

export interface Tags {
  readonly [tagId: string]: {
    readonly name: string;
    readonly description: string;
  };
}

export interface TokenList {
  readonly name: string;
  readonly timestamp: string;
  readonly version: Version;
  readonly tokens: TokenInfo[];
  readonly tokenMap?: {
    readonly [key: string]: TokenInfo;
  };
  readonly keywords?: string[];
  readonly tags?: Tags;
  readonly logoURI?: string;
}

const NETWORK_ASSETS: TokenInfo[] = [
  {
    name: 'Syscoin',
    symbol: 'SYS',
    decimals: 18,
    address: API_ETH_MOCK_ADDRESS,
    chainId: 570,
    logoURI:
      'https://assets.coingecko.com/coins/images/12559/standard/Avalanche_Circle_RedWhite_Trans.png?1696512369',
    extensions: {
      isNative: true,
    },
  },
];

export const TOKEN_LIST: TokenList = {
  name: 'Aave Labs Default',
  timestamp: '2024-01-22T15:47:25.037Z',
  version: {
    major: 11,
    minor: 12,
    patch: 0,
  },
  tags: {},
  logoURI: 'ipfs://QmNa8mQkrNKp1WEEeGjFezDmDeodkWRevGFN8JCV7b4Xir',
  keywords: ['aave', 'default'],
  tokens: [
    ...NETWORK_ASSETS,
    {
      address: '0x5B0aC6194499621630ddebb30c4aBE37037b30Ec',
      chainId: 570,
      name: 'DAI',
      symbol: 'DAI',
      decimals: 18,
      logoURI:
        'https://raw.githubusercontent.com/pegasys-fi/default-token-list/master/src/logos/570/0x5B0aC6194499621630ddebb30c4aBE37037b30Ec/logo.png',
    },
    {
      address: '0x368433CaC2A0B8D76E64681a9835502a1f2A8A30',
      chainId: 570,
      name: 'USD Coin',
      symbol: 'USDC',
      decimals: 6,
      logoURI:
        'https://raw.githubusercontent.com/pegasys-fi/default-token-list/master/src/logos/570/0x368433CaC2A0B8D76E64681a9835502a1f2A8A30/logo.png',
    },
    {
      address: '0x28c9c7Fb3fE3104d2116Af26cC8eF7905547349c',
      chainId: 570,
      name: 'Tether USD',
      symbol: 'USDT',
      decimals: 6,
      logoURI:
        'https://raw.githubusercontent.com/pegasys-fi/default-token-list/master/src/logos/570/0x28c9c7Fb3fE3104d2116Af26cC8eF7905547349c/logo.png',
    },
    {
      address: '0x2A4DC2e946b92AB4a1f7D62844EB237788F9056c',
      chainId: 570,
      name: 'Wrapped BTC',
      symbol: 'WBTC',
      decimals: 8,
      logoURI:
        'https://raw.githubusercontent.com/pegasys-fi/default-token-list/master/src/logos/570/0x2A4DC2e946b92AB4a1f7D62844EB237788F9056c/logo.png',
    },
    {
      address: '0xaA1c53AFd099E415208F47FCFA2C880f659E6904',
      chainId: 570,
      name: 'Wrapped Ether',
      symbol: 'WETH',
      decimals: 18,
      logoURI:
        'https://raw.githubusercontent.com/pegasys-fi/default-token-list/master/src/logos/570/0xaA1c53AFd099E415208F47FCFA2C880f659E6904/logo.png',
    },
    {
      address: '0x4200000000000000000000000000000000000006',
      chainId: 570,
      name: 'Wrapped Syscoin',
      symbol: 'WSYS',
      decimals: 18,
      logoURI:
        'https://raw.githubusercontent.com/pegasys-fi/default-token-list/master/src/logos/570/0x4200000000000000000000000000000000000006/logo.png',
    },
  ],
};

export const COMMON_SWAPS = [
  'SYS',
  'DAI',
  'USDC',
  'USDT',
  'WBTC',
  'WETH',
  'WSYS',
  // 'DAI.e',
  // 'USDC.e',
  // 'USDT.e',
  // 'GHO',
];
