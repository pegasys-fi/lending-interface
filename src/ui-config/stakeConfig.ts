import { ChainId, Stake } from '@pollum-io/contract-helpers';

export interface StakeConfig {
  chainId: ChainId;
  stakeDataProvider: string;
  tokens: {
    [token: string]: {
      TOKEN_STAKING: string;
      STAKING_REWARD_TOKEN: string;
      STAKING_HELPER?: string;
    };
  };
}

export const stakeConfig: StakeConfig = {
  chainId: 570 as ChainId,
  stakeDataProvider: '0x36346C93f98c578C90F5822826cfD37C514b8F45',
  tokens: {
    [Stake.pegasys]: {
      TOKEN_STAKING: '0xc0875e65b7073f22382df93B5fA6a4408549C50D',
      STAKING_REWARD_TOKEN: '0x48023b16c3e81AA7F6eFFbdEB35Bb83f4f31a8fd',
      STAKING_HELPER: '0x5eD0B6460356f28F469aA30E402084445cD84E65',
    },
    [Stake.bpt]: {
      TOKEN_STAKING: '0xa1116930326D21fB917d5A27F1E9943A9595fb47',
      STAKING_REWARD_TOKEN: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
    },
  },
};
