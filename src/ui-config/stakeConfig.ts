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
  chainId: 5701 as ChainId,
  stakeDataProvider: '0x434fbbc0f10EC691D7190a36cFad0199d26f1C9c',
  tokens: {
    [Stake.pegasys]: {
      TOKEN_STAKING: '0x74F4A47DF11290b74C47EEAdCa3bD74986c6F4B1',
      STAKING_REWARD_TOKEN: '0x74F4A47DF11290b74C47EEAdCa3bD74986c6F4B1',
      STAKING_HELPER: '0xdEac07055f22Db3C9EAca512e254aFd55452F1a6',
    },
    // [Stake.bpt]: {
    //   TOKEN_STAKING: '0xa1116930326D21fB917d5A27F1E9943A9595fb47',
    //   STAKING_REWARD_TOKEN: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
    // },
  },
};
