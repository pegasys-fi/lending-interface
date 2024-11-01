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
  aaveTokenAddress: '0x1c5ed8Ff728574faf9a8Cba1E63DC9eBD14Aa9dd',
  aAaveTokenAddress: '0x',
  stkAaveTokenAddress: '0xf18B6F5127433a37BA26B8daCF351BC1d688d50e',
  governanceForumLink: 'https://gov.pegasys.fi/',
  governanceFAQLink: 'https://docs.aave.com/faq/governance',
  walletBalanceProvider: '0xb0F8a553Ff177bB68c7013A513B36AdC72738954',
  governanceSnapshotLink: '',
  addresses: {
    PEGASYS_GOVERNANCE_V2: '0x3b9511dce0d50AE8f15C618Bb8720E7c5c634AD8',
    PEGASYS_GOVERNANCE_V2_EXECUTOR_SHORT: '0xD280f3A2067487948E4c46e4b14e80876e6E36aa',
    PEGASYS_GOVERNANCE_V2_EXECUTOR_LONG: '0xD280f3A2067487948E4c46e4b14e80876e6E36aa',
    PEGASYS_GOVERNANCE_V2_HELPER: '0xa3480f6A129AD4514Fd5d6DF00DDa2C213eE0b3B',
  },
  ipfsGateway: 'https://cloudflare-ipfs.com/ipfs',
  fallbackIpfsGateway: 'https://ipfs.io/ipfs',
};
