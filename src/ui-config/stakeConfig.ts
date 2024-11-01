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
  stakeDataProvider: '0x80a8B656F570fE215cdE936E3E9E15dC05792bF2',
  tokens: {
    [Stake.pegasys]: {
      TOKEN_STAKING: '0xf18B6F5127433a37BA26B8daCF351BC1d688d50e',
      STAKING_REWARD_TOKEN: '0x1c5ed8Ff728574faf9a8Cba1E63DC9eBD14Aa9dd',
      STAKING_HELPER: '0xC91B26DB92784d89c413D20c77459ca581C282Af',
    },
    // [Stake.bpt]: {
    //   TOKEN_STAKING: '0xa1116930326D21fB917d5A27F1E9943A9595fb47',
    //   STAKING_REWARD_TOKEN: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
    // },
  },
};
