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
  stakeDataProvider: '0x6471b7e368bd5495FE39eF67e88B494773CBFD88',
  tokens: {
    [Stake.pegasys]: {
      TOKEN_STAKING: '0xDaB687e5A425a9212bcA6b1153C39bfd0C7E87A3',
      STAKING_REWARD_TOKEN: '0xd7e763C68d117d206fabA8df2383910c614cB93B',
      STAKING_HELPER: '0xb1AA8bEA743eAB6ec90f3fE6d2bA5F3a25cB2a70',
    },
    // [Stake.bpt]: {
    //   TOKEN_STAKING: '0xa1116930326D21fB917d5A27F1E9943A9595fb47',
    //   STAKING_REWARD_TOKEN: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
    // },
  },
};
