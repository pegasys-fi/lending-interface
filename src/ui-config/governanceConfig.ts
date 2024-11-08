import { ChainId } from '@pollum-io/contract-helpers';

export interface GovernanceConfig {
  chainId: ChainId;
  walletBalanceProvider: string;
  votingAssetName: string;
  averageNetworkBlockTime: number;
  queryGovernanceDataUrl: string;
  wsGovernanceDataUrl: string;
  aaveTokenAddress: string;
  aAaveTokenAddress: string;
  stkAaveTokenAddress: string;
  governanceForumLink: string;
  governanceSnapshotLink: string;
  governanceFAQLink: string;
  addresses: {
    PEGASYS_GOVERNANCE_V2: string;
    PEGASYS_GOVERNANCE_V2_EXECUTOR_SHORT: string;
    PEGASYS_GOVERNANCE_V2_EXECUTOR_LONG: string;
    PEGASYS_GOVERNANCE_V2_HELPER: string;
  };
  ipfsGateway: string;
  fallbackIpfsGateway: string;
}

export const governanceConfig: GovernanceConfig = {
  chainId: 570 as ChainId,
  votingAssetName: 'PSYS + stkPSYS',
  averageNetworkBlockTime: 2.5,
  queryGovernanceDataUrl: 'https://rollux.graph.pegasys.fi/subgraphs/name/pollum-io/governance-v2',
  wsGovernanceDataUrl: 'wss://rollux.graph.pegasys.fi/subgraphs/name/pollum-io/governance-v2',
  aaveTokenAddress: '0x859BE09601dF573B4f2070403eC1B4B5bdd4f114',
  aAaveTokenAddress: '0x',
  stkAaveTokenAddress: '0xd7e763C68d117d206fabA8df2383910c614cB93B',
  governanceForumLink: 'https://gov.pegasys.fi/',
  governanceFAQLink: 'https://docs.aave.com/faq/governance',
  walletBalanceProvider: '0xb0F8a553Ff177bB68c7013A513B36AdC72738954',
  governanceSnapshotLink: '',
  addresses: {
    PEGASYS_GOVERNANCE_V2: '0xB3f313c99f3840eBd45C22301c66FB043Da88349',
    PEGASYS_GOVERNANCE_V2_EXECUTOR_SHORT: '0xC914F614CF6046d6c9BcBD2ccBb00cEcBa3aae7c',
    PEGASYS_GOVERNANCE_V2_EXECUTOR_LONG: '0xC914F614CF6046d6c9BcBD2ccBb00cEcBa3aae7c',
    PEGASYS_GOVERNANCE_V2_HELPER: '0x8C10D5D0dA7a351D109c841d125f77a0599b2DcF',
  },
  ipfsGateway: 'https://cloudflare-ipfs.com/ipfs',
  fallbackIpfsGateway: 'https://ipfs.io/ipfs',
};
