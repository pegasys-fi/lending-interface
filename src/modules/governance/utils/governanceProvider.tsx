import { PegasysGovernanceService } from '@pollum-io/contract-helpers';

import { governanceConfig } from '../../../ui-config/governanceConfig';
import { getProvider } from '../../../utils/marketsAndNetworksConfig';

export const governanceContract = new PegasysGovernanceService(
  getProvider(governanceConfig.chainId),
  {
    GOVERNANCE_ADDRESS: governanceConfig.addresses.PEGASYS_GOVERNANCE_V2,
    GOVERNANCE_HELPER_ADDRESS: governanceConfig.addresses.PEGASYS_GOVERNANCE_V2_HELPER,
  }
);
