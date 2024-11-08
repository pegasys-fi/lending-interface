import { Provider } from '@ethersproject/providers';
import { Contract } from 'ethers';
import { Hashable } from 'src/utils/types';

type GetUserStakeUIDataHumanizedParams = {
  user: string;
};

// Contract ABI - only the methods we need
const ABI = [
  'function getAllStakedTokenUserData(address user) view returns (tuple(uint256 stakedTokenTotalSupply, uint256 stakedTokenTotalRedeemableAmount, uint256 stakeCooldownSeconds, uint256 stakeUnstakeWindow, uint256 stakedTokenPriceEth, uint256 rewardTokenPriceEth, uint256 distributionPerSecond, uint256 distributionEnd, uint256 stakeApy, uint256 currentExchangeRate, uint256 maxSlashablePercentage), tuple(uint256 stakedTokenUserBalance, uint256 underlyingTokenUserBalance, uint256 stakedTokenRedeemableAmount, uint256 rewardsToClaim, uint40 cooldownTimestamp, uint216 cooldownAmount), tuple(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256), tuple(uint256,uint256,uint256,uint256,uint40,uint216), uint256)',
  'function getAllStakedTokenData() view returns (tuple(uint256 stakedTokenTotalSupply, uint256 stakedTokenTotalRedeemableAmount, uint256 stakeCooldownSeconds, uint256 stakeUnstakeWindow, uint256 stakedTokenPriceEth, uint256 rewardTokenPriceEth, uint256 distributionPerSecond, uint256 distributionEnd, uint256 stakeApy, uint256 currentExchangeRate, uint256 maxSlashablePercentage), tuple(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256), uint256)',
];

export class UiStakeDataService implements Hashable {
  private readonly contract: Contract;

  constructor(
    provider: Provider,
    stakeDataProviderAddress: string,
    public readonly chainId: number
  ) {
    this.contract = new Contract(stakeDataProviderAddress, ABI, provider);
  }

  async getGeneralStakeUIDataHumanized() {
    const [stkPSYSData, , ethPrice] = await this.contract.getAllStakedTokenData();

    return {
      pegasys: {
        stakeTokenTotalSupply: stkPSYSData.stakedTokenTotalSupply.toString(),
        stakeTokenTotalRedeemableAmount: stkPSYSData.stakedTokenTotalRedeemableAmount.toString(),
        stakeCooldownSeconds: stkPSYSData.stakeCooldownSeconds.toNumber(),
        stakeUnstakeWindow: stkPSYSData.stakeUnstakeWindow.toNumber(),
        stakeTokenPriceEth: stkPSYSData.stakedTokenPriceEth.toString(),
        rewardTokenPriceEth: stkPSYSData.rewardTokenPriceEth.toString(),
        stakeApy: stkPSYSData.stakeApy.toString(),
        distributionPerSecond: stkPSYSData.distributionPerSecond.toString(),
        distributionEnd: stkPSYSData.distributionEnd.toString(),
      },
      bpt: {
        stakeTokenTotalSupply: '0',
        stakeTokenTotalRedeemableAmount: '0',
        stakeCooldownSeconds: 0,
        stakeUnstakeWindow: 0,
        stakeTokenPriceEth: '0',
        rewardTokenPriceEth: '0',
        stakeApy: '0',
        distributionPerSecond: '0',
        distributionEnd: '0',
      },
      ethPriceUsd: ethPrice.toString(),
    };
  }

  async getUserStakeUIDataHumanized({ user }: GetUserStakeUIDataHumanizedParams) {
    const [, stkPSYSUserData, , , ethPrice] = await this.contract.getAllStakedTokenUserData(user);

    return {
      pegasys: {
        stakeTokenUserBalance: stkPSYSUserData.stakedTokenUserBalance.toString(),
        underlyingTokenUserBalance: stkPSYSUserData.underlyingTokenUserBalance.toString(),
        stakeTokenRedeemableAmount: stkPSYSUserData.stakedTokenRedeemableAmount.toString(),
        userCooldownAmount: stkPSYSUserData.cooldownAmount.toString(),
        userCooldownTimestamp: Number(stkPSYSUserData.cooldownTimestamp),
        userIncentivesToClaim: stkPSYSUserData.rewardsToClaim.toString(),
      },
      bpt: {
        stakeTokenUserBalance: '0',
        underlyingTokenUserBalance: '0',
        stakeTokenRedeemableAmount: '0',
        userCooldownAmount: '0',
        userCooldownTimestamp: 0,
        userIncentivesToClaim: '0',
      },
      ethPriceUsd: ethPrice.toString(),
    };
  }

  public toHash() {
    return this.chainId.toString();
  }
}
